// mobile/components/ResultCard.js
import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function ResultCard({ result, onRetry }) {
  const { status, message } = result;
  const isCorrect = status === "correct";

  return (
    <View
      style={[styles.card, isCorrect ? styles.correct : styles.incorrect]}
    >
      <Text style={styles.header}>Feedback</Text>
      <Text style={styles.message}>{message}</Text>
      {isCorrect && <Button title="Try Another Sign" onPress={onRetry} />}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "95%",
    borderRadius: 12,
    padding: 16,
    marginTop: 20,
  },
  header: { fontSize: 18, fontWeight: "700", marginBottom: 8, color: "#fff" },
  message: { color: "#fff", fontSize: 16, marginBottom: 12 },
  correct: { backgroundColor: "#2a9d8f" },
  incorrect: { backgroundColor: "#e76f51" },
});