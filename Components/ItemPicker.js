import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import AppText from "./AppText";

export default function ItemPicker({ label, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.Text}>{label}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  Text: {
    padding: 20,
    fontSize: 18,
  },
});
