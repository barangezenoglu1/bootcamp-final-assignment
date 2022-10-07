import { TextInput, View } from "react-native"
import styles from "./ChatInput.styles";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import { useSelector } from "react-redux";
export const ChatInput = () => {
    const theme = useSelector((state) => state.theme.theme)
    return (
        <View style={styles.inputAndImage}>
        <View style={styles.textInputContainer(theme)}>
          <View style={styles.inputContainer}>
            <Feather name="smile" style={styles.smileIcon(theme)} />
            <TextInput
              style={styles.textInput}
              placeholder="Type a message"
              placeholderTextColor={theme.grey}
            />
          </View>
          <View style={styles.inputContainer}>
            <Entypo name="attachment" style={styles.attachIcon(theme)} />
            <Ionicons name="ios-mic-outline" style={styles.micIcon(theme)} />
          </View>
        </View>
      </View>
    )
}