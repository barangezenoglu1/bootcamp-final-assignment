import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: function (mode) {
      return {
        flex: 1,
        backgroundColor: mode.white,
      };
    },
    darkModeContainer: {
      paddingTop: 20,
      paddingLeft: 20,
      flexDirection: "row",
    },
    settingsContainer: {
      alignItems: "center",
    },
    profilePhoto: {
      height: 120,
      width: 120,
      borderRadius: 60,
      marginBottom: 30,
    },
    textInput: {
      backgroundColor: "white",
      height: 40,
      width: "50%",
      borderWidth: 1,
      alignItems: "center",
      paddingLeft: 10,
      marginBottom: 15,
    },
    logoutButtonContainer: {
      marginTop: 20,
      height: 50,
      width: 150,
      backgroundColor: "rgba(251, 0, 0  , 0.8)",
      alignItems: "center",
      justifyContent: "center",
     
    },
    buttonText: function (mode) {
      return {
        fontSize: 20,
        fontWeight: "bold",
        color: mode.white,
      };
    },
    confirmButtonContainer: function (mode) {
      return {
        marginTop: 20,
        height: 50,
        width: 150,
        backgroundColor: mode.main,
        alignItems: "center",
        justifyContent: "center",
       
      };
    },
    editPpButtonsContainer: {
      flexDirection: "row",
      bottom: 20,
    },
    editPpButtons: function (mode) {
      return {
        height: 55,
        width: 150,
        marginRight: 10,
        backgroundColor: mode.main,
        alignItems: "center",
        justifyContent: "center",
      };
    },
  });