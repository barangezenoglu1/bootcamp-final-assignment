import { Image, Pressable, Text, TextInput, View } from "react-native";
import styles from "./Header.styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useSelector } from "react-redux";

export const Header = ({
  children,
  leftIcon,
  title,
  theme,
  navigation,
  profile,
  profilePhoto,
  lastSeen,
  contactName,
  searchActive,
  onChangeText,
  value,
}) => {
  const displayHeaderContent = () => {
    if (searchActive) {
      return (
        <TextInput
          style={styles.search(theme)}
          placeholder={"Search..."}
          onChangeText={onChangeText}
          defaultValue={value}
        />
      );
    } else {
      if (profile) {
        return (
          <View style={styles.profileWrapper}>
            <Image source={{ uri: profilePhoto }} style={styles.profilePhoto} />
            <View>
              <Text style={styles.contactName}>{contactName}</Text>
              <Text style={styles.lastSeen(theme)}>{lastSeen}</Text>
            </View>
          </View>
        );
      } else {
        return <Text style={styles.title}>{title}</Text>;
      }
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
