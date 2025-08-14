import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";
const initialState = {
  data: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loadusers: (state, action) => {
      state.data = action.payload;
    },
  },
});

export default userSlice.reducer;
export const { loadusers } = userSlice.actions;
