import { StyleSheet, Text, View, Image, Button } from "react-native";
import React from "react";
import Screen from "../../Components/Screen";
import AppText from "../../Components/AppText";
import AppButton from "../../Components/AppButton";
import App from "../../App";
import AppTextInput from "../../Components/TextPicker";
import { AppForm, AppTextField } from "../../Components/Form";

export default function Splash() {
  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require(".././../assets/registerIcon.png")}
          ></Image>
        </View>
        <AppText style={styles.firstText}>Register</AppText>
        <AppText style={styles.secondText}>Create a new account</AppText>
        <View style={styles.topHeading}></View>
        <View style={styles.Form}>
          <AppForm style={styles.mainForm}>
            <AppTextField
              name="username"
              placeholder="Enter Username"
              icon="account"
              style={styles.fieldInput}
            />
            <AppTextField
              name="email"
              placeholder="Enter Email"
              icon="email"
              style={styles.fieldInput}
            />
            <AppTextField
              name="mobilenumber"
              placeholder="Enter Mobile Number"
              icon="phone"
              style={styles.fieldInput}
            />
            <AppTextField
              name="password"
              placeholder="Enter Password"
              secureTextEntry={true}
              icon="lock"
              style={styles.fieldInput}
            />
          </AppForm>
          <AppButton style={styles.button} title="Register"></AppButton>
          <View style={styles.lastEnd}>
            <AppText style={styles.first}>Already have account ?</AppText>
            <AppText style={styles.second}>login</AppText>
          </View>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#bde4f4",
    height: "100%",
    width: "100%",
  },
  image: {
    // borderBottomRightRadius: 80,
    // justifyContent: "center",
    width: 200,
    height: 150,
  },
  imageContainer: {
    paddingVertical: 5,
    justifyContent: "center",
    flexDirection: "row",
  },

  Form: {
    justifyContent: "center",
    width: "85%",
    marginLeft: 20,
    marginTop: 5,
  },
  fieldInput: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
  },
  topHeading: {},
  firstText: {
    justifyContent: "center",
    textAlign: "center",
    fontSize: 24,
    fontWeight: 700,
  },
  secondText: {
    // justifyContent: "center",
    textAlign: "center",
    fontSize: 16,
  },
  button: {
    marginTop: 15,
    // backgroundColor: "slateblue",
    borderRadius: 20,
    backgroundColor: "#44a6ff",

    justifyContent: "center",
    alignContent: "center",
    padding: 10,
    width: "100%",
  },
  lastEnd: {
    flexDirection: "row",
    marginVertical: 10,
  },
  first: {
    fontSize: 16,
    flex: 1,
  },
  second: {
    fontSize: 16,
    fontWeight: 600,
    color: "blue",
  },
});
