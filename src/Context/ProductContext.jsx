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

    useEffect( () =>{
        fetchData();
    },[])
    return(
        <ProductContext.Provider value={{products}}>
             {children}
            </ProductContext.Provider>
    )
}