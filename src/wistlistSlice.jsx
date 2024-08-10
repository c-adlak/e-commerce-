import { createSlice } from "@reduxjs/toolkit";
export const wistlistSlice = createSlice({
  name: "wistlist",
  initialState: {
    favourit: [],
  },

  reducers: {
    //add to wistlist reducer
    addToWistlist: (state, action) => {
      let flag = false;
      let i = 0;
      for (i; i < state.favourit.length; i++) {
        if (state.favourit[i].id === action.payload) {
          flag = true;
        }
      }
      if (!flag) state.favourit.push(action.payload);
      else return;
    },

    // remove to wistlist reducer
    removeToWistlist: (state, action) => {
      state.favourit = state.favourit.filter(
        (item) => item.id != action.payload
      );
    },
  },
});
export const { addToWistlist, removeToWistlist } = wistlistSlice.actions;
export default wistlistSlice.reducer;
