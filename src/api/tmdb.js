import { api_tmdb } from "./axiosBase";

//function for fetching trending movies.
export const fetchTrendingMovies = async () => {
  const result = await api_tmdb.get("/trending/movie/week");
  return result.data;
};

///function for feetching movie by ID
export const fetchMovieById = async (id) => {
  const result = await api_tmdb.get(`/movie/${id}`);
  return result.data;
};

/// function for searching for movies
export const searchMovies = async (query) => {
  if (query.trim()) {
    const result = await api_tmdb.get("/search/movie", {
      params: {
        query,
        include_adult: false,
        page: 1,
      },
    });
    return result.data;
  }
};
