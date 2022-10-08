import { useRef } from "react";
import { ScrollView } from "react-native";
import { TextBox } from "../TextBox/TextBox";

export const Chat = ({messages}) => {
  const scrollViewRef = useRef();
  return (
    <ScrollView
      ref={scrollViewRef}
      onContentSizeChange={() =>
        scrollViewRef.current.scrollToEnd({ animated: true })
      }
    >
        {messages?.map((message) => {
          return <TextBox key={message.id} message={message.message} />
        })}
    </ScrollView>
  );
};
