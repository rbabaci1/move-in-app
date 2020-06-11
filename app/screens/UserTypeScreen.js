import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Zocial as GuestIcon, Entypo as UserIcon } from "@expo/vector-icons";

import colors from "../config/colors";
import SafeScreen from "../components/SafeScreen";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function UserTypeScreen() {
  return (
    <SafeScreen style={styles.safeScreen}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.box}>
          <UserIcon name="user" color={colors.primary} size={70} />
          <Text style={styles.text}>Account</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.box}>
          <GuestIcon name="guest" color={colors.medium} size={70} />
          <Text style={styles.text}>Guest</Text>
        </TouchableOpacity>
      </View>
    </SafeScreen>
  );
}

const styles = StyleSheet.create({
  safeScreen: {
    backgroundColor: colors.light,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: 200,
    height: 200,
    marginVertical: 30,
    borderRadius: 100,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: colors.medium,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.15,
    elevation: 1,
  },
  text: {
    fontSize: 22,
    fontWeight: "500",
  },
});
