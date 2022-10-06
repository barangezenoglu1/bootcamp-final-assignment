import { Pressable, Text, View } from "react-native";
import styles from "./Home.styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useDispatch, useSelector } from "react-redux";
import { darkTheme, lightTheme } from "../../globals/constants";
import { setTheme } from "../../features/ThemeSlice/themeSlice";

export const Home = () => {
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
      <View style={styles.headerContainer(theme)}>
        <View style={styles.leftContainer}>
          <Pressable onPress={() => navigation.navigate("Settings")}>
            <Ionicons style={styles.tabIcon} name="settings-outline" />
          </Pressable>
          <Text style={styles.title}>Chats</Text>
        </View>
        <Pressable onPress={handleChangeTheme}>
          <Ionicons style={styles.searchIcon} name="cloudy-night-outline" />
        </Pressable>
      </View>
    </View>
  );
};
