import React from "react";
import { Text, Platform, StyleSheet } from "react-native";

const AppText = ({ children, style }) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

const platformStyle = Platform.select({
  ios: {
    fontSize: 20,
    fontFamily: "Avenir",
  },
  android: {
    fontSize: 18,
    fontFamily: "Roboto",
  },
});

const styles = StyleSheet.create({
  text: { color: "black", ...platformStyle },
});

export default AppText;
