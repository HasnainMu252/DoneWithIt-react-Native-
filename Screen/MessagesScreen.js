import { FlatList, StyleSheet } from "react-native";
import React, { useState } from "react";
import ListItems from "./ListItems";
import Screen from "../Components/Screen";
import Separator from "../Components/Separator";
import ListItemDelete from "../Components/ListItemDelete";
const initialMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D3",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 3,
    title: "T3",
    description: "D3",
    image: require("../assets/mosh.jpg"),
  },
];

export default function MessagesScreen(props) {
  //handle delete message
  //update in backend server
  const [count, setCount] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);
  console.log(count);

  const handleDeleteItem = (message) => {
    const newMessages = count.filter((m) => m.id !== message.id);
    setCount(newMessages);
  };
  return (
    <Screen>
      <FlatList
        data={count}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItems
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => handleDeleteItem(item)}
          ></ListItems>
        )}
        ItemSeparatorComponent={Separator}
        refreshing={refreshing}
        onRefresh={()=>setCount([
          {
            id: 3,
            title: "T3",
            description: "D3",
            image: require("../assets/mosh.jpg"),
          },
        ])}
      ></FlatList>
    </Screen>
  );
}

const styles = StyleSheet.create({});
