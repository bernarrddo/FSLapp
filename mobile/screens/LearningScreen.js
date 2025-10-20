import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function LearningScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("../../assets/bg.jpg")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <ScrollView contentContainerStyle={styles.container}>
          {/* Title and Subtitle */}
          <Text style={styles.title}>🎓 Learning Mode</Text>
          <Text style={styles.subtitle}>
            Let’s explore Filipino Sign Language together!
          </Text>

          {/* Topic Buttons */}
          <View style={styles.buttonGrid}>
            <TouchableOpacity
              style={[styles.topicButton, { backgroundColor: "#43AA8B" }]}
              onPress={() => navigation.navigate("Numbers")}
              activeOpacity={0.8}
            >
              <Ionicons name="calculator-outline" size={36} color="#fff" />
              <Text style={styles.buttonText}>Numbers</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.topicButton, { backgroundColor: "#F3722C" }]}
              onPress={() => navigation.navigate("Family")}
              activeOpacity={0.8}
            >
              <Ionicons name="people-outline" size={36} color="#fff" />
              <Text style={styles.buttonText}>Family</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.topicButton, { backgroundColor: "#577590" }]}
              onPress={() => navigation.navigate("Shapes")}
              activeOpacity={0.8}
            >
              <Ionicons name="shapes-outline" size={36} color="#fff" />
              <Text style={styles.buttonText}>Shapes</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.topicButton, { backgroundColor: "#F9C74F" }]}
              onPress={() => navigation.navigate("Colors")}
              activeOpacity={0.8}
            >
              <Ionicons name="color-palette-outline" size={36} color="#fff" />
              <Text style={styles.buttonText}>Colors</Text>
            </TouchableOpacity>
          </View>

          {/* Back Button */}
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.navigate("Home")}
          >
            <Ionicons name="arrow-back-circle" size={28} color="#fff" />
            <Text style={styles.backText}>Back to Home</Text>
          </TouchableOpacity>
        </ScrollView>
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
  },
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 60,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 34,
    fontWeight: "900",
    color: "#fff",
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
    marginBottom: 40,
  },
  topicButton: {
    width: "40%",
    aspectRatio: 1,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
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