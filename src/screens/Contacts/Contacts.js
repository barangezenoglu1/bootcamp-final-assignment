import { Pressable, View } from "react-native";
import styles from "./Contacts.styles";
import { ContactList } from "../../components/ContactList/ContactList";
import { Header } from "../../components/Header/Header";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useDispatch, useSelector } from "react-redux";
import { darkTheme, lightTheme } from "../../globals/constants";
import { setTheme } from "../../features/ThemeSlice/themeSlice";

export const Contacts = ({ navigation }) => {
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
    <View style={styles.container}>
      <Header
        title={"Contacts"}
        theme={theme}
        leftIcon={
          <Pressable onPress={() => navigation.goBack()}>
            <Ionicons style={styles.backIcon} name="arrow-back" />
          </Pressable>
        }
      >
        <Ionicons style={styles.searchIcon} name="search-outline" />
        <Pressable onPress={handleChangeTheme}>
          <Ionicons style={styles.darkModeIcon} name="cloudy-night-outline" />
        </Pressable>
      </Header>
      <View>
        <ContactList navigation={navigation} />
      </View>
    </View>
  );
};