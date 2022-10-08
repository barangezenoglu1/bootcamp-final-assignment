import { Pressable, Text, View } from "react-native";
import styles from "./Home.styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { Header } from "../../components/Header/Header";
import { useGlobalTheme } from "../../hooks/useGlobalTheme";

export const Home = ({ navigation }) => {
  const theme = useGlobalTheme();
  return (
    <View style={styles.container(theme)}>
      <Header
        title={"Chats"}
        theme={theme}
        navigation={navigation}
        leftIcon={
          <Pressable onPress={() => navigation.navigate("Profile")}>
            <Ionicons style={styles.settingsIcon} name="settings-outline" />
          </Pressable>
        }
      >
        <Pressable onPress={() => navigation.navigate("Contacts")}>
          <AntDesign style={styles.plusIcon} name="plus" />
        </Pressable>
      </Header>
      <Pressable
        style={styles.contactsContainer}
        onPress={() => navigation.navigate("Contacts")}
      >
        <MaterialCommunityIcons name="pencil" style={styles.contactsIcon} />
      </Pressable>
    </View>
  );
};
