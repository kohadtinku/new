// it is use to memoize the result of a compliation
// const memoValue =  useMemo(()=>computeExpensivevalue(a,b),[a,b]);



import React, { useMemo, useState } from "react";

const UseMemo = () => {
  const [count, setCount] = useState(0);

  const Expensivevalue = useMemo(() => {
    console.log("expensive value runing...");
    let total = 0;
    for (let i = 0; i < 5; i++) {
      total += i;
    }
    return total;
  },[]);


  return (
    <>
      <p>Expensive Value :{Expensivevalue} </p>
      <button onClick={() => setCount(count + 1)}>Re render</button>
      <p>{count}</p>
    </>
  );
};

export default UseMemo;


