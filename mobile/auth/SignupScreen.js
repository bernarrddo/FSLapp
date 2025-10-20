import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from "react-native";
import { safeFetch } from "../utils/api";

export default function SignupScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSignup = async () => {
    try {
      const data = await safeFetch("/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      if (data.success) {
        Alert.alert("Success!", "Account created successfully.");
        navigation.navigate("Login");
      } else {
        Alert.alert("Signup Failed", data.message || "Please try again.");
      }
    } catch (err) {
      Alert.alert("Connection Error", err.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🧒 Create Account</Text>
      <Text style={styles.subtitle}>Let's start learning together!</Text>

      <TextInput
        placeholder="Full Name"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.link}>Already have an account? Log in</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 25, backgroundColor: "#e6f7ff" },
  title: { fontSize: 32, fontWeight: "800", textAlign: "center", color: "#2a9d8f" },
  subtitle: { textAlign: "center", color: "#555", marginBottom: 30, fontSize: 16 },
  input: {
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#2a9d8f",
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontWeight: "700", fontSize: 18 },
  link: { textAlign: "center", color: "#0077b6", marginTop: 15, fontSize: 16 },
});