import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

// Screens 
import HomeScreen from "./mobile/screens/HomeScreen";
import LearningScreen from "./mobile/screens/LearningScreen";
import ActivityMainScreen from "./mobile/screens/ActivityMainScreen"; // ✅ updated main activity hub
import AboutScreen from "./mobile/screens/AboutScreen";
import LoginScreen from "./mobile/auth/LoginScreen";
import SignupScreen from "./mobile/auth/SignupScreen";

// 👇 Learning topic screens
import NumbersScreen from "./mobile/screens/Topics/NumbersScreen";
import FamilyScreen from "./mobile/screens/Topics/FamilyScreen";
import ShapesScreen from "./mobile/screens/Topics/ShapesScreen";
import ColorsScreen from "./mobile/screens/Topics/ColorsScreen";

// 👇 Practice activity screens
import PracticeNumbersScreen from "./mobile/screens/Activity/PracticeNumbersScreen";
import PracticeFamilyScreen from "./mobile/screens/Activity/PracticeFamilyScreen";
import PracticeShapesScreen from "./mobile/screens/Activity/PracticeShapesScreen";
import PracticeColorsScreen from "./mobile/screens/Activity/PracticeColorsScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#2a9d8f",
        tabBarInactiveTintColor: "#8d99ae",
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Learning"
        component={LearningScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="school-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Activity"
        component={ActivityMainScreen} // ✅ replaced with new Activity main hub
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="videocam-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="About"
        component={AboutScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="information-circle-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* 🔐 Auth Screens */}
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />

        {/* 🏠 Main Tabs */}
        <Stack.Screen name="MainTabs" component={MainTabs} />

        {/* 📚 Learning Topics */}
        <Stack.Screen name="Numbers" component={NumbersScreen} />
        <Stack.Screen name="Family" component={FamilyScreen} />
        <Stack.Screen name="Shapes" component={ShapesScreen} />
        <Stack.Screen name="Colors" component={ColorsScreen} />

        {/* 🎥 Activity Practice Screens */}
        <Stack.Screen name="PracticeNumbers" component={PracticeNumbersScreen} />
        <Stack.Screen name="PracticeFamily" component={PracticeFamilyScreen} />
        <Stack.Screen name="PracticeShapes" component={PracticeShapesScreen} />
        <Stack.Screen name="PracticeColors" component={PracticeColorsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}