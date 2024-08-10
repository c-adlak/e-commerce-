import { createSlice } from "@reduxjs/toolkit";
export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cards: [],
  },
  reducers: {
    addToCart: (state, action) => {
      let flag = false;
      let i = 0;
      for (i; i < state.cards.length; i++) {
        if (state.cards[i].id === action.payload) {
          flag = true;
        }
      }
      if (!flag) state.cards.push(action.payload);
      else return;
    },

    removeToCart: (state, action) => {
      state.cards = state.cards.filter((item) => item.id != action.payload);
    },

    increaseQuantity: (state, action) => {
      for (let i = 0; i < state.cards.length; i++) {
        if (state.cards[i].id === action.payload) {
          state.cards[i].quantity++;
        }
      }
    },
    decreaseQuantity: (state, action) => {
      for (let i = 0; i < state.cards.length; i++) {
        if (state.cards[i].id === action.payload) {
          if (state.cards[i].quantity > 1) state.cards[i].quantity--;
        }
      }
    },
  },
});
export const { addToCart } = cartSlice.actions;
export const { removeToCart } = cartSlice.actions;
export const { increaseQuantity } = cartSlice.actions;
export const { decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
