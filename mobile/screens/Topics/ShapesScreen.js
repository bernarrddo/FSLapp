import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from "react-native";
import { VideoView, useVideoPlayer } from "expo-video";
import { Ionicons } from "@expo/vector-icons";

const VIDEOS = [
  require("../../../assets/videos/shapes/s1.mp4"),
  require("../../../assets/videos/shapes/s2.mp4"),
  require("../../../assets/videos/shapes/s3.mp4"),
];

const LESSONS = ["Circle", "Triangle", "Square"];

const MESSAGES = [
  "Round and round — that’s a Circle! 🔵",
  "Triangle has three sides! 🔺",
  "Four sides make a Square! 🟥",
];

export default function ShapesScreen({ navigation }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const player = useVideoPlayer(VIDEOS[selectedIndex], (p) => p.play());

  return (
    <ImageBackground
      source={require("../../../assets/bg.jpg")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        {/* Title */}
        <Text style={styles.title}>🔺 Shapes</Text>

        {/* Buttons */}
        <View style={styles.buttonWrapper}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.buttonRow}
          >
            {LESSONS.map((label, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.lessonButton,
                  selectedIndex === index && styles.activeButton,
                ]}
                onPress={() => setSelectedIndex(index)}
              >
                <Text
                  style={[
                    styles.lessonText,
                    selectedIndex === index && styles.activeText,
                  ]}
                >
                  {label}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Video */}
        <View style={styles.videoContainer}>
          <VideoView
            style={styles.video}
            player={player}
            useNativeControls
            resizeMode="contain"
          />
        </View>

        {/* Back Button */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back-circle" size={40} color="#fff" />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>

        {/* Bottom Section */}
        <View style={styles.bottomSection}>
          <Text style={styles.encouragement}>{MESSAGES[selectedIndex]}</Text>

          <View style={styles.progressRow}>
            {LESSONS.map((_, i) => (
              <View
                key={i}
                style={[
                  styles.dot,
                  i === selectedIndex && styles.activeDot,
                ]}
              />
            ))}
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1 },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,0.3)",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 60,
  },
  title: {
    fontSize: 34,
    fontWeight: "900",
    color: "#fff",
    textShadowColor: "#000",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 6,
    marginBottom: 20,
  },
  buttonWrapper: {
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  lessonButton: {
    backgroundColor: "#43AA8B",
    height: 60,
    paddingHorizontal: 28,
    borderRadius: 30,
    marginHorizontal: 8,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 4,
  },
  activeButton: {
    backgroundColor: "#F3722C",
    transform: [{ scale: 1.1 }],
  },
  lessonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 18,
  },
  activeText: {
    textDecorationLine: "underline",
  },
  videoContainer: {
    width: "90%",
    aspectRatio: 16 / 9,
    borderRadius: 24,
    overflow: "hidden",
    backgroundColor: "#fff",
    borderWidth: 4,
    borderColor: "#90BE6D",
    marginBottom: 40,
    elevation: 8,
  },
  video: {
    width: "100%",
    height: "100%",
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#577590",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 50,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 10,
  },
  backText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 18,
    marginLeft: 8,
  },
  bottomSection: {
    alignItems: "center",
    width: "90%",
    marginTop: 10,
  },
  encouragement: {
    color: "#fff",
    fontWeight: "800",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 10,
    textShadowColor: "#000",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  progressRow: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#ccc",
    marginHorizontal: 4,
    marginVertical: 2,
  },
  activeDot: {
    backgroundColor: "#F3722C",
    transform: [{ scale: 1.2 }],
  },
});