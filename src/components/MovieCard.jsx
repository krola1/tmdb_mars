import { useState } from "react";
import { imageHandler } from "../config/imageHandler";
import styles from "../styles/MovieCard.module.css";

export default function MovieCard({
  title,
  poster_path,
  vote_average,
  release_date,
  overview,
}) {
  const [showInfo, setShowInfo] = useState(false);
  const imageUrl = imageHandler(poster_path);

  return (
    <div
      className={styles.wrapper}
      onMouseEnter={() => setShowInfo(true)}
      onMouseLeave={() => setShowInfo(false)}
    >
      <img className={styles.img} src={imageUrl} alt="" />

      {showInfo && (
        <div className={styles.overlay}>
          <h3>{title}</h3>
          <p>
            ⭐{vote_average} - {release_date}
          </p>
          <p>{overview.slice(0, 120)}...</p>
        </div>
      )}
    </div>
  );
}
