import { configureStore } from '@reduxjs/toolkit';
import messageBoxReducer from '../components/messageBox/messageBoxSlice';

export const store = configureStore({
  reducer: {
    messageBox: messageBoxReducer,
  },
});