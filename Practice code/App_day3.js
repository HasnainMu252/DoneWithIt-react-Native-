import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Dimensions,
  Platform
} from "react-native";
import { useDeviceOrientation } from "@react-native-community/hooks";

export default function App() {
  const { landscape } = useDeviceOrientation();
  const screenHeight = Dimensions.get("screen").height;
  const portraitHeight = screenHeight * 0.3; // 30% of screen height

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: "100%",
          height: landscape ? screenHeight : portraitHeight
        }}
      ></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? 30 : 0
  }
});
