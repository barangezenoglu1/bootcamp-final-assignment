import { StyleSheet } from "react-native";
import { windowHeight, windowWidth } from "../../globals/constants";

export default StyleSheet.create({
  headerContainer: function (mode) {
    return {
        width: windowWidth,
        backgroundColor: mode.main,
        height: 80,
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
  profileWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  profilePhoto: {
    marginRight: 10,
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  contactName: {
    padding: 5,
    color: "#FFFF",
    fontSize: 20,
    fontWeight: "500",
  },
  lastSeen: {
    padding: 5,
    color: "#3B3B3B",
    fontSize: 15,
    fontWeight: "300",
  },
  title: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 5,
    marginBottom: 5,
  },
});
