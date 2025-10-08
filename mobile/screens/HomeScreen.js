import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* App logo or hero image */}
      <Image
        source={require("../../assets/icon.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Title & Subtitle */}
      <Text style={styles.title}>🧏‍♀️ FSL Learning App</Text>
      <Text style={styles.subtitle}>
        Learn, practice, and master basic Filipino Sign Language gestures with
        your camera.
      </Text>

      {/* Main Buttons */}
      <View style={styles.buttonGroup}>
        <TouchableOpacity
          style={styles.buttonPrimary}
          onPress={() => navigation.navigate("Tutor")}
        >
          <Ionicons name="school-outline" size={22} color="#fff" />
          <Text style={styles.buttonText}>Start Learning</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonSecondary}
          onPress={() => navigation.navigate("Activity")}
        >
          <Ionicons name="videocam-outline" size={22} color="#2a9d8f" />
          <Text style={styles.buttonTextSecondary}>Practice Signs</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonTertiary}
          onPress={() => navigation.navigate("About")}
        >
          <Ionicons name="information-circle-outline" size={22} color="#555" />
          <Text style={styles.buttonTextTertiary}>About</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9fafb",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  logo: {
    width: 160,
    height: 160,
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "800",
    color: "#2a9d8f",
    textAlign: "center",
  },
  subtitle: {
    textAlign: "center",
    color: "#555",
    fontSize: 15,
    marginTop: 10,
    marginBottom: 40,
    paddingHorizontal: 15,
  },
  buttonGroup: {
    width: "100%",
    alignItems: "center",
  },
  buttonPrimary: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2a9d8f",
    width: "80%",
    paddingVertical: 14,
    borderRadius: 12,
    marginBottom: 15,
    gap: 8,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 4,
    elevation: 3,
  },
  buttonSecondary: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#2a9d8f",
    width: "80%",
    paddingVertical: 14,
    borderRadius: 12,
    marginBottom: 15,
    gap: 8,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 4,
    elevation: 2,
  },
  buttonTertiary: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f1f1f1",
    width: "80%",
    paddingVertical: 12,
    borderRadius: 12,
    gap: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonTextSecondary: {
    color: "#2a9d8f",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonTextTertiary: {
    color: "#333",
    fontWeight: "600",
    fontSize: 15,
  },
});