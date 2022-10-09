import { StyleSheet } from "react-native";
import { windowWidth } from "../../globals/constants";

export default StyleSheet.create({
  inputAndImage: {
    display: "flex",
    flexDirection: "row",
    top: 0,
  },
  textInputContainer: function (mode) {
    return {
      backgroundColor: mode.darkMain,
      width: windowWidth,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    };
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  smileIcon: function (mode) {
    return {
      fontSize: 20,
      marginLeft: 15,
      color: mode.black,
    };
  },
  textInput: {
    padding: 10,
    marginLeft: 10,
  },
  attachIcon: function (mode) {
    return {
      fontSize: 20,
      marginRight: 15,
      color: mode.black,
    };
  },
  sendIcon: function (mode) {
    return {
      fontSize: 20,
      marginRight: 15,
      color: mode.black,
    };
  },
});
