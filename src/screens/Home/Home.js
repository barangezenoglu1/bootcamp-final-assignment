import { Pressable, Text, View } from "react-native";
import styles from "./Home.styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useDispatch, useSelector } from "react-redux";
import { darkTheme, lightTheme } from "../../globals/constants";
import { setTheme } from "../../features/ThemeSlice/themeSlice";
import { Header } from "../../components/Header/Header";

export const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  const handleChangeTheme = () => {
    if (theme === lightTheme) {
      dispatch(setTheme(darkTheme));
    } else {
      dispatch(setTheme(lightTheme));
    }
  };
  return (
    <View style={styles.container(theme)}>
      <Header
        title={"Chats"}
        theme={theme}
        navigation={navigation}
        leftIcon={
          <Pressable onPress={() => navigation.navigate("Profile")}>
            <Ionicons style={styles.tabIcon} name="settings-outline" />
          </Pressable>
        }
      >
        <Pressable onPress={handleChangeTheme}>
          <Ionicons style={styles.darkModeIcon} name="cloudy-night-outline" />
        </Pressable>
      </Header>
      <Pressable
        style={styles.contactsContainer}
        onPress={() => navigation.navigate("Contacts")}
      >
        <MaterialCommunityIcons name="pencil" style={styles.contactsIcon} />
      </Pressable>
    </View>
  );
};
