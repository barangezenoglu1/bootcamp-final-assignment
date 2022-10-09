import { Pressable, View } from "react-native";
import styles from "./Contacts.styles";
import { ContactList } from "../../components/ContactList/ContactList";
import { Header } from "../../components/Header/Header";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useDispatch, useSelector } from "react-redux";
import { darkTheme, lightTheme } from "../../globals/constants";
import { setTheme } from "../../features/ThemeSlice/themeSlice";
import { useGlobalTheme } from "../../hooks/useGlobalTheme";
import { useMemo, useState } from "react";

export const Contacts = ({ navigation }) => {
  const allUsers = useSelector((state) => state.allUsers.allUsers);
  const activeUser = useSelector((state) => state.user.user);
  const theme = useGlobalTheme();
  const dispatch = useDispatch();
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchFilter, setSearchFilter] = useState("");

  const filteredContactList = useMemo(
    () =>
      allUsers.filter(
        (contact) =>
          JSON.parse(activeUser).loginEmail !== contact.email &&
          contact.name
            .toLocaleUpperCase()
            .includes(searchFilter.toLocaleUpperCase())
      ),
    [searchFilter, allUsers]
  );

  const openSearch = () => {
    setIsSearchActive(!isSearchActive);
  };

  const handleChangeTheme = () => {
    if (theme === lightTheme) {
      dispatch(setTheme(darkTheme));
    } else {
      dispatch(setTheme(lightTheme));
    }
  };

  return (
    <View style={styles.container(theme)}>
      <Header
        title={"Contacts"}
        searchActive={isSearchActive}
        theme={theme}
        value={searchFilter}
        onChangeText={(text) => setSearchFilter(text)}
        leftIcon={
          <Pressable onPress={() => navigation.goBack()}>
            <Ionicons style={styles.backIcon} name="arrow-back" />
          </Pressable>
        }
      >
        <Pressable onPress={openSearch}>
          <Ionicons style={styles.searchIcon} name="search-outline" />
        </Pressable>
        <Pressable onPress={handleChangeTheme}>
          <Ionicons style={styles.darkModeIcon} name="cloudy-night-outline" />
        </Pressable>
      </Header>
      <View>
        <ContactList
          contactList={filteredContactList}
          navigation={navigation}
        />
      </View>
    </View>
  );
};
