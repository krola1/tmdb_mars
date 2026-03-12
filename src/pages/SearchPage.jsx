import { useState } from "react";
import { useSearchMovies } from "../hooks/useSearchMovies";
import MovieList from "../components/MovieList";
import { useDebouncer } from "../hooks/useDebouncer";

export default function SearchPage() {
  const [text, setText] = useState("");
  const debouncedText = useDebouncer(text);
  const query = debouncedText.trim().length >= 3 ? debouncedText : "";
  const { data, isLoading, isError, error } = useSearchMovies(query);

  return (
    <>
      <input
        value={text}
        type="text"
        onChange={(e) => setText(e.target.value)}
      />
      {text.trim() && (
        <MovieList
          data={data}
          isLoading={isLoading}
          isError={isError}
          error={error}
        />
      )}
    </>
  );
}
