import React, { useEffect, useState } from "react";

const Recipe = () => {
  const [recipe, setRecipe] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((response) => response.json())
      .then((data) => {
        setRecipe(data.recipes);
        console.log(data);
      });
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "2rem",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {recipe.map((data, id) => {
        return (
          <>
            <div class="card" style={{ width: "18rem" }}>
              <img src={data.image} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Name: {data.name}</h5>
                <p class="card-title">Category: {data.category}</p>
                <p class="card-text">Ingredients: {data.ingredients}</p>
                <p>
                  Instructions
                  <a href="#" class="text-primary">
                    {data.instructions}
                  </a>
                </p>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Recipe;
