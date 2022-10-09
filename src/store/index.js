import { configureStore, isImmutableDefault } from "@reduxjs/toolkit";
import themeReducer from "../features/ThemeSlice/themeSlice";
import messagesReducer from "../features/MessagesSlice//messagesSlice";
import userReducer from "../features/UserSlice/UserSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    messages: messagesReducer,
    user: userReducer
  },
});