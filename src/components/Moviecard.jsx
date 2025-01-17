import React from "react";
import { Link } from "react-router-dom";

const Moviecard = ({ movie }) => {
  return (
    <>
      <div class="card" style={{ width: "18rem" }}>
        <img src={movie.Poster} class="card-img-top" alt="..."  style={{height:"300px"}}/>
        <div class="card-body" >
          <h5 class="card-title">{movie.Title}</h5>
 

          <Link to={`/movie/${movie.imdbID}`} class="btn btn-primary">
            Read More
          </Link>
        </div>
      </div>
    </>
  );
};

export default Moviecard;
