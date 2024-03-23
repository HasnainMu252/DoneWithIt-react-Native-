import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import AppScreen from "./Screen/AppScreen";
import LoginScreen from "./Screen/LoginScreen";
import ListingEditScreen from "./Screen/ListingEditScreen";
import AppTextInput from "./Components/TextPicker";
import ListItem from "./Screen/ListItems";
import ListingDetail from "./Screen/ListingDetail";
import ListingScreen from "./Screen/ListingScreen";
import Separator from "./Components/Separator";
import ProfileScreen from "./Screen/ProfileScreen";
import Splash from "./Screen/FYP/Splash";
import Register from "./Screen/FYP/Register";
import Login from "./Screen/FYP/Login";

export default function App() {
  return (
    <View>
      <Login></Login>
    </View>
  );
}

const styles = StyleSheet.create({});
