import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

import HomeScreen from "./mobile/screens/HomeScreen";
import TutorScreen from "./mobile/screens/TutorScreen";
import ActivityScreen from "./mobile/screens/ActivityScreen";
import AboutScreen from "./mobile/screens/AboutScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarActiveTintColor: "#2a9d8f",
            tabBarInactiveTintColor: "#8d99ae",
            tabBarStyle: { height: 60, paddingBottom: 8 },
            tabBarIcon: ({ color, size }) => {
              let iconName;
              switch (route.name) {
                case "Home":
                  iconName = "home-outline";
                  break;
                case "Tutor":
                  iconName = "school-outline";
                  break;
                case "Activity":
                  iconName = "videocam-outline";
                  break;
                case "About":
                  iconName = "information-circle-outline";
                  break;
                default:
                  iconName = "ellipse-outline";
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Tutor" component={TutorScreen} />
          <Tab.Screen name="Activity" component={ActivityScreen} />
          <Tab.Screen name="About" component={AboutScreen} />
        </Tab.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );

}
