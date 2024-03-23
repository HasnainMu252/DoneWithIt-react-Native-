import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Dimensions,
  Platform,
} from "react-native";
import { useDeviceOrientation } from "@react-native-community/hooks";

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        flexDirection: "row", //horizontal
        alignItems: "center", //main
        justifyContent: "space-evenly", //secondary axis
        // alignContent: "center",
        // flexWrap: "wrap",
      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          // flexBasis: 100,
          width: 100,
          height: 100,
          //flexShrink:1, // it shrink it self to give space to other items
          // flexGrow:1,
          // flex:1
        }}
      />
      <View
        style={{
          backgroundColor: "black",
          width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: "green",
          width: 100,
          height: 100,
          // top: 30,
          // bottom:10,
          // left: 130,
          // position:"absolute", // it affect the other items
          // position: "relative", // it would not affect the other items (by default in react native)
        }}
      />
      <View
        style={{
          backgroundColor: "pink",
          width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: "yellow",
          width: 100,
          height: 100,
        }}
      />
    </View>
  );
}
