import { createSlice } from "@reduxjs/toolkit";

const messagesSlice = createSlice({
  name: "messages",
  initialState: [],
  reducers: {
    sendMessage: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { sendMessage } = messagesSlice.actions;
export default messagesSlice.reducer;
