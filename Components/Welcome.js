import { ImageBackground, StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function Welcome_1() {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/logo-red.png")}
        ></Image>
        <Text style={styles.Textstyle}>It's Time to Sell Old Things</Text>
      </View>
      <View style={styles.loginButton}> </View>
      <View style={styles.registerButton}> </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  loginButton: {
    width: "100%",
    height: 40,
    backgroundColor: "#fc5c65",
  },
  logo: {
    width: 75,
    height: 75,
  },
  Textstyle: {
    paddingTop: 6,
    fontSize: 10,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  registerButton: {
    width: "100%",
    height: 40,
    backgroundColor: "#4ecdc4",
  },
});
