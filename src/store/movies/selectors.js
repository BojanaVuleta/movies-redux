const selectMoviesList = (state) => state.movies.moviesList;
const selectFilteredMoviesList = (state) => state.movies.filteredMoviesList;
const selectSelectedMoviesList = (state) => state.movies.selectedMoviesList;
const selectSelectedMoviesCount = (state) =>
  state.movies.selectedMoviesList ? state.movies.selectedMoviesList.length : 0;
const selectSearchTitle = (state) => state.movies.search.title;
const selectSearchDuration = (state) => state.movies.search.duration;
const selectCurrentPage = (state) => state.movies.page;
const selectLastPage = (state) => state.movies.lastPage;

export {
  selectFilteredMoviesList,
  selectMoviesList,
  selectSelectedMoviesList,
  selectSelectedMoviesCount,
  selectSearchTitle,
  selectSearchDuration,
  selectLastPage,
  selectCurrentPage,
};
