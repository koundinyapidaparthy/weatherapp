import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  color:""
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserLoginDetails: (state, action) => {
      state.name = action.payload.name;
      state.color = action.payload.color;
    },

    // setSignOutState: (state) => {
    //   state.name = null;
    // },
  },
});

export const { setUserLoginDetails } = userSlice.actions;

export const selectUserName = (state) => state.user.name;
export const selectUserColor = (state) => state.user.color;

export default userSlice.reducer;