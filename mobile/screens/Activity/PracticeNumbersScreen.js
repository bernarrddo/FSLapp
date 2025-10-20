import React, { useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ImageBackground,
  ActivityIndicator,
} from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import * as FileSystem from "expo-file-system";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_URL } from "../../utils/config";

export default function PracticeColorsScreen({ navigation }) {
  const cameraRef = useRef(null);
  const [permission, requestPermission] = useCameraPermissions();

  const [isRecording, setIsRecording] = useState(false);
  const [videoUri, setVideoUri] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!permission?.granted) requestPermission();
  }, [permission]);

  const handleRecord = async () => {
    if (!cameraRef.current) return;

    try {
      if (isRecording) {
        await cameraRef.current.stopRecording();
        setIsRecording(false);
        return;
      }

      setIsRecording(true);
      setVideoUri(null);
      setFeedback(null);

      const video = await cameraRef.current.recordAsync({
        maxDuration: 5,
        quality: "480p",
      });

      if (video?.uri) {
        console.log("Recorded video:", video.uri);
        setVideoUri(video.uri);
      } else {
        Alert.alert("Error", "No video URI was returned.");
      }
    } catch (err) {
      console.error("Recording error:", err);
      Alert.alert("Error", "Could not record video.");
    } finally {
      setIsRecording(false);
    }
  };

  const handleRedo = async () => {
    if (videoUri) await FileSystem.deleteAsync(videoUri, { idempotent: true });
    setVideoUri(null);
    setFeedback(null);
  };

  const handleSubmit = async () => {
    if (!videoUri) return Alert.alert("No video", "Record your sign first!");

    try {
      setLoading(true);
      const base64 = await FileSystem.readAsStringAsync(videoUri, {
        encoding: FileSystem.EncodingType.Base64,
      });

      const res = await fetch(`${API_URL}/assess`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          target: "colors",
          frames: [`data:video/mp4;base64,${base64}`],
        }),
      });

      const result = await res.json();
      const message =
        result.message || `Prediction: ${result.predicted_label || "Unknown"}`;
      setFeedback(message);

      const newResult = {
        id: Date.now().toString(),
        phrase: "Color Practice",
        status: message.includes("✅") ? "✅ Correct" : "❌ Incorrect",
        score: result.confidence ? (result.confidence * 100).toFixed(1) : 0,
        date: new Date().toLocaleString(),
      };

      const saved = await AsyncStorage.getItem("fsl_results");
      const parsed = saved ? JSON.parse(saved) : [];
      parsed.unshift(newResult);
      await AsyncStorage.setItem("fsl_results", JSON.stringify(parsed));

      Alert.alert("Feedback received!", "Check your Results tab for progress.");
    } catch (error) {
      console.error("Prediction error:", error);
      Alert.alert("Error", "Failed to get feedback from server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ImageBackground
      source={require("../../../assets/bg.jpg")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>🔢 Practice Number Signs</Text>
        <Text style={styles.subtitle}>
          Record your sign and submit it for feedback!
        </Text>

        <View style={styles.cameraContainer}>
          <CameraView
            ref={cameraRef}
            style={styles.camera}
            facing="front"
            mode="video"
          />
        </View>

        <View style={styles.buttonRow}>
          <TouchableOpacity
            onPress={handleRecord}
            style={[
              styles.recordButton,
              isRecording && styles.stopButton,
            ]}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>
              {isRecording ? "⏹ Stop Recording" : "🎬 Start Recording"}
            </Text>
          </TouchableOpacity>
        </View>

        {videoUri && !isRecording && (
          <View style={styles.actionRow}>
            <TouchableOpacity
              onPress={handleSubmit}
              style={styles.submitButton}
              activeOpacity={0.8}
            >
              <Text style={styles.buttonText}>✅ Submit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleRedo}
              style={styles.redoButton}
              activeOpacity={0.8}
            >
              <Text style={styles.buttonText}>🔁 Redo</Text>
            </TouchableOpacity>
          </View>
        )}

        {loading && (
          <ActivityIndicator
            size="large"
            color="#2a9d8f"
            style={{ marginTop: 20 }}
          />
        )}

        {feedback && !loading && (
          <View style={styles.feedbackBox}>
            <Text style={styles.feedbackText}>{feedback}</Text>
          </View>
        )}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,0.9)",
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "900",
    color: "#264653",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: "#6c757d",
    textAlign: "center",
    marginBottom: 15,
  },
  cameraContainer: {
    width: "95%",
    aspectRatio: 3 / 4,
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: "#000",
    elevation: 6,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
  },
  camera: {
    flex: 1,
    width: "100%",
  },
  buttonRow: {
    marginTop: 20,
  },
  recordButton: {
    backgroundColor: "#2a9d8f",
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 14,
    elevation: 4,
  },
  stopButton: {
    backgroundColor: "#e63946",
  },
  actionRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "90%",
    marginTop: 22,
  },
  submitButton: {
    backgroundColor: "#457b9d",
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 12,
    elevation: 3,
  },
  redoButton: {
    backgroundColor: "#f4a261",
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 12,
    elevation: 3,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
    textAlign: "center",
  },
  feedbackBox: {
    marginTop: 25,
    padding: 16,
    borderRadius: 16,
    width: "90%",
    backgroundColor: "#d8f3dc",
    borderColor: "#2a9d8f",
    borderWidth: 1.2,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  feedbackText: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "700",
    color: "#264653",
  },
});