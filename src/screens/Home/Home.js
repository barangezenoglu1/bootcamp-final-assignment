import { Pressable, Text, View } from "react-native";
import styles from "./Home.styles";
import Ionicons from "react-native-vector-icons/Ionicons";
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
    <View style={styles.container}>
      <Header title={"Chats"} theme={theme} navigation={navigation}>
        <Pressable onPress={handleChangeTheme}>
          <Ionicons style={styles.darkModeIcon} name="cloudy-night-outline" />
        </Pressable>
      </Header>
    </View>
  );
};
