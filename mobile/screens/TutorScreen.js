// mobile/screens/TutorScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Video } from "expo-av";
import { Ionicons } from "@expo/vector-icons";

const TUTORIALS = {
  greetings: [
    {
      phrase: "Good morning",
      video: "https://www.w3schools.com/html/mov_bbb.mp4",
      steps: ["Raise hand to chest", "Move outward slightly."],
    },
    {
      phrase: "Good afternoon",
      video: "https://www.w3schools.com/html/movie.mp4",
      steps: ["Flat hand from mouth", "Sun overhead gesture."],
    },
  ],
  common: [
    {
      phrase: "Thank you",
      video: "https://www.w3schools.com/html/mov_bbb.mp4",
      steps: ["Flat hand at chin", "Move outward politely."],
    },
    {
      phrase: "Please",
      video: "https://www.w3schools.com/html/movie.mp4",
      steps: ["Flat hand on chest", "Small circular motion."],
    },
  ],
  actions: [
    {
      phrase: "Eat",
      video: "https://www.w3schools.com/html/mov_bbb.mp4",
      steps: ["Bring fingertips together", "Move toward mouth."],
    },
    {
      phrase: "Drink",
      video: "https://www.w3schools.com/html/movie.mp4",
      steps: ["Curl hand like a cup", "Bring to mouth."],
    },
  ],
};

export default function TutorScreen({ navigation }) {
  const [category, setCategory] = useState("greetings");
  const [lesson, setLesson] = useState(null);

  const pickRandomLesson = () => {
    const lessons = TUTORIALS[category];
    const randomIndex = Math.floor(Math.random() * lessons.length);
    setLesson(lessons[randomIndex]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎓 Tutor Mode</Text>
      <Text style={styles.subtitle}>Choose a category to start learning.</Text>

      <View style={styles.tabRow}>
        {["greetings", "common", "actions"].map((cat) => (
          <TouchableOpacity
            key={cat}
            style={[styles.tabButton, category === cat && styles.activeTab]}
            onPress={() => {
              setCategory(cat);
              setLesson(null);
            }}
          >
            <Text
              style={[
                styles.tabText,
                category === cat && styles.activeTabText,
              ]}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.pickButton} onPress={pickRandomLesson}>
        <Text style={styles.pickText}>🎲 Pick Random Sign</Text>
      </TouchableOpacity>

      <ScrollView style={styles.lessonBox}>
        {lesson ? (
          <>
            <Text style={styles.lessonTitle}>🧠 {lesson.phrase}</Text>
            <Video
              source={{ uri: lesson.video }}
              resizeMode="cover"
              shouldPlay={false}
              useNativeControls
              style={styles.video}
            />
            <Text style={styles.sectionTitle}>Steps:</Text>
            {lesson.steps.map((s, i) => (
              <Text key={i} style={styles.step}>
                {s}
              </Text>
            ))}
          </>
        ) : (
          <Text style={styles.placeholder}>
            Pick a category and tap “🎲 Pick Random Sign” to start!
          </Text>
        )}
      </ScrollView>

      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate("Activity")}
      >
        <Ionicons name="videocam-outline" size={28} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f9fafb", padding: 16 },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#2a9d8f",
    textAlign: "center",
  },
  subtitle: { textAlign: "center", color: "#555", marginBottom: 20 },
  tabRow: { flexDirection: "row", justifyContent: "space-around" },
  tabButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: "#e9ecef",
  },
  activeTab: { backgroundColor: "#2a9d8f" },
  tabText: { color: "#333", fontWeight: "600" },
  activeTabText: { color: "#fff" },
  pickButton: {
    marginTop: 20,
    alignSelf: "center",
    backgroundColor: "#2a9d8f",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  pickText: { color: "#fff", fontWeight: "700" },
  lessonBox: {
    flex: 1,
    marginTop: 20,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
  },
  lessonTitle: { fontSize: 20, fontWeight: "700", color: "#2a9d8f" },
  sectionTitle: { marginTop: 15, fontWeight: "700", color: "#2a9d8f" },
  step: { fontSize: 16, color: "#333", marginTop: 5 },
  placeholder: { textAlign: "center", color: "#888", marginTop: 50 },
  video: { width: "100%", height: 220, borderRadius: 10, marginTop: 10 },
  fab: {
    position: "absolute",
    bottom: 25,
    right: 25,
    backgroundColor: "#2a9d8f",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});