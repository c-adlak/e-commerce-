import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import wistlistReducer from "./wistlistSlice";
export default configureStore({
  reducer: {
    cart: cartReducer,
    wistlist: wistlistReducer,
  },
});
