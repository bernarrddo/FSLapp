import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/4228/4228705.png",
        }}
        style={styles.logo}
      />
      <Text style={styles.title}>FSL Learning AI</Text>
      <Text style={styles.subtitle}>
        Learn and practice Filipino Sign Language with AI-powered feedback.
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Tutor")}
      >
        <Text style={styles.buttonText}>Start Learning</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f9fafb",
    padding: 20,
  },
  logo: { width: 120, height: 120, marginBottom: 20 },
  title: { fontSize: 28, fontWeight: "700", color: "#2a9d8f" },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    color: "#333",
    marginVertical: 10,
  },
  button: {
    backgroundColor: "#2a9d8f",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: { color: "#fff", fontWeight: "600", fontSize: 16 },
});