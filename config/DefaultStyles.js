import { Platform } from "react-native";
import colors from "./colors";
export default {
  Text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: colors.dark,
  },
};
