import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function IconSimple({
  name = "Email",
  size = 40,
  iconColor = "black",
  bgColor,
  style,
}) {
  return (
    <View
      style={[
        {
          width: size,
          height: size,

          borderRadius: size / 2,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: bgColor,
        },
        style,
      ]}
    >
      <MaterialCommunityIcons name={name} size={size * 0.5} color={iconColor} />
    </View>
  );
}

const styles = StyleSheet.create({});
