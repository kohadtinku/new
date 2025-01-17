import React, { useState } from "react";

// conditional rendering has 3 type
// 1 if - else
// 2 Ternary ope
// 3 Logical Operator &&

// const Conditional = () => {
//   const isLogin = true;
//   const userName = "Pratik";
//   if (isLogin) {
//     return <h1>Welcome , {userName}</h1>;

//   } else {
//     return <h1>Please Login</h1>;

//   }
// };

// export default Conditional;

// ternary operator

// const Conditional = () => {
//   const isLogin = true;
//   //   <div>{isLogin ? <button>Logout</button> : <button>Login</button>}</div>;

//   <div style={{ background: "red" }}>
//     {isLogin ?( <button>Logout</button> ): (<button>Login</button>)}
//   </div>;
// };

// Condition ? truevalue:falsevalue

// Logical And  &&
// const Conditional = () => {
//   const isLogin = true;
//   return <div>{isLogin && <h1>Welcome,User</h1>}</div>;
// };

const Conditional = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleLogin = () => {
    setIsLogin(!isLogin);
  };
  return (
    <div>
      <h1>Welcome To Our Shop</h1>
      <button onClick={handleLogin}>{isLogin ? "Logout" : "Login"}</button>
    </div>
  );
};

export default Conditional;
