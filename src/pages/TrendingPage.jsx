import { useTrendingMovies } from "../hooks/useTrendingMovies";
import MovieList from "../components/MovieList";

export default function TrendingPage() {
  const { data, isLoading, isError, error } = useTrendingMovies();

  return (
    <>
      <MovieList
        data={data}
        isLoading={isLoading}
        isError={isError}
        error={error}
      />
    </>
  );
}
