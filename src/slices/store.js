import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/slice";
import comicsReducer from "./comics/slice";

const store = configureStore({
  reducer: {
    comics: comicsReducer,
    cart: cartReducer,
  },
});

export default store;
