import React from "react"
import "./Cartitem.css"

export default function CartItem({id,name,price,qty,updQty}){
    
    //function to increment qty using the updQty function passed from the parent
    const addOne=()=>{
        updQty(id,qty+1)
    }
    
    //function to decrement qty using the updQty function passed from the parent
    const subOne=()=>{
            updQty(id,qty-1)
    }

    return(
        <div className="Cart-item">
            Name : {name}<br/>
            Price : ${price}<br/>
            <button onClick={subOne} disabled={qty<=0}>-1</button>
            Quantity : {qty}
            <button onClick={addOne}>+1</button><br/>
            Total : ${price*qty}
        </div>
    )
}