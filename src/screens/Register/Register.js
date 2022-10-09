import { Image, Pressable, Text, TextInput, View } from "react-native";
import styles from "./Register.style";
import MsnLogo from "../../assets/msn-logo.png";
import { CustomButton } from "../../components/CustomButton/CustomButton";
import { useDispatch, useSelector } from "react-redux";
import { useMemo, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import firestore from "@react-native-firebase/firestore";
import auth from "@react-native-firebase/auth";
import { setUser } from "../../features/UserSlice/UserSlice";

export const Register = ({ navigation }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [registerInfo, setRegisterInfo] = useState({
    userMail: null,
    userPassword: null,
    userName: null,
  });
  const [confirmedPassword, setConfirmedPassword] = useState("");

  const isDisable = useMemo(
    () => (registerInfo.userPassword === confirmedPassword ? false : true),
    [registerInfo.userPassword, confirmedPassword]
  );

  const setUserAsyncStorage = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("registeredUser", jsonValue);
    } catch (error) {
      <Text>{error}</Text>;
    }
  };

  const handleSignUp = async () => {
    auth()
      .createUserWithEmailAndPassword(
        registerInfo.userMail,
        registerInfo.userPassword
      )
      .then((cred) =>
        firestore().collection("users").doc(cred.user.uid).set({
          email: registerInfo.userMail,
          photoURL: cred.user.photoURL,
          name: registerInfo.userName,
        })
      )
      .then(setUserAsyncStorage(registerInfo))
      .then(dispatch(setUser(registerInfo)))
      .then(() => navigation.navigate("Home"))
      .catch((err) => console.log(err));
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Register Account</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder={"Email"}
            value={registerInfo.userMail}
            onChangeText={(text) =>
              setRegisterInfo({ ...registerInfo, userMail: text })
            }
          />
          <TextInput
            style={styles.input}
            placeholder={"User Name"}
            value={registerInfo.userName}
            onChangeText={(text) =>
              setRegisterInfo({ ...registerInfo, userName: text })
            }
          />
          <TextInput
            style={styles.input}
            placeholder={"Password"}
            secureTextEntry={true}
            value={registerInfo.userPassword}
            onChangeText={(text) =>
              setRegisterInfo({ ...registerInfo, userPassword: text })
            }
          />
          <TextInput
            style={styles.input}
            placeholder={"Confirm password"}
            secureTextEntry={true}
            value={confirmedPassword}
            onChangeText={(text) => setConfirmedPassword(text)}
          />
        </View>
        <CustomButton
          title={"Sign Up"}
          onPress={handleSignUp}
          buttonContainerStyle={styles.registerButtonContainer(isDisable)}
          buttonTextStyle={styles.buttonText}
          isDisabled={isDisable}
        />
      </View>
      <Image source={MsnLogo} style={styles.logo} />
    </View>
  );
};
