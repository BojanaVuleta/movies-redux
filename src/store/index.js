import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movies/slice";

export default configureStore({
  reducer: {
    movies: moviesReducer,
  },
});
