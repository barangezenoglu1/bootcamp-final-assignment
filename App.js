import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { Stack } from "./src/globals/constants";
import { Contacts } from "./src/screens/Contacts/Contacts";
import { Home } from "./src/screens/Home/Home";
import { Login } from "./src/screens/Login/Login";
import { Profile } from "./src/screens/Profile/Profile";
import { Register } from "./src/screens/Register/Register";
import { store } from "./src/store";

export default function App() {
  return (
    <View style={styles.container}>
      <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Contacts" component={Contacts} />
        </Stack.Navigator>
      </NavigationContainer>
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
