import { Pressable, Text, View } from "react-native";
import styles from "./Header.styles";
import Ionicons from "react-native-vector-icons/Ionicons";

export const Header = ({children, title, theme, navigation}) => {
  
  return (
    <View style={styles.container(theme)}>
      <View style={styles.headerContainer(theme)}>
        <View style={styles.leftContainer}>
          <Pressable onPress={() => navigation.navigate("Profile")}>
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
