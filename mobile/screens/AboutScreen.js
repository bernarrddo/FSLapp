import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function AboutScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("../../assets/bg.jpg")}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.overlay}>
        <Ionicons name="information-circle-outline" size={90} color="#fff" />

        <Text style={styles.title}>About FSL Learning App</Text>
        <Text style={styles.subtitle}>
          Empowering communication and inclusivity through Filipino Sign Language.
        </Text>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>🎯 Purpose</Text>
          <Text style={styles.text}>
            The FSL Learning App helps users learn and practice basic Filipino Sign
            Language through an interactive, camera-based approach. It promotes
            inclusivity and awareness in communication.
          </Text>

          <Text style={styles.sectionTitle}>🧠 Features</Text>
          <Text style={styles.text}>
            • Learning Mode – Watch video demonstrations of FSL signs.{"\n"}
            • Activity Mode – Practice signs using your camera and receive instant feedback.{"\n"}
            • Clean, accessible, and user-friendly design.
          </Text>

          <Text style={styles.sectionTitle}>💡 Developers</Text>
          <Text style={styles.text}>
            Created by passionate students aiming to bridge the communication gap
            between the deaf and hearing communities through modern AI and mobile
            technology.
          </Text>

          <View style={styles.teamSection}>
            <Text style={styles.sectionTitle}>👩‍💻 App Developers</Text>

            {[
              { name: "Christian Emmanuel Bernardo", role: "System Administration" },
              { name: "Alyzza Carale", role: "Cyber Physical System" },
              { name: "Emmanuel Cuyugan", role: "System Administration" },
              { name: "Jhon Doria", role: "Railway Engineering" },
              { name: "Lance Montojo", role: "Data Science" },
            ].map((member, index) => (
              <View key={index} style={styles.memberCard}>
                <Ionicons name="person-circle-outline" size={40} color="#2a9d8f" />
                <View style={styles.memberInfo}>
                  <Text style={styles.memberName}>{member.name}</Text>
                  <Text style={styles.memberRole}>{member.role}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Home")}
          activeOpacity={0.8}
        >
          <Ionicons name="home-outline" size={22} color="#fff" />
          <Text style={styles.buttonText}>Back to Home</Text>
        </TouchableOpacity>
      </ScrollView>
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
    flexGrow: 1,
    alignItems: "center",
    padding: 24,
    backgroundColor: "rgba(0,0,0,0.45)",
  },
  title: {
    fontSize: 28,
    fontWeight: "900",
    color: "#fff",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 6,
    textShadowColor: "rgba(0,0,0,0.4)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  subtitle: {
    fontSize: 16,
    color: "#f1faee",
    textAlign: "center",
    marginBottom: 25,
    paddingHorizontal: 20,
    lineHeight: 22,
  },
  card: {
    backgroundColor: "rgba(255,255,255,0.95)",
    borderRadius: 20,
    padding: 20,
    width: "100%",
    marginBottom: 25,
    elevation: 6,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
  },
  sectionTitle: {
    fontSize: 19,
    fontWeight: "800",
    color: "#2a9d8f",
    marginTop: 12,
    marginBottom: 6,
  },
  text: {
    fontSize: 15,
    color: "#333",
    lineHeight: 22,
    marginBottom: 10,
  },
  teamSection: {
    marginTop: 14,
  },
  memberCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f7f7f7",
    padding: 10,
    borderRadius: 12,
    marginBottom: 10,
  },
  memberInfo: {
    marginLeft: 10,
  },
  memberName: {
    fontWeight: "700",
    color: "#264653",
    fontSize: 15,
  },
  memberRole: {
    fontSize: 13,
    color: "#6c757d",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2a9d8f",
    borderRadius: 14,
    paddingVertical: 12,
    paddingHorizontal: 25,
    gap: 8,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "800",
    fontSize: 16,
  },
});