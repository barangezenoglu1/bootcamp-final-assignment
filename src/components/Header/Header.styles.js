import { StyleSheet } from "react-native";
import { windowHeight, windowWidth } from "../../globals/constants";

export default StyleSheet.create({
  container: function (mode) {
    return {
      position: "relative",
      height: windowHeight,
      backgroundColor: mode.white  
    };
  },
  headerContainer: function (mode) {
    return {
        width: windowWidth,
        backgroundColor: mode.main,
        height: 70,
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    }
  },
  leftContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 5,
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 5,
    marginBottom: 5,
  },
});
