// import React, { useEffect , useState} from 'react';

// export default function DataFetching() {
//     const [products, setProducts] = useState([]);

//     async function fetchData() {
//         try{
//             const response = await fetch("https://dummyjson.com/products");
//             const data = await response.json();
//             const productsData = data.products;
//             setProducts(productsData);
//             console.log(data);
//         }
//       catch(error){
//         console.log("error",error);
//       }  
//     }
// }
// useEffect( () => {
//      fetchData();
// },[]);

// return(
//     <div>
//         {products.map((product) => (
//         <div 
//         key={product.id}
//          style={{border:"1px solid black" ,margin:"10px" ,padding:"10px"}}>

//         <h2>{product.title}</h2>
//         <p>{product.description}</p>
//         <p>Price : {product.price}</p>
//         <p>Rating : {product.rating}</p>
//         <img src={product.thumbnail} alt={product.title} />
//         </div>
//         ))}   
//     </div>
// );


import React, { useEffect, useState } from 'react';

export default function DataFetching() {
  const [products, setProducts] = useState([]);

  async function fetchData() {
    try {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      const productsData = data.products;
      setProducts(productsData);
    } catch (error) {
      console.log('error', error);
    }
  }

  useEffect(() => {
    fetchData(); 
  }, []);

  return (
    <div>
      {products.map((product) => (
        <div
          key={product.id}
          style={{ border: '1px solid black', margin: '10px', padding: '10px' }}
        >
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>Price : {product.price}</p>
          <p>Rating : {product.rating}</p>
          <img src={product.thumbnail} alt={product.title} />
        </div>
      ))}
    </div>
  );
}
