import { configureStore } from '@reduxjs/toolkit';
import vmReducer from "../features/vmSlice"

export const store = configureStore({
  reducer: {
    vm: vmReducer
  },
})