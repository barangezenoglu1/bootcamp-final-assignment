import { Image, Pressable, Text, TextInput, View } from "react-native";
import styles from "./Register.style";
import MsnLogo from "../../assets/msn-logo.png";
import { CustomButton } from "../../components/CustomButton/CustomButton";

export const Register = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Register Account</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder={"Email"} />
          <TextInput style={styles.input} placeholder={"Password"} />
          <TextInput style={styles.input} placeholder={"Confirm password"} />
        </View>
        <CustomButton
          title={"Sign Up"}
          onPress={() => navigation.navigate("Home")}
          buttonContainerStyle={styles.loginButtonContainer}
          buttonTextStyle={styles.buttonText}
        />
      </View>
      <Image source={MsnLogo} style={styles.logo} />
    </View>
  );
};
