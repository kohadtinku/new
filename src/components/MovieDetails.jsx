import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovies] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("no movie");

  useEffect(() => {
    const fetchMovie = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await axios.get(
          `http://www.omdbapi.com/?apikey=a78caf25&i=${id}`
        );
        if (res.data.Response === "True") {
          setMovies(res.data);
        } else {
          setError("Failed to fetch movie details");
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, [id]);

  if (loading) return <p>Loading....</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <div className="m-details">
        <h1>Movie Page </h1>
        <img src={movie.Poster} alt={movie.Title} />
        <h2>{movie.Title}</h2>
        <p>{movie.Year}</p>
        <p>{movie.Genre}</p>
        <p>{movie.Plot}</p>
        <p>Rating: {movie.imdbRating}</p>
        <p>Released: {movie.Released}</p>
        <p>Director: {movie.Director}</p>
        <p>Actors: {movie.Actors}</p>
        <Link to="/">
          <button>Back</button>
        </Link>
      </div>
    </>
  );
};

export default MovieDetails;
