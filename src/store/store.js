import {configureStore} from "@reduxjs/toolkit";
import wordReducer from "./word";

export default configureStore({
    reducer: {
        word: wordReducer,
    },
});