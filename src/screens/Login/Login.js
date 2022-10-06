import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import MsnLogo from "../../assets/msn-logo.png";
import { CustomButton } from "../../components/CustomButton/CustomButton";
export const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Login Account</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder={"Email"} />
          <TextInput style={styles.input} placeholder={"Password"} />
        </View>
        <CustomButton
          title={"Login"}
          buttonContainerStyle={styles.loginButtonContainer}
          buttonTextStyle={styles.buttonText}
        />
        <View style={styles.registerTextContainer}>
          <Text style={styles.memberText}>Not a member?</Text>
          <Pressable>
            <Text style={styles.createText}>Create account</Text>
          </Pressable>
        </View>
      </View>
      <Image source={MsnLogo} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
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
  content: {},
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
