import { useEffect, useState } from "react";
import { Image, Switch, Text, TextInput, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useDispatch } from "react-redux";
import { CustomButton } from "../../components/CustomButton/CustomButton";
import logo from "../../assets/msn-logo.png";
import styles from "./Profile.styles";
import { setTheme } from "../../features/ThemeSlice/themeSlice";
import { darkTheme, lightTheme } from "../../globals/constants";
import { useGlobalTheme } from "../../hooks/useGlobalTheme";
export const Profile = () => {
  const theme = useGlobalTheme();
  const dispatch = useDispatch();

  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  useEffect(() => {
    if (isEnabled) {
      dispatch(setTheme(darkTheme));
    } else {
      dispatch(setTheme(lightTheme));
    }
  }, [isEnabled]);

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
        <Image source={logo} style={styles.profilePhoto} />
        <View style={styles.editPpButtonsContainer}>
          <CustomButton
            title={"Select from library"}
            buttonContainerStyle={styles.editPpButtons(theme)}
            buttonTextStyle={styles.buttonText(theme)}
          />
          <CustomButton
            title={"Take a photo"}
            buttonContainerStyle={styles.editPpButtons(theme)}
            buttonTextStyle={styles.buttonText(theme)}
          />
        </View>
        <TextInput
          style={styles.textInput}
          placeholder="Change your email"
          placeholderTextColor={"grey"}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Change your password"
          placeholderTextColor={"grey"}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Confirm your password"
          placeholderTextColor={"grey"}
        />
        <CustomButton
          title={"Confirm & Edit"}
          buttonContainerStyle={styles.confirmButtonContainer(theme)}
          buttonTextStyle={styles.buttonText(theme)}
        />
        <CustomButton
          title={"Logout"}
          buttonContainerStyle={styles.logoutButtonContainer}
          buttonTextStyle={styles.buttonText(theme)}
        />
      </View>
    </View>
  );
};
