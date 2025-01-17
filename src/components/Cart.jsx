// import React, { useContext } from "react";
// import { CartContext } from "../context/Context";

// const Cart = () => {
//   const { cart, removeCart, clearCart } = useContext(CartContext);
//   return (
//     <>
//       <h1>Your cart</h1>
//       {cart.lenght ===0 ?(
//         <p>Your cart is empty</p>
//       ):(
//         <>
//         {
//             cart.map((item)=>{
//                 return (
//                     <div key={item.id}>
//                         <h3>{item.name}</h3>
//                         <p>Price: ${item.price}</p>
//                         <p>Quantity: {item.quantity}</p>
//                         <button onClick={()=>removeCart(item.id)}>Remove</button>
//                     </div>
//                 )
//             })
//         }
//         </>
//       )}
//     </>
//   );
// };

// export default Cart;
