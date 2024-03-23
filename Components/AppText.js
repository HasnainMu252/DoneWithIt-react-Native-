import { Platform, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function AppText({ children, style, ...otherProps }) {
  return (
    <Text style={[styles.container, style]} {...otherProps}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  container: {
    color: "black",
    ...Platform.select({
      ios: {
        color: "red",
        fontFamily: "Avenir",
        fontSize: 20,
      },
      android: {
        fontFamily: "Roboto",
        fontSize: 18,
        textTransform: "uppercase",
      },
    }),
  },
});
