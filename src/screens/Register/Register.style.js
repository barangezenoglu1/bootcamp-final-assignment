import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    contentContainer: {
      alignItems: "center",
      height: 300,
      width: 300,
      marginBottom: 50,
    },
    title: {
      fontWeight: "bold",
      fontSize: 20,
      color: "#009FFF",
    },
    inputContainer: {
      alignItems: "center",
    },
    input: {
      borderWidth: 1,
      height: 50,
      width: 290,
      marginTop: 20,
      padding: 10,
    },
    loginButtonContainer: {
      height: 50,
      width: 200,
  
      backgroundColor: "#009FFF",
      alignItems: "center",
      justifyContent: "center",
      top: 20,
    },
    buttonText: {
      fontSize: 20,
      fontWeight: "bold",
      color: "white",
    },
    registerTextContainer: {
      marginTop: 30,
    },
    memberText: {
      color: "#767676",
      fontStyle: "italic",
    },
    createText: {
      color: "#009FFF",
      fontWeight: "bold",
      fontStyle: "italic",
      textDecorationLine: "underline",
    },
    logo: {
      width: 120,
      height: 120,
    },
  });
  