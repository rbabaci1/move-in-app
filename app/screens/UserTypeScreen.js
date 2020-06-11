import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Zocial as GuestIcon, Entypo as UserIcon } from "@expo/vector-icons";

import colors from "../config/colors";
import SafeScreen from "../components/SafeScreen";

export default function UserTypeScreen() {
  return (
    <SafeScreen style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.box}>
          <UserIcon name="user" color="#6cad5d" size={70} />
          <Text style={styles.text}>Account</Text>
        </View>

        <View style={styles.box}>
          <GuestIcon name="guest" color="gray" size={70} />
          <Text style={styles.text}>Guest</Text>
        </View>
      </View>
    </SafeScreen>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.light,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: 200,
    height: 180,
    marginVertical: 20,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 22,
    fontWeight: "500",
  },
});
