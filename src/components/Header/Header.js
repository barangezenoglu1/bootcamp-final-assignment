import { Pressable, Text, View } from "react-native";
import styles from "./Header.style";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useDispatch, useSelector } from "react-redux";
import { darkTheme, lightTheme } from "../../globals/constants";
import { setTheme } from "../../features/ThemeSlice/themeSlice";

export const Header = ({children, title, theme}) => {
  
  return (
    <View style={styles.container(theme)}>
      <View style={styles.headerContainer(theme)}>
        <View style={styles.leftContainer}>
          <Pressable onPress={() => navigation.navigate("Settings")}>
            <Ionicons style={styles.tabIcon} name="settings-outline" />
          </Pressable>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.rightContainer}>
        {children}
        </View>
      </View>
    </View>
  );
};
