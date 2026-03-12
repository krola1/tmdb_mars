import { Link } from "react-router-dom";
import { useTrendingMovies } from "../hooks/useTrendingMovies";
import MovieCard from "../components/MovieCard";

export default function TrendingPage() {
  const { data, isLoading, isError, error } = useTrendingMovies();

  if (!data) return null;
  if (isLoading) return <h1>loading ....</h1>;
  if (isError) return <h1>An error occured {error}</h1>;

  console.log(data);

  return (
    <>
      {data?.results.map((movie) => (
        <Link key={movie.id}>
          <MovieCard {...movie} />
        </Link>
      ))}
    </>
  );
}
