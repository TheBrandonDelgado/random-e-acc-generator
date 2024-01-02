import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import eAccPhrases from '../../data';


const initialState = {
  message: null
};

export const messageBoxSlice = createSlice({
  name: 'messageBox',
  initialState,
  reducers: {
    getPhrase: (state) => {
        let randomNumber = Math.floor(Math.random() * eAccPhrases.length);
        state.message = eAccPhrases[randomNumber].phrase;
    }
  }
});

export const { getPhrase } = messageBoxSlice.actions;
export const selectPhrase = (state) => state.messageBox.message;

export default messageBoxSlice.reducer;
