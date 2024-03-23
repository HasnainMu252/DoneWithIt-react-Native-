import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Screen from "../../Components/Screen";
import AppText from "../../Components/AppText";
import AppButton from "../../Components/AppButton";

export default function Splash() {
  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require(".././../assets/Splash2.png")}
          ></Image>
        </View>
        <View style={styles.secondBox}>
          <AppText style={styles.firstText}>
            Get Solution of Your All Issues in one Place
          </AppText>
          <AppText style={styles.secondText}>
            Simplify apartment living with our app we take care of your{" "}
            complaints smoothly
          </AppText>
          <AppButton style={styles.button} title="Get Started"></AppButton>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#bde4f4",
    height: "100%",
    width: "100%",
  },
  image: {
    // width: "100%",
    borderBottomRightRadius: 80,
  },
  imageContainer: {
    paddingBottom: 40,
  },
  secondBox: {
    padding: 20,
    width: 320,
    backgroundColor: "white",
    borderRadius: 20,
    justifyContent: "center",
    marginHorizontal: 20,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  firstText: {
    fontWeight: 800,
    textAlign: "center",
    fontSize: 22,
  },
  secondText: {
    paddingTop: 20,
    fontSize: 17,
    fontWeight: 400,
    textAlign: "justify",
  },
  button: {
    marginTop: 20,
    // backgroundColor: "slateblue",
    borderRadius: 10,
  },
});
