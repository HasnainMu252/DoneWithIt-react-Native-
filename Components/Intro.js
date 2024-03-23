import React from "react";
import { StyleSheet, View, Image } from "react-native";

import colors from "../config/colors";
import AppText from "../Components/AppText";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ paddingBottom: 7 }}>
        <View style={styles.closeIcon}>
          <AntDesign name="close" size={34} color="white" />
        </View>
        {/* <AppText>Hasdsadsadsad</AppText> */}
        <View style={styles.deleteIcon}>
          <Feather name="trash-2" size={34} color="white" />
        </View>
      </View>
      <Image
        resizeMode="contain"
        style={styles.image} // <-- corrected style name
        source={require("../assets/chair.jpg")}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    width: 50,
    height: 50,
    // backgroundColor: colors.primary,
    position: "absolute",
    top: 40,
    left: 30,
  },
  container: {
    backgroundColor: "black",
    flexDirection: "column",
  },
  deleteIcon: {
    width: 50,
    height: 50,
    // backgroundColor: colors.secondary,
    position: "absolute",
    top: 40,
    right: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
