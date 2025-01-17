import { createContext, useState } from "react";
import axios from "axios";
export const MovieContext = createContext();

const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchMovies = async (searchTerm) => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=a78caf25&s=${searchTerm}`
    
      );
      if (response.data.Response === "True") {
        setMovies(response.data.Search);
      } else {
        setMovies([]);
        setError(response.data.error);
      }
    } catch (error) {
      setError("Failed to fetch movies");
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  
  return (
    <MovieContext.Provider value={{ movies, loading, error, fetchMovies }}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;
