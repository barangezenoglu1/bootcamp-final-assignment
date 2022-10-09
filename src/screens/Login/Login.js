import { Image, Pressable, Text, TextInput, View } from "react-native";
import styles from "./Login.style";
import MsnLogo from "../../assets/msn-logo.png";
import { CustomButton } from "../../components/CustomButton/CustomButton";
import { useEffect, useState } from "react";
import auth from "@react-native-firebase/auth";
import { useGetAsyncStorageValue } from "../../hooks/getAsyncStorageValue";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
export const Login = ({ navigation }) => {
  const loggedUser = useGetAsyncStorageValue("registeredUser");

  const [loginInfo, setLoginInfo] = useState({
    loginEmail: "",
    loginPassword: "",
  });

  const setUserAsyncStorage = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("registeredUser", jsonValue);
    } catch (error) {
      <Text>{error}</Text>;
    }
  };

  const handleLogin = () => {
    auth()
      .signInWithEmailAndPassword(loginInfo.loginEmail, loginInfo.loginPassword)
      .then(setUserAsyncStorage(loginInfo))
      .then(() => navigation.navigate("Home"))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (loggedUser?.length > 0) {
      return navigation.navigate("Home");
    }
  }, [loggedUser]);

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Login Account</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder={"Email"}
            value={loginInfo.loginEmail}
            onChangeText={(text) =>
              setLoginInfo({ ...loginInfo, loginEmail: text })
            }
          />
          <TextInput
            style={styles.input}
            placeholder={"Password"}
            secureTextEntry={true}
            value={loginInfo.loginPassword}
            onChangeText={(text) =>
              setLoginInfo({ ...loginInfo, loginPassword: text })
            }
          />
        </View>
        <CustomButton
          title={"Sign In"}
          onPress={handleLogin}
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
