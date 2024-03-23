import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";
import React from "react";
import AppButton from "./AppButton";

export default function Welcome_1() {
  return (
    <View>
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
        <View style={styles.ButtonContainer}>
          <AppButton
            title={"Login"}
            onPress={() => {
              console.log("I was Tapped");
            }}
          ></AppButton>
        </View>
        <View style={styles.ButtonContainer}>
          <AppButton
            title={"Register"}
            color="secondary"
            onPress={() => {
              console.log("I was Tapped");
            }}
          ></AppButton>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  ButtonContainer: {
    marginVertical: 6,
    marginHorizontal: 12,
  },
  background: {
    // flex: 1,
    // justifyContent: "flex-end",
    // alignItems: "center",
    // flex:1,
    flexGrow: 1,
    justifyContent: "flex-end",
    alignContent: "center",
    width: "100%",
    height: "100%",
  },

  logo: {
    width: 100,
    height: 100,
  },
  Textstyle: {
    paddingTop: 6,
    fontSize: 14,
  },
  logoContainer: {
    position: "absolute",
    top: 100,
    left: 125,
    alignItems: "center",
  },
});
