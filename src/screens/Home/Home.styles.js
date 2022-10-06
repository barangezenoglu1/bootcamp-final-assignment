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
  title: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 5,
    marginBottom: 5,
  },
  tabIcon: {
    fontSize: 35,
    marginRight: 30,
    color: "white",
  },
  searchIcon: {
    fontSize: 30,
    color: "white",
    marginRight: 15,
  },
  contactsContainer: {
    position: "absolute",
    backgroundColor: "#2AABEE",
    height: 80,
    width: 80,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    bottom: 50,
    right: 15,
  },
  contactsIcon: {
    fontSize: 30,
    color: "white",
  },
});
