import React from "react";
import { Link } from "react-router-dom";
import '../App.css'
export default function Home() {
   return (

      <div className="con"><h2>
         <ul className="con1">
            <Link to="/Facebook">Facebook</Link>
            <Link to="/Instagram">Instagram</Link>
            <Link to="/WhatsApp">WhatsApp</Link>
            <Link to="/Twitter">Twitter</Link>

         </ul>
      </h2>
      </div>



   )
}