import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    isOpen: false,
  },
  reducers: {
    toggleCart(state) {
      state.isOpen = !state.isOpen;
    },
    addItem(state, action) {
      const itemIndex = state.items.findIndex(
        (i) => i.comic.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.items[itemIndex].quantity += 1;
      } else {
        state.items.push({ comic: action.payload, quantity: 1 });
      }
    },
    removeItem(state, action) {
      state.items = state.items.filter((i) => i.comic.id !== action.payload);
    },
  },
});

export const { toggleCart, addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
