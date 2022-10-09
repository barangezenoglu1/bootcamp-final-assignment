import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Dimensions } from "react-native";

// Stack
export const Stack = createNativeStackNavigator();

// Themes
export const lightTheme = {
  white: "#FFFFFF",
  black: "#000000",
  grey: "#6B6A6A",
  main: "#009FFF",
  darkMain: "#FFFFFF",
};

export const darkTheme = {
  white: "#000000",
  black: "#FFFFFF",
  grey: "#EBE7E7",
  main: "#6B6A6A",
  darkMain: "#6B6A6A",
};

// Dimensions
export const windowWidth = Dimensions.get("window").width;
export const windowHeight = Dimensions.get("window").height;
