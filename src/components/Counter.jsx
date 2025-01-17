// // states is represented to data , object and array,string

import { useState } from "react";

// import { useState } from "react";

// const Counter = () => {
//   //   const [statevariable, setStateFunction] = useState(intialState);
//   //   statevariable = state variable
//   // setstateFunction = when in triger on it called in renders the compoenent
//   //   intialState = initial state is a number , object ,array,string

//   const [count, setCount] = useState(1);

//   //   by default count value = 1;
//   // jab me handle increment ko call kr rah tab "setcount" ke under "count + 1"
//   //   count =2

//   const handleIncrement = () => {
//     console.log("button called", count);
//     setCount(count + 1);
//   };

//   const handleDecrement = () => {
//     setCount(count - 1);
//   };

//   return (
//     <>
//       <div
//         style={{
//           display: "flex",
//           textAlign: "center",
//           justifyContent: "center",
//           padding: "30px",
//         }}
//       >

//         <button onClick={handleIncrement} type="button" class="btn btn-primary">+</button>
//         <h1>{count}</h1>
//         <button onClick={handleDecrement} type="button" class="btn btn-primary">-</button>
//       </div>
//     </>
//   );
// };

// export default Counter;

// state = count =1

//   const [statevariable, setStateFunction] = useState(intialState);

//   statevariable = state variable

// setstateFunction = when in triger on it called in renders the compoenent

//   intialState = initial state is a number , object ,array,string

// const [count,setCount] = useState(0)



const Counter = () => {
  const [number, setNumber] = useState(2);

  const handleDecrement = () => {
    console.log("Decrement called");
    setNumber(number - 1);
  };
  const handleIncrement = () => {
    console.log("Increment called");
    setNumber(number +1);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
          padding: "30px",
        }}
      >
        <button onClick={handleDecrement} type="button" class="btn btn-primary">
          -
        </button>
        <h1>{number}</h1>
        <button onClick={handleIncrement} type="button" class="btn btn-primary">
          +
        </button>
      </div>
    </>
  );
};

export default Counter;
