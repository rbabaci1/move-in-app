import React from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";
import Constants from "expo-constants";

export default function SafeScreen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={styles.screen}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});
