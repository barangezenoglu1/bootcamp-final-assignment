import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Header } from "../../components/Header/Header";
import BackgroundLogo from "../../assets/chat-background.png";
import Ionicons from "react-native-vector-icons/Ionicons";
import { windowHeight, windowWidth } from "../../globals/constants";
import { ChatInput } from "../../components/ChatInput/ChatInput";
import { useGlobalTheme } from "../../hooks/useGlobalTheme";

export const ChatDetail = ({ route, navigation }) => {
  const theme = useGlobalTheme();
  const { contactName, profilePhoto, lastSeen } = route.params;
  console.log("aaa", contactName, profilePhoto, lastSeen);
  return (
    <View style={styles.container}>
      <Header
        profile
        contactName={contactName}
        profilePhoto={profilePhoto}
        lastSeen={lastSeen}
        theme={theme}
        leftIcon={
          <Pressable onPress={() => navigation.goBack()}>
            <Ionicons style={styles.backIcon} name="arrow-back" />
          </Pressable>
        }
      ></Header>
      <ImageBackground
        source={BackgroundLogo}
        resizeMode="cover"
        style={styles.imageBackground}
      ></ImageBackground>
     <ChatInput />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight,
  },
  backIcon: {
    fontSize: 30,
    marginRight: 10,
    color: "white",
  },
  imageBackground: {
   flex: 1
  },
});
