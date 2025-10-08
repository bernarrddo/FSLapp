import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ResultCard({ result, onRetry }) {
  const isCorrect = result.status === "correct";

  return (
    <View
      style={[
        styles.card,
        { borderColor: isCorrect ? "#2a9d8f" : "#e63946" },
      ]}
    >
      <Ionicons
        name={isCorrect ? "checkmark-circle" : "close-circle"}
        size={64}
        color={isCorrect ? "#2a9d8f" : "#e63946"}
        style={styles.icon}
      />

      <Text
        style={[
          styles.message,
          { color: isCorrect ? "#2a9d8f" : "#e63946" },
        ]}
      >
        {result.message}
      </Text>

      <TouchableOpacity
        style={[
          styles.retryButton,
          { backgroundColor: isCorrect ? "#2a9d8f" : "#e63946" },
        ]}
        onPress={onRetry}
      >
        <Ionicons name="refresh-outline" size={22} color="#fff" />
        <Text style={styles.retryText}>Try Again</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "90%",
    alignSelf: "center",
    backgroundColor: "#fff",
    borderRadius: 16,
    borderWidth: 2,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 3,
  },
  icon: {
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "600",
    marginVertical: 10,
  },
  retryButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 10,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 4,
    elevation: 3,
  },
  retryText: {
    color: "#fff",
    fontWeight: "700",
  },
});