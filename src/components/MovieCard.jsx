import styles from "../styles/MovieCard.module.css";
export default function MovieCard({ title }) {
  return (
    <div className={styles.wrapper}>
      <h1>{title}</h1>
    </div>
  );
}
