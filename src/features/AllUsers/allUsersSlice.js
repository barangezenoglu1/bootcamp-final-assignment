import { createSlice } from "@reduxjs/toolkit";

const allUsersSlice = createSlice({
    name: "allUsers",
    initialState: null,
    reducers: {
        setAllUsers: (state, action) => {
            return {
                state: action.payload
            }
            
        }
    }
})

export const {setAllUsers} = allUsersSlice.actions;
export default allUsersSlice.reducer;