// import React from "react";
// import { ProductContext } from '../Context/ProductContext';

// export default function Cart() {
//   const { cart, removeFromCart } = React.useContext(ProductContext);

//   return (
//     <div className="card-container">
//       <h1 className="text-xl font-bold mb-4">Your Cart</h1>
//       {cart.length === 0 ? (
//         <p>No items in cart</p>
//       ) : (
//         cart.map((item) => (
//           <div key={item.id} className='card'>
//             <img src={item.thumbnail} alt={item.title} className="w-32 h-32 object-cover" />
//             <h2>{item.title}</h2>
//             <p>Price: ${item.price}</p>
//             <button className='remove-from-cart' onClick={()=>removeFromCart(item.id)}>Remove from Cart</button>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }

import React from "react";
import { ProductContext } from '../Context/ProductContext';

export default function Cart() {
  const { cart, removeFromCart } = React.useContext(ProductContext);
  
  return (
    <div className="Card">
      <h1 className="Container">My Cart</h1>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className='card1' style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
            <h2 className='Price1'>{item.title}</h2>
            <img src={item.thumbnail} alt={item.title} className="cardimage" />
            <p className='Price1'>Price: ${item.price}</p>
            <button className='removefrom' onClick={()=>removeFromCart(item.id)}>Remove from Cart</button>
          </div>
        ))
      )}
    </div>
  );
}