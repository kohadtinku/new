import React from "react";
import data from "../productData";

import "../App.css";
console.log(data);

const Product = () => {
  return (
    <>
      <h1>OUR PRODUCTS</h1>
      {/* <div className="main">
        {data.map((product, id) => (
          <>
            <div className="p-card">
              <div key={id}>
                <img src={product.image} alt="" />
                <h1>{product.title}</h1>
                <p>{product.category}</p>
                <p>{product.price}</p>
                <p>{product.description}</p>
                <p>{product.rating.rate}</p>
              </div>
            </div>
          </>
        ))}
      </div> */}
      <div className="main">
        {data.map((product, id) => (
            
          <div key={id} class="p-card" style={{ width: "18rem" }}>
            <img src={product.image} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">
                <span>Title :</span> {product.title.slice(0,30)}...
              </h5>
              <p class="card-text">
                <span>Description:</span> {product.description.slice(0,150)}... Read more
              </p>
              <p>
                <span>Price :</span> {product.price}
              </p>
              <p>
                <span> Category :</span> {product.category}
              </p>
              <p>
                <span> Rating:</span> {product.rating.rate}
              </p>
              <button>BUY NOW</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Product;
