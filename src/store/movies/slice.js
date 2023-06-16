import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    moviesList: [],
    filteredMoviesList: [],
    selectedMoviesList: [],
    search: {
      title: "",
      duration: "",
    },
    page: 1,
    lastPage: 1,
  },
  reducers: {
    setMoviesList: (state, action) => {
      state.moviesList = action.payload;
    },
    setFilteredMoviesList: (state, action) => {
      state.filteredMoviesList = action.payload;
    },
    setSearchTitle: (state, action) => {
      state.search.title = action.payload.toLowerCase();
    },
    setSearchDuration: (state, action) => {
      state.search.duration = action.payload.toLowerCase();
    },
    addToSelectedMoviesList: (state, action) => {
      state.selectedMoviesList.push(action.payload);
    },
    removeFromSelectedMoviesList: (state, action) => {
      state.selectedMoviesList = state.selectedMoviesList.filter(
        (id) => id !== action.payload
      );
    },
    resetSelectedMoviesList: (state) => {
      state.selectedMoviesList = [];
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setLastPage: (state, action) => {
      state.lastPage = action.payload;
    },
  },
});

export const {
  setMoviesList,
  setSearchTitle,
  setSearchDuration,
  setFilteredMoviesList,
  addToSelectedMoviesList,
  removeFromSelectedMoviesList,
  resetSelectedMoviesList,
  setPage,
  setLastPage,
} = moviesSlice.actions;

export default moviesSlice.reducer;
