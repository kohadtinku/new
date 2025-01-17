import React, { useContext, useState } from "react";
import { MovieContext } from "../context/Context";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { fetchMovies } = useContext(MovieContext);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchMovies(searchTerm);
    setSearchTerm("");
  };
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <div
          class="container"
          style={{ display: "flex", justifyContent: "center", gap: "30rem" }}
        >
          <Link to={"/"} class="navbar-brand text-white">
            Movie App
          </Link>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <form class="d-flex" onSubmit={handleSearch}>
              <input
                class="form-control me-2 bg-black"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                type="search"
                placeholder="Search"
                aria-label="Search"
                style={{ width: "28rem" }}
              />
              <button class="btn btn-outline-danger bg-dark" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default SearchBar;
