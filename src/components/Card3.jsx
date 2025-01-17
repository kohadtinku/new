const Card3 = ({img,title,desc,btn}) => {
  return (
    <>
      <div class="card" style={{ width: "18rem" }}>
        <img src={img} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <p class="card-text">{desc}</p>
          <a href="#" class="btn btn-primary">
            {btn}
          </a>
        </div>
      </div>
    </>
  );
};
export default Card3;
