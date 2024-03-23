import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ImageComponent,
} from "react-native";
import React from "react";
import AppText from "../Components/AppText";
import colors from "../config/colors";
import Icon from "../Components/Icon";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Separator from "../Components/Separator";

export default function ListItems({
  image,
  title,
  subTitle,
  onPress,
  ImageComponent,
}) {
  return (
    <TouchableHighlight underlayColor={"lightgrey"} onPress={onPress}>
      <View style={styles.container}>
        <View>
          {ImageComponent}
          {image && <Image style={styles.imageStyle} source={image}></Image>}
        </View>
        <View style={styles.textContainer}>
          <AppText style={styles.title} numberOfLines={1}>
            {title}
          </AppText>
          {subTitle && (
            <AppText style={styles.subTitle} numberOfLines={2}>
              {subTitle}
            </AppText>
          )}
        </View>
        
          <MaterialCommunityIcons name="chevron-right" color="grey" size={25} />
        
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 23,
    backgroundColor: colors.white,
    alignItems:"center"
  },
  textContainer: {
    flex: 1,
    paddingLeft: 15,
    justifyContent: "center",
  },
  imageStyle: {
    width: 75,
    height: 75,
    borderRadius: 50,
  },
  subTitle: {
    fontSize: 15,
    color: "grey",
  },
  title: {
    fontSize: 16,
  },
  icon: {
    paddingLeft: 15,
    justifyContent: "center",
    flex: 1,
  },
});
