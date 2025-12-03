import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  user: null,
  token: null,
};

const UserInfoSlice = createSlice({
  name: "userInfoSlice",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.user = action.payload;
    },

    setToken: (state, action) => {
      state.token = action.payload;
    },

    clearUser: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setUserInfo, setToken, clearUser } = UserInfoSlice.actions;
export default UserInfoSlice.reducer;
