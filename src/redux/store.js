import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slice/cartSlice";
import loginUserReducer from "./Slice/loginUserSlice";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    loginUser: loginUserReducer,
  },
});

export default store;
