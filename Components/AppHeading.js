import { Platform, StyleSheet, Text, View } from "react-native";
import React from "react";
import DefaultStyles from "../config/DefaultStyles";

export default function AppHeading({ children }) {
  return <Text style={DefaultStyles.Text}>{children}</Text>;
}

const styles = StyleSheet.create({

  
});
