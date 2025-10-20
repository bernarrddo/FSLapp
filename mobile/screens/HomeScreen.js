import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("../../assets/bg.jpg")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        {/* Title and Subtitle */}
        <Text style={styles.title}>🤟 Welcome to FSL Learning</Text>
        <Text style={styles.subtitle}>
          Learn and practice Filipino Sign Language in a fun and interactive way.
        </Text>

        {/* Main Buttons */}
        <View style={styles.buttonGroup}>
          <TouchableOpacity
            style={[styles.mainButton, { backgroundColor: "#43AA8B" }]}
            onPress={() => navigation.navigate("Learning")}
            activeOpacity={0.85}
          >
            <Ionicons name="school-outline" size={28} color="#fff" />
            <Text style={styles.buttonText}>Start Learning</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.mainButton, { backgroundColor: "#264653" }]}
            onPress={() => navigation.navigate("About")}
            activeOpacity={0.85}
          >
            <Ionicons name="information-circle-outline" size={28} color="#fff" />
            <Text style={styles.buttonText}>About App</Text>
          </TouchableOpacity>
        </View>
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
    backgroundColor: "rgba(0,0,0,0.45)",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 50,
  },
  title: {
    fontSize: 34,
    fontWeight: "900",
    color: "#fff",
    textAlign: "center",
    marginBottom: 10,
    textShadowColor: "rgba(0,0,0,0.4)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  subtitle: {
    fontSize: 18,
    color: "#f1faee",
    textAlign: "center",
    marginBottom: 50,
    lineHeight: 24,
    fontWeight: "500",
    paddingHorizontal: 20,
    textShadowColor: "rgba(0,0,0,0.25)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  buttonGroup: {
    width: "85%",
    alignItems: "center",
    gap: 20,
  },
  mainButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    borderRadius: 16,
    paddingVertical: 16,
    gap: 12,
    elevation: 6,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "800",
  },
});