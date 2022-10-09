import { StyleSheet } from "react-native";
import { windowHeight, windowWidth } from "../../globals/constants";

export default StyleSheet.create({
  container: function (mode) {
    return {
      position: "relative",
      height: windowHeight,  
      backgroundColor: mode.white,
    };
  },
  plusIcon: {
    fontSize: 30,
    color: "white",
    marginRight: 15,
  },
  settingsIcon: {
    fontSize: 30,
    marginRight: 15,
    color: 'white',
  },
  contactsContainer: function (mode) {
    return {
      position: "absolute",
      backgroundColor: mode.main,
      height: 70,
      width: 70,
      borderRadius: 50,
      alignItems: "center",
      justifyContent: "center",
      bottom: 50,
      right: 15,
    }
  },
  contactsIcon: {
    fontSize: 30,
    color: "white",
  },
});
