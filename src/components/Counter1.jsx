import { useState } from "react";
const Counter1 = () => {
  const [count, setCount] = useState(1);

  const handleDecrement = () => {
    // alert("Derement called")
    setCount(count - 1);
  };
  const handleIncrement = () => {
    //   alert("Increment called")
    setCount(count + 1);
  };
  return (
    <>
      <h1>This is counter </h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "2rem",
          fontSize: "20px",
        }}
      >
        <button onClick={handleDecrement}>-</button>
        <h1>{count}</h1>
        <button onClick={handleIncrement}>+</button>
      </div>
    </>
  );
};

export default Counter1;
