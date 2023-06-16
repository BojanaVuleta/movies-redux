import { useDispatch } from "react-redux";
import { setSearchName, setSearchDuration } from "../store/movies/slice";

export const MovieSearch = () => {
  const dispatch = useDispatch();

  const handleSearchName = (event) => {
    dispatch(setSearchName(event.target.value));
  };

  const handleSearchDuration = (event) => {
    dispatch(setSearchDuration(event.target.value));
  };

  return (
    <span>
      Name: <input type="text" onChange={handleSearchName} />
      Duration: <input type="text" onChange={handleSearchDuration} />
    </span>
  );
};
