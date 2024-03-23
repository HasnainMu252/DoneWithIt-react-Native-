import { StyleSheet, View, Image } from "react-native";
import Screen from "../Components/Screen";
import React from "react";

import * as Yup from "yup";
import { AppForm, AppTextField, SubmitButton } from "../Components/Form";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).matches().label("password"),
});

export default function LoginScreen() {
  return (
    <Screen style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/logo-red.png")}
      ></Image>
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppTextField
          placeholder="Email"
          autoCapitalize="none"
          autoCorrect={false}
          name={"email"}
          icon="email"
          keyboardType="email-address"
          textContentType="emailAddress"
        />
        <AppTextField
          placeholder="Password"
          autoCapitalize="none"
          name={"password"}
          autoCorrect={false}
          secureTextEntry={true}
          icon="lock"
          textContentType="password"
        />
        <SubmitButton title={"Login"}></SubmitButton>
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
