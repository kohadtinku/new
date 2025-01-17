import React, { useEffect, useState } from "react";

const NewProduct = () => {
  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setP(data);
  //       console.log("new product data : -", data);
  //     })
  //     .then((json) => console.log(json))
  //     .then((e) => {
  //       console.log(e);
  //     });
  // }, []);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log("productData",data);
        setProducts(data);
      })
      .then((json) => console.log(json));
  }, []);

  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/todos")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setP(data);
  //       })
  //       .then((json) => console.log(json))
  //       .catch((e) => {
  //         console.log(e);
  //       });
  //   });
  return (
    <>
      <div className="prod">
        <h1>product</h1>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "2rem",
          }}
        >
          {products.map((product, id) => {
            return (
              <div key={id} className="card" style={{ width: "18rem" }}>
                <img
                  src={product.image}
                  className="card-img-top"
                  alt="..."
                  style={{ height: "250px", width: "250px" }}
                />
                <div className="card-body">
                  <h5 className="card-title"> Title : {product.title}</h5>
                  <p className="card-title">Category : {product.category}</p>
                  <p className="card-title">Price :{product.price}</p>
                  <p className="card-text"> Description: 
                    {product.description.slice(0,150)}...Read more
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default NewProduct;
