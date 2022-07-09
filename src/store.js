import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./reducer/cartSlice";
import user from "./reducer/Login";
export const store = configureStore({
  reducer: {
    cart: cartSlice,
    user: user,
  },
});
