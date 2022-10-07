import { Image, Pressable, Text, View } from "react-native";
import styles from "./Header.styles";
import Ionicons from "react-native-vector-icons/Ionicons";

export const Header = ({
  children,
  leftIcon,
  title,
  theme,
  navigation,
  profile,
  profilePhoto,
  lastSeen,
  contactName
}) => {
  const displayHeaderContent = () => {
    if (profile) {
      return (
        <View style={styles.profileWrapper}>
          <Image source={{ uri: profilePhoto }} style={styles.profilePhoto} />
          <View>
            <Text style={styles.contactName}>{contactName}</Text>
            <Text style={styles.lastSeen}>{lastSeen}</Text>
          </View>
        </View>
      );
    } else {
      return (
        <Text style={styles.title}>{title}</Text>
      )
    }
  };
  return (
    <View style={styles.headerContainer(theme)}>
      <View style={styles.leftContainer}>
        {leftIcon}
       {displayHeaderContent()}
      </View>
      <View style={styles.rightContainer}>{children}</View>
    </View>
  );
};
