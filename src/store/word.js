import { createSlice } from "@reduxjs/toolkit";

export const wordSlice = createSlice({
  name: "word",

  // for the word component we have the random secrete word as an object
  // and the letters that our user has guessed also as an object
  // and the amount of words guessed wrong
  initialState: {
    secretWord: {},
    userProgress: {},
    score: 1,
  },

  reducers: {
    // receives payload from async function. when the promise is resolved.
    // the payload is set to the secrete word attribute
    generateSecretWord: (state, action) => {
      switch (action.payload) {
        case String:
          state.secretWord = action.payload;
          break;
        default:
          state.secretWord = action.payload;
      }
    },

    // update the user progress in guessing the word
    setProgress: (state, action) => {
      switch (action.payload) {
        case String:
          state.userProgress = action.payload;
          break;
        default:
          state.userProgress = action.payload;
      }
    },

    // counts how many word are incorrect
    increaseScore: (state) => {
      state.score += 1;
    },
  },
});

export const { generateSecretWord, setProgress, increaseScore } =
  wordSlice.actions;

export default wordSlice.reducer;
