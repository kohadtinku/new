// use ref hook is used to create multiple mutable object

// this is for to accesing the DOM elements

import React, { useRef, useState } from "react";

const UseRef = () => {
  //   const inputRef = useRef(null);

  //   const focusInput = () => {
  //     inputRef.current.focus();
  //   };

  const countRef = useRef(0);
  const [_, forceUpdate] = useState(0);

  const increment = () => {
    countRef.current += 1;
    forceUpdate(countRef.current);
  };
  
  return (
    <>
      {/* <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button> */}
      <div>
        <p>Count : {countRef.current}</p>
        <button onClick={increment}>Increment</button>
      </div>
    </>
  );
};

export default UseRef;
