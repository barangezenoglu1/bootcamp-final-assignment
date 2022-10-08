import { configureStore, isImmutableDefault } from "@reduxjs/toolkit";
import themeReducer from "../features/ThemeSlice/themeSlice";
import messagesReducer from "../features/MessagesSlice//messagesSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    messages: messagesReducer
  },
});