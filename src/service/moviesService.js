import { API } from "../shared/api";

export const getMovies = (params) => {
  return API.get("/movies", { params });
};

export const getMovieById = (id) => {
  return API.get(`/movies/${id}`);
};

