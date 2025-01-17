const MainCard = ({ imgsrc, text, btn }) => {
  return (
    <>
    
      <div
        className="card"
        style={{
          width: "18rem",
          border: "1px solid red",
          height: "300px",
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
        }}
      >
        <img src={imgsrc} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text fw-bolder">{text}</p>
        </div>
        <button style={{ color: "red", backgroundColor: "black" }}>
          {btn}
        </button>{" "}
      </div>
    </>
  );
};

export default MainCard;
