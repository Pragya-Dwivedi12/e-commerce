// import React ,{useContext} from 'react';
// import { ProductContext } from '../context/ProductContext';

// export default function ProductCard() {
//     const {products} = useContext(ProductContext);
//     return (
//         <div>
//          {products.map((product) => (
//          <div key={product.id} style={{border:"1px solid black" ,margin:"10px" ,padding:"10px"}}>

//          <h2>{product.title}</h2>
//          <p>{product.description}</p>
//          <p>Price : {product.price}</p>
//          <p>Rating : {product.rating}</p>
//          <img src={product.thumbnail} alt={product.title} />
//          </div>
//          ))}   
//      </div>
//  )

// }

import React ,{useContext} from 'react';
import { ProductContext } from '../Context/ProductContext';
import { Link } from "react-router-dom";
import '../App.css'

export default function ProductCard() {
    const {products}= useContext(ProductContext);
  return (
    <div className="card">
      {products?.map((product) => (
        <div className="card1" key={product.id} style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
          <p className='product'>{product.title}</p>
          {/* <p>{product.description}</p> */}
          {/* <p className='Price'>Price : {product.price}</p>
          <p className='Price'>Rating : {product.rating}</p> */}

          <img src={product.thumbnail} className='cardimage' alt={product.title} />

           <p className='Price'>Price : {product.price}</p>
          <p className='Price'>Rating : {product.rating}</p>
        </div>
      ))}
    </div>
  )
}