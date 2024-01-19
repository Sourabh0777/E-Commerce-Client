import { createSlice } from "@reduxjs/toolkit";
const userAlreadyLoggedInInfo = localStorage.getItem("userInfo");
const userAlreadyLoggedInInfoSession = sessionStorage.getItem("userInfo");

const initialState = {
  loginState: userAlreadyLoggedInInfo
    ? JSON.parse(userAlreadyLoggedInInfo)
    : userAlreadyLoggedInInfoSession
    ? JSON.parse(userAlreadyLoggedInInfoSession)
    : "User Data",
};
export const loginUserSlice = createSlice({
  name: "loginUser",
  initialState,
  reducers: {
    loginUserAction: (state, action) => {
      state.loginState = action.payload;
      return;
    },
    logoutUserAction: (state, action) => {},
  },
});
export const { loginUserAction, logoutUserAction } = loginUserSlice.actions;
export default loginUserSlice.reducer;
