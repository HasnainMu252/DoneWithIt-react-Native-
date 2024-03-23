import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  Button,
  TouchableNativeFeedback,
} from "react-native";

export default function App() {
  const handlepress = () => {
    console.log("It click me");
  };

  return (
    <View style={styles.container}>
      <Text>we are making our first mobile app using react native</Text>
      <Image source={require("./assets/favicon.png")}></Image>
      <TouchableWithoutFeedback onPress={() => console.log("image is touched")}>
        <Image
          fadeDuration={2000}
          source={{
            width: 300,
            height: 200,
            uri: "https://fastly.picsum.photos/id/881/200/200.jpg?hmac=34beeNIxYSbYK-_PTy_YXvWyn11npGQSygCM7hjOUFo",
          }}
        ></Image>
      </TouchableWithoutFeedback>
      <TouchableNativeFeedback>
        {/* its only work on android devices */}
        <View
          fadeDuration={2000}
          style={{
            width: 200,
            height: 60,
            backgroundColor: "lightblue",
            margin: 10,
          }}
        ></View>
      </TouchableNativeFeedback>

      <TouchableOpacity>
        <Image
          fadeDuration={2000}
          source={{
            width: 300,
            height: 200,
            resizeMode: "contain",

            uri: "https://fastly.picsum.photos/id/881/200/200.jpg?hmac=34beeNIxYSbYK-_PTy_YXvWyn11npGQSygCM7hjOUFo",
          }}
        ></Image>
      </TouchableOpacity>
      <Text onPress={handlepress}>CLICK ME </Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",

    justifyContent: "center",
  },
});
