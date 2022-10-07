import { ScrollView } from "react-native";
import { Contact } from "../Contact/Contact";
import { preparedContacts } from "../mock-data/contactListGenerator";
import styles from "./ContactList.style";
export const ContactList = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={styles.contentContainerStyle}>
      {preparedContacts.map((contact) => {
        return (
          <Contact
            key={contact.id}
            contactName={contact.contactName}
            profilePhoto={contact.profilePhoto}
            lastSeen={contact.lastSeen}
            navigation={navigation}
          />
        );
      })}
    </ScrollView>
  );
};
