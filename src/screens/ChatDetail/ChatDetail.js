import { ImageBackground, Pressable, View } from "react-native";
import styles from "./ChatDetail.styles";
import { Header } from "../../components/Header/Header";
import BackgroundLogo from "../../assets/chat-background.png";
import Ionicons from "react-native-vector-icons/Ionicons";
import { ChatInput } from "../../components/ChatInput/ChatInput";
import { useGlobalTheme } from "../../hooks/useGlobalTheme";
import { Chat } from "../../components/Chat/Chat";
import { useDispatch, useSelector } from "react-redux";
import { useMemo, useState } from "react";
import { sendMessage } from "../../features/MessagesSlice/messagesSlice";

export const ChatDetail = ({ route, navigation }) => {
  const { contactName, photoURL, lastSeen } = route.params;
  const dispatch = useDispatch();
  const theme = useGlobalTheme();
  const messages = useSelector((state) => state.messages);
  const [inputText, setInputText] = useState("");

  const currentChat = useMemo(() =>
    messages.filter(
      (currentChat) => currentChat?.reciever === contactName,
      [messages]
    )
  );

  const changeTextHandler = (text) => {
    setInputText(text);
  };

  const handleSubmitInput = (input) => {
    const msgObj = {
      id: Math.random(),
      reciever: contactName,
      message: input,
    };
    dispatch(sendMessage(msgObj));
    setInputText("");
  };

  return (
    <View style={styles.container}>
      <Header
        profile
        contactName={contactName}
        photoUrl={photoURL}
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
      >
        <Chat messages={currentChat} />
      </ImageBackground>
      <ChatInput
        onSubmitted={() => handleSubmitInput(inputText)}
        changeTextHandler={changeTextHandler}
        inputValue={inputText}
      />
    </View>
  );
};
