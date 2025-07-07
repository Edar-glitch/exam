import { configureStore } from '@reduxjs/toolkit';
import counterReduser from "comp/counterReduser.js"

export const store = configureStore({
  reducer: {
    counter: counterReduser,
  },
});