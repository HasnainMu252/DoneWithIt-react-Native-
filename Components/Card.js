import { StyleSheet, Text, View, Image } from "react-native";

import AppText from "./AppText";
import colors from "../config/colors";

function Card({ image, title, subTitle }) {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="stretch"
        style={styles.ImageStyle}
        source={image}
      ></Image>
      <View style={styles.TitleText}>
        <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
        <AppText style={styles.subTitle} numberOfLines={1}>{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    backgroundColor: "white",
    marginBottom: 20,
    overflow: "hidden", //we use this overflow for image is going out of the contianer
  },
  ImageStyle: {
    width: "100%",
    height: 200,
    justifyContent: "center",
  },
  TitleText: {
    padding: 15,
  },
  title: {
    paddingBottom: 8,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.secondary,
  },
});
export default Card;
