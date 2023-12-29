import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { Loading } from "../ui/Loading";

export const MovieContext = createContext();

export function MovieProvider({ children }) {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  function handleChange(e) {
    setQuery(e.target.value);
  }

  useEffect(() => {
    async function fetchMovies() {
      try {
        setIsLoading(true);
        setError("");
        const res = await axios(`https://api.themoviedb.org/3/search/movie`, {
          params: {
            api_key: `d3449ff6ec0c027623bf6b6f5fff78b3`,
            language: `en-US`,
            page: 1,
            include_adult: false,
            query,
          },
        });

        const data = res.data;
        setMovies(data.results);
        if (data.results.length === 0) throw new Error("Movie not found ");
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchMovies();
  }, [query]);

  return (
    <MovieContext.Provider
      value={{
        query,
        setQuery,
        movies,
        handleChange,
        isLoading,
        setMovies,
        error,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}
