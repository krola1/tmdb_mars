import { useParams } from "react-router-dom";
import { useMovieDetails } from "../hooks/useMovieDetails";
import styles from "../styles/DetailsPage.module.css";
import { imageHandler } from "../config/imageHandler";

export default function DetailsPage() {
  const { movieID } = useParams();
  const { data: movie, isLoading, isError, error } = useMovieDetails(movieID);

  const poster = imageHandler(movie?.poster_path, "original");
  const background = imageHandler(movie?.backdrop_path, "original");

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>An error occured {error}</h1>;

  return (
    <div
      className={styles.wrapper}
      style={{ backgroundImage: `url(${background})` }}
    >
      <h1>{movie?.title}</h1>
      <img className={styles.poster} src={poster} alt="" />
    </div>
  );
}
