import { Image, Pressable, Text, View } from "react-native";
import styles from "./Contact.style";
import { useGlobalTheme } from "../../hooks/useGlobalTheme";

export const Contact = ({ contactName, lastSeen, photoURL, navigation }) => {
  const theme = useGlobalTheme();

  return (
    <Pressable
      style={styles.container(theme)}
      onPress={() =>
        navigation.navigate("ChatDetail", {
          contactName,
          lastSeen,
          photoURL,
        })
      }
    >
      <Image style={styles.profilePhoto} source={{ uri: photoURL }} />
      <View style={styles.textContainer}>
        <Text style={styles.contactName(theme)}>{contactName}</Text>
        <Text style={styles.lastSeen(theme)}>{lastSeen}</Text>
      </View>
    </Pressable>
  );
};
