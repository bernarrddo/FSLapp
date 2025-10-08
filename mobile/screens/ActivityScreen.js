import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import CameraCapture from "../components/CameraCapture";
import ResultCard from "../components/ResultCard";

export default function ActivityScreen({ navigation }) {
  const [capturedImage, setCapturedImage] = useState(null);
  const [result, setResult] = useState(null);

  const handleCapture = (photo) => {
    setCapturedImage(photo);
    const correct = Math.random() > 0.5;

    if (correct) {
      setResult({
        status: "correct",
        message: "✅ Great job! You performed the sign correctly!",
      });
    } else {
      setResult({
        status: "incorrect",
        message:
          "❌ That wasn’t quite right. Go back to Tutor Mode to review.",
      });
      setTimeout(() => navigation.navigate("Tutor"), 3000);
    }
  };

  const handleReset = () => {
    setCapturedImage(null);
    setResult(null);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>🎥 Activity Mode</Text>
      <Text style={styles.subtitle}>
        Practice any sign and get real-time feedback.
      </Text>

      <CameraCapture
        onCapture={handleCapture}
        onReset={handleReset}
        capturedImage={capturedImage}
      />

      {result && <ResultCard result={result} onRetry={handleReset} />}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#f9fafb",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#2a9d8f",
    marginBottom: 10,
  },
  subtitle: {
    textAlign: "center",
    color: "#555",
    marginBottom: 15,
  },
});
