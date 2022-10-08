import { Image, Pressable, Text, TextInput, View } from "react-native";
import styles from "./Login.style";
import MsnLogo from "../../assets/msn-logo.png";
import { CustomButton } from "../../components/CustomButton/CustomButton";
export const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Login Account</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder={"Email"} />
          <TextInput style={styles.input} placeholder={"Password"} />
        </View>
        <CustomButton
          title={"Sign In"}
          onPress={() => navigation.navigate("Home")}
          buttonContainerStyle={styles.loginButtonContainer}
          buttonTextStyle={styles.buttonText}
        />
        <View style={styles.registerTextContainer}>
          <Pressable onPress={() => navigation.navigate("Register")}>
            <Text style={styles.memberText}>Not a member?</Text>
            <Text style={styles.createText}>Create account</Text>
          </Pressable>
        </View>
      </View>
      <Image source={MsnLogo} style={styles.logo} />
    </View>
  );
};
