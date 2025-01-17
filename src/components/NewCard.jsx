import React from "react";
// import img from '../assets/1.jpeg'

const NewCard = ({ maintag, img, title, para, btn }) => {
  return (
    <>
      <div class="card" style={{ width: "18rem" }}>
        <div class="card-header">{maintag}</div>
        <div class="card-body">
          <img src={img} alt="" style={{ width: "200px" }} />
          <h5 class="card-title">{title}</h5>
          <p class="card-text">{para}</p>
          <a href="#" class="btn  btn-primary">
            {btn}
          </a>
        </div>
      </div>
    </>
  );
};

export default NewCard;
