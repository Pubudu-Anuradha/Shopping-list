import {React,useState} from "react";
import "./Cart.css"
import CartItem from "./CartItem";

export default function Cart({items}){

    //state updates a copy of the items array called its
    const [its,setits] =useState(items)

    //a function variable to update the quantity in its by id
    const updQty = (id,newqty) =>{
        const newItems=its.map((item)=>{
            if(item.id==id){
                return {...item, qty:newqty};
            }
            return item;
            }
        )
        setits(newItems);
    }

    //adding the total dollar amount of the goods to variable total
    const total=its.reduce((total,item)=>{
        return(total + item.qty*item.price)
    },0).toFixed(2);
    
    return(
        <div className="Cart">
            <h1>Shopping Cart</h1>
			<hr/>
            <div>
            {its.map((item)=>{
                return(
                    <CartItem key={item.id} {...item} updQty={updQty}/>
                )
                })}
            </div>
            <h2 className="Total">Grand Total : ${total}</h2>
        </div>
    )
}