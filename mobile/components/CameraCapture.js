import React, { useRef, useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import { Ionicons } from "@expo/vector-icons";

export default function CameraCapture({ onCapture, onReset, capturedImage }) {
  const cameraRef = useRef(null);
  const [permission, requestPermission] = useCameraPermissions();
  const [isCapturing, setIsCapturing] = useState(false);

  if (!permission) {
    // Camera permission state is loading
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.permissionContainer}>
        <Text style={styles.permissionText}>
          Camera access is required to practice signs.
        </Text>
        <TouchableOpacity
          style={styles.permissionButton}
          onPress={requestPermission}
        >
          <Text style={styles.permissionButtonText}>Grant Permission</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // Capture photo
  const takePicture = async () => {
    if (cameraRef.current && !isCapturing) {
      setIsCapturing(true);
      try {
        const photo = await cameraRef.current.takePictureAsync({
          quality: 0.7,
          base64: true,
        });
        onCapture(photo);
      } catch (error) {
        console.error("Error capturing photo:", error);
      } finally {
        setIsCapturing(false);
      }
    }
  };

  return (
    <View style={styles.container}>
      {/* When an image is captured, show it */}
      {capturedImage ? (
        <View style={styles.previewContainer}>
          <Image source={{ uri: capturedImage.uri }} style={styles.preview} />
          <TouchableOpacity style={styles.resetButton} onPress={onReset}>
            <Ionicons name="refresh" size={28} color="#fff" />
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.cameraContainer}>
          {/* CameraView cannot have children */}
          <CameraView
            ref={cameraRef}
            style={styles.camera}
            facing="front"
          />

          {/* Overlay buttons on top of camera */}
          <View style={styles.overlay}>
            <TouchableOpacity
              style={styles.captureButton}
              onPress={takePicture}
              disabled={isCapturing}
            >
              <Ionicons name="camera-outline" size={36} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    marginVertical: 20,
  },
  cameraContainer: {
    width: "100%",
    height: 400,
    position: "relative",
    borderRadius: 12,
    overflow: "hidden",
  },
  camera: {
    flex: 1,
  },
  overlay: {
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
  },
  captureButton: {
    backgroundColor: "#2a9d8f",
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 4,
  },
  previewContainer: {
    width: "100%",
    height: 400,
    position: "relative",
    borderRadius: 12,
    overflow: "hidden",
  },
  preview: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  resetButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#2a9d8f",
    borderRadius: 30,
    padding: 10,
  },
  permissionContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  permissionText: {
    color: "#333",
    textAlign: "center",
    marginBottom: 10,
  },
  permissionButton: {
    backgroundColor: "#2a9d8f",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  permissionButtonText: {
    color: "#fff",
    fontWeight: "700",
  },
});