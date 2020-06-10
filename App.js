import React from "react";
import { StyleSheet } from "react-native";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import UserAccountScreen from "./app/screens/UserAccountScreen";
import SafeScreen from "./app/components/SafeScreen";

export default function App() {
  return <SafeScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
