import { useEffect, useMemo, useState } from "react";
import { Image, Switch, Text, TextInput, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useDispatch, useSelector } from "react-redux";
import { CustomButton } from "../../components/CustomButton/CustomButton";
import styles from "./Profile.styles";
import { setTheme } from "../../features/ThemeSlice/themeSlice";
import { darkTheme, lightTheme } from "../../globals/constants";
import { useGlobalTheme } from "../../hooks/useGlobalTheme";
import storage from "@react-native-firebase/storage";
import firestore from "@react-native-firebase/firestore";
import { firebase } from "@react-native-firebase/auth";
import { setUser } from "../../features/UserSlice/UserSlice";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";

export const Profile = ({navigation}) => {
  const theme = useGlobalTheme();
  const dispatch = useDispatch();
  const activeUser = useSelector((state) => state.user.user);
  const [editedUser, setEditedUser] = useState();
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [downloadURL, setDownloadURL] = useState();
  const [uploadTask, setUploadTask] = useState();
  const [uploadTaskSnapshot, setUploadTaskSnapshot] = useState({});
 
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const onMediaSelect = async (media) => {
    if (!media.didCancel) {
      const ref = storage().ref(media.assets[0].fileName);
      const task = ref.putFile(media.assets[0].uri);
      setUploadTask(task);
      task.on("state_changed", (taskSnapShot) => {
        setUploadTaskSnapshot(taskSnapShot);
      });

      task.then(async () => {
        const downloadURL = await ref.getDownloadURL();
        setDownloadURL(downloadURL);
        setUploadTaskSnapshot({});
      });
    }
  };

  const setUserAsyncStorage = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("registeredUser", jsonValue);
    } catch (e) {
      // save error
    }
  };

  const clearAsyncStorage = async () => {
    try {
      await AsyncStorage.removeItem("registeredUser");
    } catch (e) {
      // remove error
    }
  };

  const handleTakePhoto = () => {
    launchCamera({ mediaType: "image" }, onMediaSelect);
  };

  const handleSelectPhoto = () => {
    launchImageLibrary({ mediaType: "image" }, onMediaSelect);
  };

  const handleConfirm = async () => {
    await firebase.auth().currentUser.updateEmail(editedUser.loginEmail);
    await firebase.auth().currentUser.updatePassword(editedUser.loginPassword);
    await firestore()
      .collection("users")
      .doc(firebase.auth().currentUser.uid)
      .update({
        email: firebase.auth().currentUser.email,
        photoURL: firebase.auth().currentUser.photoURL,
      });
    setUserAsyncStorage(editedUser);
    dispatch(setUser(editedUser));
    navigation.navigate("Login");
  };

  const handleLogout = () => {
    clearAsyncStorage();
    navigation.navigate("Login");
  };

  useEffect(() => {
    if (isEnabled) {
      dispatch(setTheme(darkTheme));
    } else {
      dispatch(setTheme(lightTheme));
    }
  }, [isEnabled]);

  useEffect(() => {
    firebase.auth().currentUser.updateProfile({
      photoURL: downloadURL,
    });
  }, [downloadURL]);

  useEffect(() => {
    setEditedUser(JSON.parse(activeUser))
  },[ ])
  
  return (
    <View style={styles.container(theme)}>
      <View style={styles.darkModeContainer}>
        <MaterialCommunityIcons
          name="theme-light-dark"
          size={30}
          color={theme.black}
        />
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <View style={styles.settingsContainer}>
        <Image
          source={{ uri: firebase.auth().currentUser.photoURL }}
          style={styles.profilePhoto}
        />
        <View style={styles.editPpButtonsContainer}>
          <CustomButton
            title={"Select from library"}
            buttonContainerStyle={styles.editPpButtons(theme)}
            buttonTextStyle={styles.buttonText(theme)}
            onPress={handleSelectPhoto}
          />
          <CustomButton
            title={"Take a photo"}
            buttonContainerStyle={styles.editPpButtons(theme)}
            buttonTextStyle={styles.buttonText(theme)}
            onPress={handleTakePhoto}
          />
        </View>
        <TextInput
          style={styles.textInput}
          placeholder="Change your email"
          placeholderTextColor={"grey"}
          value={editedUser?.loginEmail}
          onChangeText={(text) =>
            setEditedUser({ ...editedUser, loginEmail: text })
          }
        />
        <TextInput
          style={styles.textInput}
          placeholder="Change your password"
          placeholderTextColor={"grey"}
          secureTextEntry={true}
          value={editedUser?.loginPassword}
          onChangeText={(text) =>
            setEditedUser({ ...editedUser, loginPassword: text })
          }
        />
        <CustomButton
          title={"Confirm & Edit"}
          buttonContainerStyle={styles.confirmButtonContainer(theme)}
          buttonTextStyle={styles.buttonText(theme)}
          onPress={handleConfirm}
        />
        <CustomButton
          title={"Logout"}
          buttonContainerStyle={styles.logoutButtonContainer}
          buttonTextStyle={styles.buttonText(theme)}
          onPress={handleLogout}
        />
      </View>
    </View>
  );
};
