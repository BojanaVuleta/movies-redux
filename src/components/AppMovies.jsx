import { useEffect } from "react";
import { getMovies } from "../service/moviesService";
import { useDispatch, useSelector } from "react-redux";
import {
  addToSelectedMoviesList,
  removeFromSelectedMoviesList,
  resetSelectedMoviesList,
  setMoviesList,
  setLastPage,
  setPage,
} from "../store/movies/slice";
import {
  selectMoviesList,
  selectCurrentPage,
  selectLastPage,
  selectSearchTitle,
  selectSearchDuration,
  selectSelectedMoviesCount,
} from "../store/movies/selectors";
import { MovieRow } from "./MovieRow";

const AppMovies = () => {
  const dispatch = useDispatch();
  const movies = useSelector(selectMoviesList);
  const selectedMoviesCount = useSelector(selectSelectedMoviesCount);
  const searchedTitle = useSelector(selectSearchTitle);
  const searchedDuration = useSelector(selectSearchDuration);
  const currentPage = useSelector(selectCurrentPage);
  const lastPage = useSelector(selectLastPage);

  useEffect(() => {
    getMovies({
      page: currentPage,
      title: searchedTitle,
      duration: searchedDuration,
    }).then(({ data }) => {
      dispatch(setMoviesList(data.data));
      dispatch(setLastPage(data.last_page));
    });
  }, [searchedTitle, searchedDuration, currentPage]);

  const handleSelectAll = () => {
    dispatch(resetSelectedMoviesList());
    movies.forEach((movie) => {
      dispatch(addToSelectedMoviesList(movie.id));
    });
  };
  const handleDeSelectAll = () => {
    movies.forEach((movie) => {
      dispatch(removeFromSelectedMoviesList(movie.id));
    });
  };

  const handleClickSort = (sort_by, sort_order) => {
    getMovies({
      title: searchedTitle,
      duration: searchedDuration,
      sort_by,
      sort_order,
    }).then(({ data }) => {
      dispatch(setMoviesList(data.data));
      dispatch(setLastPage(data.last_page));
    });
  };

  const handleChangePage = (isNext) => {
    if (isNext) {
      dispatch(setPage(currentPage + 1));
    } else if (currentPage !== 1) {
      dispatch(setPage(currentPage - 1));
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <button type="button" class="btn btn-outline-secondary"  onClick={() => handleClickSort("title", "asc")}>Title Asc</button>
        <button type="button" class="btn btn-outline-secondary"  onClick={() => handleClickSort("title", "desc")}> Title Desc </button>
        <button type="button" class="btn btn-outline-secondary"  onClick={() => handleClickSort("duration", "asc")}>
          Duration Asc
        </button>
        <button type="button" class="btn btn-outline-secondary"  onClick={() => handleClickSort("duration", "desc")}>
          Duration Desc
        </button>
      </div>
      <div className="d-flex justify-content-center">Selected movies: {selectedMoviesCount}</div>
      <div className="d-flex justify-content-center">
        <button type="button" class="btn btn-success" onClick={handleSelectAll}>Select All</button>
        <button type="button" class="btn btn-danger" onClick={handleDeSelectAll}>Deselect All</button>
      </div>
      <div>
        <button className="btn btn-outline-secondary"
          onClick={() => handleChangePage(false)}
          disabled={currentPage === 1}
        >
          Previous Page
        </button>
        <button className="btn btn-outline-secondary"
          onClick={() => handleChangePage(true)}
          disabled={currentPage === lastPage}
        >
          Next page
        </button>
      </div>
      
      <ul style={{ display: "flex", flexDirection: "column", gap: "4px"}}>
        {movies && movies.length ? (
          movies.map((movie) => {
            return <MovieRow key={movie.id} movie={movie} />;
          })
        ) : (
          <div>Nema filma koji podleze kriterijumu</div>
        )}
      </ul>
    </>
  );
};
export default AppMovies;
