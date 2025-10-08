import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function AboutScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Ionicons name="information-circle-outline" size={80} color="#2a9d8f" />

      <Text style={styles.title}>About FSL Learning App</Text>
      <Text style={styles.subtitle}>
        Empowering communication and inclusivity through Filipino Sign Language.
      </Text>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>🎯 Purpose</Text>
        <Text style={styles.text}>
          The FSL Learning App aims to help users learn and practice basic Filipino
          Sign Language gestures using an interactive, camera-based approach. It is
          designed to promote inclusivity and awareness in communication.
        </Text>

        <Text style={styles.sectionTitle}>🧠 Features</Text>
        <Text style={styles.text}>
          • Tutor Mode – Watch video demonstrations of common FSL signs.{"\n"}
          • Activity Mode – Practice signs using your device camera and receive
          instant feedback.{"\n"}
          • Offline learning and lightweight UI for accessibility.
        </Text>

        <Text style={styles.sectionTitle}>💡 Developers</Text>
        <Text style={styles.text}>
          This project was developed by dedicated students aiming to create a
          meaningful tool for both the deaf and hearing communities. It combines
          modern AI technology and mobile accessibility to make learning easier.
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Home")}
      >
        <Ionicons name="home-outline" size={20} color="#fff" />
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#f9fafb",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "800",
    color: "#2a9d8f",
    marginTop: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 15,
    color: "#555",
    textAlign: "center",
    marginBottom: 25,
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    width: "100%",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#2a9d8f",
    marginTop: 10,
    marginBottom: 6,
  },
  text: {
    fontSize: 15,
    color: "#333",
    lineHeight: 22,
    marginBottom: 10,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2a9d8f",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 25,
    marginTop: 25,
    gap: 8,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
});