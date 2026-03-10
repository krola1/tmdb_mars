import { fetchTrendingMovies } from "../api/tmdb";
import { useQuery } from "@tanstack/react-query";

export const useTrendingMovies = () => {
  return useQuery({
    queryKey: ["trending"],
    queryFn: fetchTrendingMovies,
    staleTime: 60_000,
  });
};
