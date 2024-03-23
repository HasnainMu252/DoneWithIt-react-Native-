import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import ItemPicker from "./ItemPicker";
import AppText from "./AppText";

export default function AppTextInput({
  onSelectCategory,
  selectCategory,
  items,
  icon,
  placeholder,
  onPress,
  width, 
  
}) {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setVisible(true)}>
        <View style={[styles.container, { width }]}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={30}
              color={colors.black}
              style={styles.icon}
            />
          )}
          <Text style={styles.text}>
            {selectCategory ? selectCategory.label : placeholder}
          </Text>
          <MaterialCommunityIcons
            name="chevron-down"
            size={24}
            color={colors.black}
            style={styles.icon}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={visible} animationType="slide">
        <Button title="close" onPress={() => setVisible(false)}></Button>
        <FlatList
          data={items}
          keyExtractor={(item) => item.value.toString()}
          renderItem={({ item }) => (
            <ItemPicker
              label={item.label}
              onPress={() => {
                console.log(item);
                setVisible(false);
                onSelectCategory(item);
              }}
            ></ItemPicker>
          )}
        ></FlatList>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.medium,
    flexDirection: "row",
    alignItems: "center",

    borderRadius: 25,
    padding: 15,
    marginVertical: 10,
  },
  placeholder: {
    fontSize: 16,
    color: "black",
    fontWeight: 600,
  },
  text: {
    flex: 1,
    marginLeft: 0,
    textTransform: "uppercase",
    color: "grey",
  },
  icon: {
    marginRight: 10,
  },
});
