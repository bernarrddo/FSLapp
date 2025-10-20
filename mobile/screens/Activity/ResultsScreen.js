// mobile/screens/Activity/ResultsScreen.js
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ResultsScreen() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const loadResults = async () => {
      const saved = await AsyncStorage.getItem("fsl_results");
      if (saved) setResults(JSON.parse(saved));
    };
    loadResults();
  }, []);

  const clearResults = async () => {
    await AsyncStorage.removeItem("fsl_results");
    setResults([]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📊 Your Performance</Text>

      {results.length === 0 ? (
        <Text style={styles.empty}>No results yet. Try practicing!</Text>
      ) : (
        <FlatList
          data={results}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View
              style={[
                styles.card,
                item.status.includes("✅") ? styles.correct : styles.incorrect,
              ]}
            >
              <Text style={styles.phrase}>{item.phrase}</Text>
              <Text style={styles.status}>{item.status}</Text>
              <Text style={styles.score}>Score: {item.score}%</Text>
              <Text style={styles.date}>{item.date}</Text>
            </View>
          )}
        />
      )}

      {results.length > 0 && (
        <TouchableOpacity onPress={clearResults} style={styles.clearButton}>
          <Text style={styles.clearText}>🗑 Clear All Results</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f9fafb", padding: 16 },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#2a9d8f",
    textAlign: "center",
    marginBottom: 10,
  },
  card: {
    borderRadius: 12,
    padding: 15,
    marginVertical: 8,
  },
  correct: { backgroundColor: "#d8f3dc" },
  incorrect: { backgroundColor: "#ffe5e5" },
  phrase: { fontWeight: "700", fontSize: 18, color: "#333" },
  status: { fontSize: 16, color: "#555" },
  score: { fontSize: 14, color: "#777" },
  date: { fontSize: 12, color: "#999" },
  empty: { textAlign: "center", marginTop: 40, color: "#888" },
  clearButton: {
    marginTop: 15,
    backgroundColor: "#e63946",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
  },
  clearText: { color: "#fff", fontWeight: "700" },
});