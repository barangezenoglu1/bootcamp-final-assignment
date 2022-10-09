import { StyleSheet } from "react-native";
import { windowHeight } from "../../globals/constants";

export default StyleSheet.create({
  container: function (mode) {
    return {
      position: "relative",
      height: "100%",
      backgroundColor: mode.white,
      flex: 1,
    };
  },
  darkModeIcon: {
    fontSize: 30,
    color: "white",
    marginRight: 15,
  },
  searchIcon: {
    fontSize: 28,
    marginTop: 6,
    color: "white",
    marginRight: 15,
  },
  backIcon: {
    fontSize: 30,
    marginRight: 30,
    color: "white",
  },
});
