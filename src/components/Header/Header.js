import { Pressable, Text, View } from "react-native";
import styles from "./Header.styles";
import Ionicons from "react-native-vector-icons/Ionicons";

export const Header = ({children, leftIcon, title, theme, navigation}) => {
  
  return (
      <View style={styles.headerContainer(theme)}>
        <View style={styles.leftContainer}>
         {leftIcon}
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.rightContainer}>
        {children}
        </View>
      </View>
  );
};
