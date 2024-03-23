import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Button,
  Alert,
  Platform,
} from "react-native";

export default function App() {
  const handlepress = () => {
    console.log("It click me");
  };

  return (
    <SafeAreaView style={styles.container}>
      
      <Button
        onPress={() => {
          Alert.alert("Customize Title", "This Customize Alert", [
            {
              text: "YES",
              onPress: () => {
                console.log("YES");
              },
            },
            {
              text: "No",
              onPress: () => {
                console.log("No");
              },
            },
          ]);
        }}
        color="blue"
        title="Buy Now"
      ></Button>
      <Button
        onPress={() => {
          Alert.prompt("My Title", "Hello iam here", (Text) =>
            console.log(Text)
          );
          //   Its work only on ios device
        }}
        color="red"
        title="Input me"
      ></Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? 70 : 0,
    //    StatusBar.currentHeight is used to check dynamically the height of every phone status bar
  },
});
