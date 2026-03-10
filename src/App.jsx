import "./App.css";
import { useMovieDetails } from "./hooks/useMovieDetails";
import { useSearchMovies } from "./hooks/useSearchMovies";

import { useTrendingMovies } from "./hooks/useTrendingMovies";
function App() {
  const { data, isLoading, isError, error } = useTrendingMovies();

  if (!data) return null;
  if (isLoading) return <h1>loading ....</h1>;
  if (isError) return <h1>An error occured {error}</h1>;

  return (
    <>
      {data.results.map((movie) => (
        <h3 key={movie.id}>{movie.title}</h3>
      ))}
    </>
  );
}

export default App;
