import { ScrollView } from "react-native";
import { Contact } from "../Contact/Contact";
import styles from "./ContactList.style";

export const ContactList = ({ navigation, contactList }) => {
  
  return (
    <ScrollView contentContainerStyle={styles.contentContainerStyle}>
      {contactList.map((contact) => {
        return (
          <Contact
            key={contact.id}
            contactName={contact.name}
            photoURL={contact.photoURL}
            lastSeen={contact.lastSeen}
            navigation={navigation}
          />
        );
      })}
    </ScrollView>
  );
};
