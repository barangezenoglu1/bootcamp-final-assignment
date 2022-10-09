import { configureStore, isImmutableDefault } from "@reduxjs/toolkit";
import themeReducer from "../features/ThemeSlice/themeSlice";
import messagesReducer from "../features/MessagesSlice//messagesSlice";
import userReducer from "../features/UserSlice/UserSlice";
import allUsersReducer from "../features/AllUsers/allUsersSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    messages: messagesReducer,
    user: userReducer,
    allUsers: allUsersReducer
  },
});