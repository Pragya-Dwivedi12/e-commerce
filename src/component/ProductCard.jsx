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

// import React ,{useContext} from 'react';
// import { ProductContext } from '../Context/ProductContext';
// import { Link } from "react-router-dom";
// import '../App.css'
// import { useState } from 'react';

// export default function ProductCard() {
//     const {products,addToCart,filteredProducts}= useContext(ProductContext);

//   const [currentPage, setCurrentPage] = useState(0);
//   const itemsPerPage = 2;
//   const totalProducts = filteredProducts.length;
                      
//   const startIndex = currentPage * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;

//   const handleNext = () => {
//     if (endIndex < totalProducts) {
//       setCurrentPage((prev) => prev + 1);
//     }
//   };

//   const handlePrev = () => {
//     if (currentPage > 0) {
//       setCurrentPage((prev) => prev - 1);
//     }
//   };

//   return (
//     <>
// {/*     
//     <button className='left-button'
//         onClick={handlePrev}
//         disabled={currentPage === 0}
//       >
//         ⬅️
//       </button> */}

//     <div className="card">

//     {filteredProducts.slice(startIndex, endIndex).map((product) => (
//         <div className="card1" key={product.id} style={{ border: "1px solid black", margin: "10px", padding: "10px", width:"" }}>
//           <p className='product'>{product.title}</p>

//           <img src={product.thumbnail} className='cardimage' alt={product.title} />

//           <p className='Price'>Price : {product.price}</p>
//           <p className='Price'>Rating : {product.rating}</p>

//           <div className='Addd'>
//           <button className='Add' onClick={()=>addToCart(product)} >Add To Card</button>
//         </div>

       
//         </div>
//       ))}
//        {/* <button
//         className='right-button'
//         onClick={handleNext}
//         disabled={endIndex >= totalProducts}
//       >
//         ➡️
//       </button> */}

//     </div>
    
//     </>
//   )
// }



import React, { useContext, useState, useEffect } from 'react';
import { ProductContext } from '../Context/ProductContext';
import { Link } from "react-router-dom";
import '../App.css';

export default function ProductCard() {
  const { filteredProducts, addToCart } = useContext(ProductContext);

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;

  const totalProducts = filteredProducts.length;
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const handleNext = () => {
    if (endIndex < totalProducts) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(prev => prev - 1);
    }
  };

  // Reset to page 0 when filteredProducts changes
  useEffect(() => {
    setCurrentPage(0);
  }, [filteredProducts]);

  return (
    <div className="product-container">

      {/* LEFT BUTTON */}
      <button
        className="nav-button left-button"
        onClick={handlePrev}
        disabled={currentPage === 0}
      >
        ⬅️
      </button>

      {/* PRODUCT CARDS */}
      <div className="card">
        {filteredProducts.slice(startIndex, endIndex).map((product) => (
          <div className="card1" key={product.id}>
            <p className="product">{product.title}</p>

            <img src={product.thumbnail} className="cardimage" alt={product.title} />

            <p className="Price">Price : {product.price}</p>
            <p className="Price">Rating : {product.rating}</p>

            <div className="Addd">
              <button className="Add" onClick={() => addToCart(product)}>
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* RIGHT BUTTON */}
      <button
        className="nav-button right-button"
        onClick={handleNext}
        disabled={endIndex >= totalProducts}
      >
        ➡️
      </button>
    </div>
  );
}
