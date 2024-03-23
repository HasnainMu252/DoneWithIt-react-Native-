import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Icon from "./Icon";
import IconSimple from "./IconSimple";
import AppText from "./AppText";

export default function ProfileSlide({
  name,
  iconName,
  iconColor,
  bgColor
}) {
  return (
    <>
      {/* <AppT ext>Profile</AppText> */}
      <TouchableOpacity style={styles.container}>
        <View style={styles.top}>
          <View style={styles.inner}>
            <IconSimple
              name={iconName}
              size={50}
              style={styles.FirstIcon}
              iconColor={iconColor}
              bgColor={bgColor}
            />
            <AppText style={styles.text}>{name}</AppText>
          </View>
        </View>

        <View style={styles.end}>
          <IconSimple
            name="chevron-double-right"
            size={45}
            style={styles.LastIcon}
          ></IconSimple>
        </View>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    // justifyContent:"center",
    padding: 10,
    // alignItems:"center"
  },
  text: {
    fontWeight: "700",
  },
  inner: {
    flexDirection: "row",
    alignItems: "center",
    // paddingLeft:5
  },
  top: {
    flex: 1,
  },
  end: {
    // alignItems: "center",
    // justifyContent:"center",
    // alignSelf:"center",
    // textAlign:"center"
    // margin:10
  },
  FirstIcon: {
    borderRadius: 50,
    // padding:10,
    marginRight: 15,
   
  },
  LastIcon: {
    backgroundColor: "#f6f5f8",
    borderRadius: 8,
  },
});
