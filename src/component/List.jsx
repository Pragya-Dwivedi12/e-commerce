import React,{useState} from "react"

export default function List(){
    const items = ["apple", "banana", "mango", "carrot"];
    return(
        <div>List of fruits

        <div>
       {items.map((items)=>(
          <ul>
            <li>{items}</li>
          </ul>
       ))}
        </div>
        </div>
        
    )
}
