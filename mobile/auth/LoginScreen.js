// mobile/screens/LoginScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

const API_URL = "https://fsl-backend-hnj6.onrender.com";

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch(`${API_URL}/api/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if (response.ok) {
        Alert.alert("✅ Login Successful");
        navigation.replace("MainTabs"); // go to home tab
      } else {
        Alert.alert("❌ Login Failed", data.error || "Invalid credentials");
      }
    } catch (error) {
      Alert.alert("⚠️ Server Error", "Could not reach backend.");
    }
  };

  const handleGuest = () => {
    Alert.alert(
      "Continue as Guest",
      "You will not be able to save progress, but you can still use all features.",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Continue",
          onPress: () => navigation.replace("MainTabs"),
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>👋 Welcome to FSL App</Text>
      <Text style={styles.subtitle}>Login to start learning!</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.guestButton]}
        onPress={handleGuest}
      >
        <Text style={styles.buttonText}>Continue without an Account</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
        <Text style={styles.signupText}>Don't have an account? Sign up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0fdf4",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: { fontSize: 26, fontWeight: "700", color: "#2a9d8f" },
  subtitle: { fontSize: 16, color: "#555", marginBottom: 20 },
  input: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  button: {
    width: "90%",
    backgroundColor: "#2a9d8f",
    padding: 14,
    borderRadius: 10,
    marginTop: 10,
    alignItems: "center",
  },
  guestButton: { backgroundColor: "#457b9d" },
  buttonText: { color: "#fff", fontWeight: "700" },
  signupText: { marginTop: 20, color: "#2a9d8f", fontWeight: "600" },
});