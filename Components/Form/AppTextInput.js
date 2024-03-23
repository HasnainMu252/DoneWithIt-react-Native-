import { StyleSheet, TextInput, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../config/colors";
import DefaultStyles from "../../config/DefaultStyles";

export default function AppTextInput({ icon, style, width, ...otherProps }) {
  return (
    <View style={[styles.constainer, { width }, style]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={30}
          color={colors.black}
          style={styles.icon}
          width={width}
        />
      )}
      <TextInput style={DefaultStyles.Text} {...otherProps}></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  constainer: {
    backgroundColor: colors.medium,
    flexDirection: "row",
    // width: "100%",
    borderRadius: 25,
    padding: 15,
    marginVertical: 10,
  },

  icon: {
    // paddingLeft:10,
    paddingRight: 10,
  },
});
