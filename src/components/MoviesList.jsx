import React, { useContext } from "react";
import { MovieContext } from "../context/Context";
import Moviecard from "./Moviecard";
import img from "../assets/ill.jpg";
const MoviesList = () => {
  const { movies, loading, error } = useContext(MovieContext);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (movies.length === 0)
    return (
      <>
        <div
          className="searchmoviehere"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "red",
            flexDirection: "column",
          }}
        >
          <h1>Search for a movie here</h1>
          <img src={img} alt="" />
        </div>
      </>
    );
  console.log(movies);

  return (
    <>
      <div
        className="movie-list"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "2rem",
          flexWrap: "wrap",
          padding: "20px",
        }}
      >
        {movies.map((movie) => (
          <Moviecard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </>
  );
};

export default MoviesList;
