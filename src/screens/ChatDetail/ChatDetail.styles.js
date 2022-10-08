import { StyleSheet } from "react-native";
import { windowHeight, windowWidth } from "../../globals/constants";

export default StyleSheet.create({
    container: {
      width: windowWidth,
      height: windowHeight,
    },
    backIcon: {
      fontSize: 30,
      marginRight: 10,
      color: "white",
    },
    imageBackground: {
     flex: 1
    },
  });