import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Head from './component/Home'
import Home from './component/Header'
import Footer from './component/Footer'
import List from './component/List'
import DataFetching from './component/DataFetching'
import SignUp from './component/SignUp'
import ProductProvider from './Context/ProductContext'
import ProductCard from './component/ProductCard'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './component/Header'
import Contact from './component/Contact'
import Login from './component/Login'

export default App;

function App() {
 
return (
    <BrowserRouter>
     <Header/>
    <ProductProvider>
    <Routes>
       
      <Route path="/SignUp" element={<SignUp/>}/>
      <Route path="/" element={<ProductCard/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="Login" element={<Login/>}/>
                             
      </Routes>

     
    {/* <List/> */}
    {/* <DataFetching/> */}
    </ProductProvider>
    <Footer/>
     </BrowserRouter>
  
  )
}



