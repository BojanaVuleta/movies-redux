import { useDispatch, useSelector } from "react-redux";
import { selectSelectedMoviesList } from "../store/movies/selectors";
import { useEffect, useState } from "react";
import {
  addToSelectedMoviesList,
  removeFromSelectedMoviesList,
} from "../store/movies/slice";

export const MovieRow = ({ movie }) => {
  const dispatch = useDispatch();
  const selectedMovies = useSelector(selectSelectedMoviesList);
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    if (selectedMovies.find((id) => id === movie.id)) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
  }, [selectedMovies, setIsSelected, movie]);

  const handleClick = () => {
    if (isSelected) {
      dispatch(removeFromSelectedMoviesList(movie.id));
    } else {
      dispatch(addToSelectedMoviesList(movie.id));
    }
  };

  if (!movie) return null;

  return (
    <li style={{ border: isSelected ? "1px solid red" : "" }}>
      <div>id: {movie.id}</div>
      <div>title: {movie.title}</div>
      <div>duration: {movie.duration}</div>
      <div>director: {movie.director}</div>
      <div>release date: {movie.release_date}</div>
      <div>genre: {movie.genre}</div>
      <button className="btn btn-outline-secondary" onClick={handleClick}>
        {isSelected ? "Deselect" : "Select"}
      </button>
    </li>
  );
};
