import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: {
    id: null,
    title: "",
    url: "",
  },
  systemType: {},
};

export const vmSlice = createSlice({
  name: "vm",
  initialState,
  reducers: {
    addLocation: (state, action) => {
      state.location = action.payload;
    },
    addSystemType: (state, action) => {
      state.systemType = action.payload;
    },
  },
});

export const { addLocation, addSystemType } = vmSlice.actions;

export default vmSlice.reducer;
