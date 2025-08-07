import { configureStore } from "@reduxjs/toolkit";
import comicsReducer from "./comics/slice";

const store = configureStore({
  reducer: {
    comics: comicsReducer,
  },
});

export default store;
