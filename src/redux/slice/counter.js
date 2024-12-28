import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value = Number(state.value) + Number(action.payload);
    },
  },
});
