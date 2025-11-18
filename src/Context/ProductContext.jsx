import React,{createContext, useEffect, useState} from "react";

export const ProductContext = createContext();

// export default function ProductProvider({children}) {
//     return(
//         <ProductContext.Provider>
//             {children}
//             </ProductContext.Provider>
//     )
// }

export default function ProductProvider({children}) {
    const[products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [count, setCount] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');

    async function fetchData(){
        try{
            const response = await fetch("https://dummyjson.com/products");
            const data = await response.json();
            const product = data.products;
            setProducts(product);
            console.log(data);
        }
        catch(error){
            console.log("error",error);
        }
    }

const addToCart = (product) => {
  setCart((prevCart) => {
    const existing = prevCart.find((item) => item.id === product.id);
    if (existing) {
      return prevCart;
      // .map((item) =>
      //   item.id === product.id
      //     ? { ...item }
      //     : item
      // );
    } else {
      return [...prevCart, { ...product}];
    }
  });
  setCount(cart.length + 1);
  console.log(`Added to cart: ${product.title}`);
};

const removeFromCart = (productId) => {
  setCart((prevCart) =>
    prevCart.filter((item) => item.id !== productId)
  );
}
const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

useEffect( () =>{
        fetchData();
    },[])
    const totalCount = cart.reduce((sum) => sum + 1, 0);
    return(
        <ProductContext.Provider value={{products,addToCart,removeFromCart,cart, totalCount,filteredProducts,searchTerm, setSearchTerm}}>
             {children}
            </ProductContext.Provider>
    )
}