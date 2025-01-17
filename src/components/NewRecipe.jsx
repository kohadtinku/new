import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const NewRecipe = () => {
  const [recipe, setRecipe] = useState([]);
  useEffect(() => {
    const fetchRecipe = async () => {
      const res = await axios
        .get("https://dummyjson.com/recipes")
        .then((res) => {
          setRecipe(res.data.recipes);
          console.log(res.data);
        });
    };
    fetchRecipe();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: "2rem",
        padding: "20px",
      }}
    >
      {recipe.map((item, id) => (
        <div key={id} class="card" style={{ width: "18rem" }}>
          <img src={item.image} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Name: {item.name}</h5>
            <p class="card-text">Cuisine : {item.cuisine}</p>
            <h1>Ingredients</h1>{" "}
            <p>
              {item.ingredients.map((item) => (
                <li>{item}</li>
              ))}
            </p>
            <h1>Instructions</h1>{" "}
            <p>
              {item.instructions.map((item) => (
                <li>{item}</li>
              ))}
            </p>
            <Link
              to={`/recipe/${item.userId}`}
              href="#"
              class="btn btn-primary"
            >
              Go somewhere
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewRecipe;
