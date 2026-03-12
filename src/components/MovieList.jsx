import styles from "../styles/MovieList.module.css";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";

export default function MovieList({ data, isLoading, isError, error }) {
  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>An error occured {error}</h1>;

  return (
    <div className={styles.wrapper}>
      {data?.results.map((movie) => (
        <Link>
          <MovieCard {...movie} />
        </Link>
      ))}
    </div>
  );
}
