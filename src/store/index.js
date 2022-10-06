import { configureStore, isImmutableDefault } from "@reduxjs/toolkit";
import themeReducer from "../features/ThemeSlice/themeSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});