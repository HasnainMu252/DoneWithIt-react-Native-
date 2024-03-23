import {
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

import colors from "../config/colors";

export default function AppButton({ title, onPress, color = "primary",style }) {
  return (
    <TouchableOpacity
      style={[styles.Button, { backgroundColor: colors[color] },style]}
    >
      <Text style={styles.Text} onPress={onPress}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  Button: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: "center",
    alignContent: "center",
    padding: 15,
    width: "100%",
  },
  Text: {
    color: "white",
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
    textAlign: "center",
  },
});
