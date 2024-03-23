import { StyleSheet, View } from "react-native";
import React from "react";
import AppText from "./AppText";

export default function ErrorMsg({ error }) {
  if (!error) return null;
  return (
    <View>
      <AppText style={styles.error}>{error}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  error: {
    color: "red",
  },
});
