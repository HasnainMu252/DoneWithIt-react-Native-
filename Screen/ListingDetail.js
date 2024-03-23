import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import AppText from "../Components/AppText";
import colors from "../config/colors";
import ListItems from "./ListItems";
export default function ListingDetail(props) {
  return (
    <View>
      <Image
        style={styles.imageStyle}
        source={require("../assets/jacket.jpg")}
      ></Image>
      <View style={styles.DetailText}>
        <AppText style={styles.title} numberOfLines={1}>Red JAcket 34 size for sell  </AppText>
        <AppText style={styles.subTitle} numberOfLines={1}>100$</AppText>
      </View>
      <ListItems
        image={require("../assets/mosh.jpg")}
        title="Mosh Hamedani"
        subTitle={"50 Listing"}
      ></ListItems>
    </View>
  );
}

const styles = StyleSheet.create({
  DetailText: {
    padding: 15,
  },
  title: {
    fontSize: 24,
    paddingBottom: 5,
    textTransform: "uppercase",
    // fontFamily:'Avenir'
  },
  subTitle: {
    fontSize: 25,
    fontWeight: "bold",
    color: colors.secondary,
  },
  imageStyle: {
    width: "100%",
    height: 250,
  },
});
