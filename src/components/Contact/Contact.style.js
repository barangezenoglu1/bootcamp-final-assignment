import { StyleSheet } from "react-native";
import { windowWidth } from "../../globals/constants";

export default StyleSheet.create({
  container: function (mode) {
    return {
      width: windowWidth,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      padding: 20,
      height: 80,
      borderBottomWidth: 1,
      borderBottomColor: "#BFBFBF",
      backgroundColor: mode.white,
    };
  },
  profilePhoto: {
    width: 70,
    height: 70,
    marginRight: 20,
    borderRadius: 50,
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
  },
  contactName: function (mode) {
    return {
      paddingBottom: 10,
      fontSize: 20,
      fontWeight: "bold",
      color: mode.black,
    };
  },
  lastSeen: function (mode) {
    return {
      fontSize: 15,
      fontWeight: "300",
      color: mode.grey,
    };
  },
});
