import { createSlice } from "@reduxjs/toolkit";

const allUsersSlice = createSlice({
  name: "allUsers",
  initialState: [],
  reducers: {
    setAllUsers: (state, action) => {
      return {
        allUsers: action.payload,
      };
    },
  },
});

export const { setAllUsers } = allUsersSlice.actions;
export default allUsersSlice.reducer;
