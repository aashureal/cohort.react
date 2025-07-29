import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loadUsers: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { loadUsers } = userSlice.actions;

export default userSlice.reducer;
