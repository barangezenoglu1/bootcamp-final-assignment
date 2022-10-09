import { Pressable, Text, View } from "react-native";
import styles from "./Home.styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { Header } from "../../components/Header/Header";
import firestore, { firebase } from "@react-native-firebase/firestore";
import { useGlobalTheme } from "../../hooks/useGlobalTheme";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetAsyncStorageValue } from "../../hooks/getAsyncStorageValue";
import { setUser } from "../../features/UserSlice/UserSlice";
import { setAllUsers } from "../../features/AllUsers/allUsersSlice";

export const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const theme = useGlobalTheme();
  const loggedUser = useGetAsyncStorageValue("registeredUser");

  useEffect(() => {
    firebase
      .firestore()
      .collection("users")
      .get()
      .then((querySnapshot) => {
        const fetchedUsers = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        dispatch(setAllUsers(fetchedUsers))
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    dispatch(setUser(loggedUser))
  }, [loggedUser])

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
