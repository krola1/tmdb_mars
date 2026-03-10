import { useQuery } from "@tanstack/react-query";
import { fetchMovieById } from "../api/tmdb";

export const useMovieDetails = (id) => {
  return useQuery({
    queryKey: ["movieDetails", id],
    queryFn: () => fetchMovieById(id),
    enabled: !!id,
    staleTime: 5 * 60_000,
  });
};
