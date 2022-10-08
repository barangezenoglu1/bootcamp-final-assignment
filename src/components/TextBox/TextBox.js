import React from "react";
import { View, Text } from "react-native";
import styles from "./TextBox.styles";

export const TextBox = ({ message }) => {
  return (
    <View style={styles.textBoxSender}>
      <Text textBreakStrategy="simple">{message}</Text>
    </View>
  );
};
