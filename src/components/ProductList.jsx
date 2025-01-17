// import React, { useContext } from "react";
// import { CartContext } from "../context/Context";

// const products = [
//   {
//     id: 1,
//     name: "Product 1",
//     price: 100,
//   },
//   {
//     id: 2,
//     name: "Product 2",
//     price: 200,
//   },
//   {
//     id: 3,
//     name: "Product 3",
//     price: 300,
//   },
// ];
// const ProductList = () => {
//   const { addToCart } = useContext(CartContext);
//   const { cart, removeCart, clearCart } = useContext(CartContext);

//   return (
//     <>
//       <h1>Our Product</h1>
//       {products.map((product) => (
//         <div key={product.id}>
//           <h3>{product.name}</h3>
//           <p>Price: ${product.price}</p>
//           <button onClick={() => addToCart(product)}>Add to cart </button>
//         </div>
//       ))}



//       <h1>Your cart</h1>
//       {cart.lenght === 0 ? (
//         <p>Your cart is empty</p>
//       ) : (
//         <>
//           {cart.map((item) => {
//             return (
//               <div key={item.id} style={{background:"red"}}>
//                 <h3>{item.name}</h3>
//                 <p>Price: ${item.price}</p>
//                 <p>Quantity: {item.quantity}</p>
//                 <button onClick={() => removeCart(item.id)}>Remove</button>
//               </div>
//             );
//           })}
//         </>
//       )}
//     </>
//   );
// };

// export default ProductList;
