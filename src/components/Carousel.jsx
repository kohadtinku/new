import React from "react";
import img from "../assets/1.jpeg";
import img1 from "../assets/2.jpeg";
import img2 from "../assets/3.jpeg";
import img3 from "../assets/nature.jpg";

const Carousel = () => {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner" style={{ height: "500px" }}>
          <div className="carousel-item active">
            <img src={img3} className="d-block h-50 w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img1} className="d-block h-50 w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img2} className="d-block h-50 w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Carousel;
