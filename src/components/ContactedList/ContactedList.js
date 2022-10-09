import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Contact } from "../Contact/Contact";

export const ContactedList = ({ navigation, contactedList }) => {
  
  return (
    <ScrollView contentContainerStyle={styles.contentContainerStyle}>
      {contactedList.map((contact) => {
        return (
          <Contact
            key={contact.id}
            contactName={contact.name}
            photoURL={contact.photoURL}
            navigation={navigation}
          />
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingBottom: 80,
  },
});
