import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  StyleSheet,
  ClippingRectangle,
} from "react-native";
import AppButton from "../components/AppButton";

export default function WelcomeScreen() {
  return (
    <ImageBackground
      blurRadius={3}
      style={styles.background}
      source={require("../assets/welcomeBackground.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/logo/logo_transparent.png")}
          style={styles.logo}
        />
        <Text style={styles.tagLine}>Review Before Moving In</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <AppButton
          title="Login"
          onPress={() => console.log("login pressed")}
          bgColor="primary"
        />
        <AppButton
          title="SignUp"
          onPress={() => console.log("signup pressed")}
          bgColor="secondary"
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logoContainer: {
    alignItems: "center",
    position: "absolute",
    top: 50,
  },
  logo: {
    width: 250,
    height: 250,
  },
  tagLine: {
    fontSize: 24,
    fontWeight: "600",
    position: "relative",
    bottom: 37,
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
});
