import React from "react";
import productCard from "../data";

const Map = () => {
  const fruits = [
    "Apple",
    "Banana",
    "orange",
    "Mango",
    "dragan-fruit",
    "Papaya",
  ];



  return (
    <>
      <div>
        <h1>Our Products</h1>
        <ul
          style={{
            padding: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "2rem",
          }}
        >
          {productCard.map((product, i) => (
            <div key={i}>
              <div
                className="ProductCard"
                style={{
                  border: "1px solid ",
                  padding: "10px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: "2rem",
                  borderRadius: "10px",
                }}
              >
                <img
                  src={product.image}
                  style={{ height: "150px", width: "250px" }}
                  alt=""
                />
                <h1>{product.name}</h1>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "start",
                    gap: "1rem",
                  }}
                >
                  <p>{product.price}</p>
                  <del>{product.ogPrice}</del>
                </div>
                <button
                  style={{
                    background: "red",
                    borderRadius: "10px",
                    color: "white",
                    fontSize: "18px",
                  }}
                >
                  ADD To cart
                </button>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Map;
