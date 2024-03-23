import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import AppText from "./AppText";
import colors from "../config/colors";

export default function ({ firstName, lastName, joinDate }) {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require("../assets/mosh.jpg")} />
        </View>

        <View style={styles.firstText}>
          <AppText style={{ color: "#a7a7a7", fontSize: 20 }}>joined</AppText>
          <AppText style={{ fontWeight: 800, fontSize: 24 }}>
            {joinDate}
          </AppText>
        </View>
      </View>
      <View style={styles.secondText}>
        <AppText style={{ fontWeight: 800, fontSize: 25 }}>{firstName}</AppText>
        <AppText style={{ fontWeight: 400, fontSize: 20, color: "#a7a7a7" }}>
          {lastName}
        </AppText>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
  },
  imageContainer: {
    shadowOffset: { width: 0, height: 4 },
    shadowColor: "red",
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 4, // This is for Android elevation
    borderRadius: 100, // Border radius same as image
    width: 130, // Width same as image

    height: 130, // Height same as image
  },
  image: {
    borderRadius: 100,
    width: 130,
    height: 130,
  },
  firstText: {
    marginLeft: 50,
  },
  secondText: {
    flexDirection: "column",
    // marginTop:15,
    margin: 10,
  },
});
