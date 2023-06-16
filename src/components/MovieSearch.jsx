import { useDispatch } from "react-redux";
import { setSearchTitle} from "../store/movies/slice";

const MovieSearch = () => {
  const dispatch = useDispatch();

  const handleSearchTitle = (event) => {
    dispatch(setSearchTitle(event.target.value));
  };


  return (
    <span>
      Title Search: <input type="text" onChange={handleSearchTitle} />
    
    </span>
  );
};
export default MovieSearch;