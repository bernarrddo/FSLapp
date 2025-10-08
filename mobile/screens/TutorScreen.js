// mobile/screens/TutorScreen.js
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { VideoView, useVideoPlayer } from "expo-video";

// 🎥 Import 15 videos for each category
const GOOD_MORNING = [
  require("../../assets/videos/good_morning/gm1.mp4"),
  require("../../assets/videos/good_morning/gm2.mp4"),
  require("../../assets/videos/good_morning/gm3.mp4"),
  require("../../assets/videos/good_morning/gm4.mp4"),
  require("../../assets/videos/good_morning/gm5.mp4"),
  require("../../assets/videos/good_morning/gm6.mp4"),
  require("../../assets/videos/good_morning/gm7.mp4"),
  require("../../assets/videos/good_morning/gm8.mp4"),
  require("../../assets/videos/good_morning/gm9.mp4"),
  require("../../assets/videos/good_morning/gm10.mp4"),
  require("../../assets/videos/good_morning/gm11.mp4"),
  require("../../assets/videos/good_morning/gm12.mp4"),
  require("../../assets/videos/good_morning/gm13.mp4"),
  require("../../assets/videos/good_morning/gm14.mp4"),
];

const GOOD_AFTERNOON = [
  require("../../assets/videos/good_afternoon/ga1.mp4"),
  require("../../assets/videos/good_afternoon/ga2.mp4"),
  require("../../assets/videos/good_afternoon/ga3.mp4"),
  require("../../assets/videos/good_afternoon/ga4.mp4"),
  require("../../assets/videos/good_afternoon/ga5.mp4"),
  require("../../assets/videos/good_afternoon/ga6.mp4"),
  require("../../assets/videos/good_afternoon/ga7.mp4"),
  require("../../assets/videos/good_afternoon/ga8.mp4"),
  require("../../assets/videos/good_afternoon/ga9.mp4"),
  require("../../assets/videos/good_afternoon/ga10.mp4"),
  require("../../assets/videos/good_afternoon/ga11.mp4"),
  require("../../assets/videos/good_afternoon/ga12.mp4"),
  require("../../assets/videos/good_afternoon/ga13.mp4"),
  require("../../assets/videos/good_afternoon/ga14.mp4"),
];

const GOOD_EVENING = [
  require("../../assets/videos/good_evening/ge1.mp4"),
  require("../../assets/videos/good_evening/ge2.mp4"),
  require("../../assets/videos/good_evening/ge3.mp4"),
  require("../../assets/videos/good_evening/ge4.mp4"),
  require("../../assets/videos/good_evening/ge5.mp4"),
  require("../../assets/videos/good_evening/ge6.mp4"),
  require("../../assets/videos/good_evening/ge7.mp4"),
  require("../../assets/videos/good_evening/ge8.mp4"),
  require("../../assets/videos/good_evening/ge9.mp4"),
  require("../../assets/videos/good_evening/ge10.mp4"),
  require("../../assets/videos/good_evening/ge11.mp4"),
  require("../../assets/videos/good_evening/ge12.mp4"),
  require("../../assets/videos/good_evening/ge13.mp4"),
  require("../../assets/videos/good_evening/ge14.mp4"),
  require("../../assets/videos/good_evening/ge15.mp4"),
];

const VIDEO_SETS = { morning: GOOD_MORNING, afternoon: GOOD_AFTERNOON, evening: GOOD_EVENING };

export default function TutorScreen({ navigation }) {
  const [category, setCategory] = useState("morning");

  // Pick a random video from current category
  const randomVideo =
    VIDEO_SETS[category][Math.floor(Math.random() * VIDEO_SETS[category].length)];

  // 🎬 Create player (loop off by default)
  const player = useVideoPlayer(randomVideo, (p) => {
    p.loop = false;
    p.play();
  });

  const titleMap = {
    morning: "Good Morning",
    afternoon: "Good Afternoon",
    evening: "Good Evening",
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎓 Tutor Mode</Text>
      <Text style={styles.subtitle}>Learn FSL Greetings</Text>

      {/* Category Buttons */}
      <View style={styles.tabRow}>
        {["morning", "afternoon", "evening"].map((cat) => (
          <TouchableOpacity
            key={cat}
            style={[styles.tabButton, category === cat && styles.activeTab]}
            onPress={() => setCategory(cat)}
          >
            <Text style={[styles.tabText, category === cat && styles.activeTabText]}>
              {titleMap[cat]}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Video Player */}
      <View style={styles.videoContainer}>
        <Text style={styles.lessonTitle}>🧠 {titleMap[category]}</Text>
        <VideoView
          style={styles.video}
          player={player}
          useNativeControls
          resizeMode="cover"
        />
      </View>

      {/* FAB Button */}
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
  title: { fontSize: 24, fontWeight: "700", color: "#2a9d8f", textAlign: "center" },
  subtitle: { textAlign: "center", color: "#555", marginBottom: 20 },
  tabRow: { flexDirection: "row", justifyContent: "space-around", marginBottom: 20 },
  tabButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: "#e9ecef",
  },
  activeTab: { backgroundColor: "#2a9d8f" },
  tabText: { color: "#333", fontWeight: "600" },
  activeTabText: { color: "#fff" },
  videoContainer: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    justifyContent: "center",
  },
  lessonTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#2a9d8f",
    textAlign: "center",
    marginBottom: 10,
  },
  video: {
    width: "100%",
    height: 250,
    borderRadius: 12,
    backgroundColor: "#000",
  },
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
    elevation: 5,
  },
});