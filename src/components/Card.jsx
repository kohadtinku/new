import React from "react";

const Card = ({img,title,para,text}) => {

  return (
    <>
      <div className="card" style={{width:"18rem"}}>
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
           {para}
          </p>
          <a href="#" className="btn btn-primary">
           {text}
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
