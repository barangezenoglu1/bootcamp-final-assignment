import { Image, Pressable, Text, View } from "react-native";
import styles from "./Contact.style";
import { useSelector } from "react-redux";
import logo from "../../assets/msn-logo.png";
export const Contact = ({
  contactName,
  lastSeen,
  profilePhoto,
  navigation,
}) => {
  const theme = useSelector((state) => state.theme.theme);
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
