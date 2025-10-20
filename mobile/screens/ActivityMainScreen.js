import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ActivityMainScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("../../assets/bg.jpg")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        {/* Title and Subtitle */}
        <Text style={styles.title}>🎥 Activity Mode</Text>
        <Text style={styles.subtitle}>
          Choose a topic and test your FSL signing skills!
        </Text>

        {/* Topic Buttons */}
        <View style={styles.buttonGrid}>
          <TouchableOpacity
            style={[styles.topicButton, { backgroundColor: "#43AA8B" }]}
            onPress={() => navigation.navigate("PracticeNumbers")}
            activeOpacity={0.85}
          >
            <Ionicons name="calculator-outline" size={36} color="#fff" />
            <Text style={styles.buttonText}>Numbers</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.topicButton, { backgroundColor: "#F3722C" }]}
            onPress={() => navigation.navigate("PracticeFamily")}
            activeOpacity={0.85}
          >
            <Ionicons name="people-outline" size={36} color="#fff" />
            <Text style={styles.buttonText}>Family</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.topicButton, { backgroundColor: "#577590" }]}
            onPress={() => navigation.navigate("PracticeShapes")}
            activeOpacity={0.85}
          >
            <Ionicons name="shapes-outline" size={36} color="#fff" />
            <Text style={styles.buttonText}>Shapes</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.topicButton, { backgroundColor: "#F9C74F" }]}
            onPress={() => navigation.navigate("PracticeColors")}
            activeOpacity={0.85}
          >
            <Ionicons name="color-palette-outline" size={36} color="#fff" />
            <Text style={styles.buttonText}>Colors</Text>
          </TouchableOpacity>
        </View>

        {/* Back Button */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back-circle" size={28} color="#fff" />
          <Text style={styles.backText}>Back to Home</Text>
        </TouchableOpacity>
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
    backgroundColor: "rgba(255,255,255,0.25)",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 60,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 34,
    fontWeight: "900",
    color: "#fff",
    textAlign: "center",
    textShadowColor: "rgba(0,0,0,0.4)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 6,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "#f1faee",
    textAlign: "center",
    marginBottom: 40,
    fontWeight: "600",
    textShadowColor: "rgba(0,0,0,0.3)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  buttonGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 20,
    width: "90%",
    marginBottom: 50,
  },
  topicButton: {
    width: "40%",
    aspectRatio: 1,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    elevation: 6,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    transform: [{ scale: 1 }],
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "800",
    textAlign: "center",
    marginTop: 10,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#264653",
    borderRadius: 50,
    paddingVertical: 12,
    paddingHorizontal: 30,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 6,
  },
  backText: {
    color: "#fff",
    fontWeight: "700",
    marginLeft: 8,
    fontSize: 18,
  },
});