import { useTrendingMovies } from "../hooks/useTrendingMovies";
import MovieList from "../components/MovieList";

export default function TrendingPage() {
  const { data, isLoading, isError, error } = useTrendingMovies();
  console.log(data);

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
