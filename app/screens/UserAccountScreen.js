import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import SafeScreen from "../components/SafeScreen";
import colors from "../config/colors";
import ListItem from "../components/ListItem";

const listItems = [
  {
    id: 1,
    title: "Logout",
    icon: { name: "logout", backgroundColor: colors.danger },
  },
];

export default function UserAccountScreen() {
  return (
    <SafeScreen style={styles.screen}>
      <View style={styles.container}>
        <ListItem /> // todo
      </View>

      <View>
        <FlatList data={listItems} />
        // todo
      </View>
    </SafeScreen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  container: {
    flex: 1,
  },
});
