import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import Screen from "../Components/Screen";
import ListItems from "./ListItems";
import colors from "../config/colors";
import Icon from "../Components/Icon";
import { AntDesign } from "@expo/vector-icons";
import Separator from "../Components/Separator";

const data = [
  {
    title: "My Listing ",

    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.secondary,
    },
  },
];

export default function AppScreen() {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItems
          title="Hasnain Munir"
          subTitle="Hasnainmuneer@gmail.com"
          image={require("../assets/mosh.jpg")}
        ></ListItems>
      </View>
      <View style={styles.container}>
        <FlatList
          data={data}
          keyExtractor={(dataItem) => dataItem.title}
          ItemSeparatorComponent={<Separator></Separator>}
          renderItem={({ item }) => (
            <ListItems
              title={item.title}
              ImageComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                ></Icon>
              }
            ></ListItems>
          )}
        ></FlatList>
      </View>
      <ListItems
        title="Log out"
        ImageComponent={<Icon name="logout"></Icon>}
      ></ListItems>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#f0f7f8",
    height: "100%",
  },
  container: {
    paddingVertical: 10,
  },
});
