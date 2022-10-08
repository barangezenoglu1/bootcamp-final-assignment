import { Image, Pressable, Text, View } from "react-native";
import styles from "./Contact.style";
import logo from "../../assets/msn-logo.png";
import { useGlobalTheme } from "../../hooks/useGlobalTheme";
export const Contact = ({
  contactName,
  lastSeen,
  profilePhoto,
  navigation,
}) => {
  const theme = useGlobalTheme();
  return (
    <Pressable
      style={styles.container(theme)}
      onPress={() =>
        navigation.navigate("ChatDetail", {
          contactName,
          lastSeen,
          profilePhoto,
        })
      }
    >
      <Image style={styles.profilePhoto} source={logo} />
      <View style={styles.textContainer}>
        <Text style={styles.contactName(theme)}>{contactName}</Text>
        <Text style={styles.lastSeen(theme)}>{lastSeen}</Text>
      </View>
    </Pressable>
  );
};
