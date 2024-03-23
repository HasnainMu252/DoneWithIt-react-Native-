import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import Card from "../Components/Card";
import Screen from "../Components/Screen";
import colors from "../config/colors";

const data = [
  {
    id: 1,
    title:
      "Red JAcRed JAcket 34 size for sell Red JAcket 34 size for sell Red JAcket 34 size for sell Red JAcket 34 size for sell Red JAcket 34 size for sell ket 34 size for sell Red JAcket 34 size for sell Red JAcket 34 size for sell Red JAcket 34 size for sell Red JAcket 34 size for sell Red JAcket 34 size for sell Red JAcket 34 size for sell Red JAcket 34 size for sell ",
    price: 100,
    Image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Fresh blue For Sell",
    price: 100,
    Image: require("../assets/2 (1).jpg"),
  },
  {
    id: 3,
    title: "Fresh red For Sell",
    price: 100,
    Image: require("../assets/2 (1).jpg"),
  },
  {
    id: 4,
    title: "Fresh yellow For Sell",
    price: 100,
    Image: require("../assets/2 (1).jpg"),
  },
];
export default function ListingScreen() {
  return (
    <Screen style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            image={item.Image}
            subTitle={"$" + item.price}
          ></Card>
        )}
      ></FlatList>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 20,
    backgroundColor: colors.medium,
  },
});
