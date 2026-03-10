import { useQuery } from "@tanstack/react-query";
import { searchMovies } from "../api/tmdb";

export const useSearchMovies = (query) => {
  return useQuery({
    queryKey: ["movieSearch", query],
    queryFn: () => searchMovies(query),
    enabled: !!query.trim(),
    staleTime: 30_000,
  });
};
