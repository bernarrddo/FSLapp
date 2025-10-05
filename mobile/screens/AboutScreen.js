import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function AboutScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>ℹ️ About FSL Learning AI</Text>
      <Text style={styles.text}>
        FSL Learning AI helps users learn Filipino Sign Language (FSL) using
        AI-powered feedback.{"\n\n"}🎓 Learn from videos.{"\n"}🎥 Practice your
        signs.{"\n"}✅ Get real-time evaluation.
      </Text>
      <Text style={styles.footer}>Developed by Team FSL AI © 2025</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, backgroundColor: "#fff", padding: 20 },
  header: {
    fontSize: 24,
    fontWeight: "700",
    color: "#2a9d8f",
    marginBottom: 15,
    textAlign: "center",
  },
  text: { fontSize: 16, textAlign: "justify", color: "#333" },
  footer: { marginTop: 20, fontSize: 14, color: "#777", textAlign: "center" },
});