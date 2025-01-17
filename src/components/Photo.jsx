import React, { useEffect, useState } from "react";

const Photo = () => {
  const [photo, setPhoto] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((data) => {
        setPhoto(data);
        console.log("photo data : -", data);
      })
      .then((json) => console.log(json));
  }, []);




  return (
    <>
      <h1>Photos data </h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
        {photo.map((pic, id) => {
          return (
            <div key={id} class="card" style={{ width: "18rem" }}>
              <img src={pic.thumbnailUrl} class="card-img-top" alt="..." />
              <div class="card-body">
                <p class="card-text">{pic.title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Photo;
