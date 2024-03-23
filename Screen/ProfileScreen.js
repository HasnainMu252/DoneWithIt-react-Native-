import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Screen from "../Components/Screen";
import ProfileSlide from "../Components/ProfileSlide";
import IconSimple from "../Components/IconSimple";
import ProfileImage from "../Components/ProfileImage";
import AppButton from "../Components/AppButton";
import AppText from "../Components/AppText";
import AppHeading from "../Components/AppHeading";

export default function ProfileScreen() {
  return (
    <Screen style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={styles.top}>
          <View style={styles.topInner}>
            <IconSimple name="chevron-left" size={55}></IconSimple>
          </View>
          <IconSimple name="dots-vertical" size={55}></IconSimple>
        </View>
        <ProfileImage firstName='Muhammad' lastName="Hasnain Munir" joinDate='1 year ago'></ProfileImage>

        <View style={styles.bottom}>
          <View style={styles.firstBottom}>
            <AppText style={styles.Text}>Profile</AppText>
            <ProfileSlide
              name="email"
              iconName="email"
              iconColor="red"
              bgColor="#fbf0e6"
            />
          </View>

          <AppText style={styles.Text}>Setting</AppText>
          <ProfileSlide
            name="Dark Mode"
            iconName="theme-light-dark"
            iconColor="#84b7ea"
            bgColor="#ebf6fe"
          />
          <ProfileSlide
            name="Notification"
            iconName="bell-ring-outline"
            iconColor="#5e44f4"
            bgColor="#ebe9fd"
          />
        </View>
        <View style={styles.end}>
          <AppButton title="Sign Out" style={styles.button}></AppButton>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal:20
  },
  top: {
    flexDirection: "row",
    // marginTop: 1,
    
  },

  Text: {
    fontSize: 20,
    fontWeight: 700,
    marginLeft: 20,
    marginBottom: 5,
    textTransform: "capitalize",
  },
  topInner: {
    flex: 1,
  },
  left: {
    flex: 1,
  },
  bottom: {},
  end: {},
  firstBottom: {
    marginVertical: 30,
  },
  button:{
    marginTop:20,
    margin:10,
    width:'auto',
    justifyContent:"center"
    
    
  }
});
