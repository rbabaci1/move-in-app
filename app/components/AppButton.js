import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import colors from "../config/colors";

export default function AppButton({ title, onPress, bgColor }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[bgColor] }]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    alignItems: "center",
    marginVertical: 10,
    padding: 15,
    borderRadius: 25,
  },
  buttonText: {
    color: colors.white,
    fontSize: 19,
    fontWeight: "600",
    textTransform: "uppercase",
  },
});
