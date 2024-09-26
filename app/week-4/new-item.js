"use client"
import { useState } from "react"

export default function NewItem(){

    const [quantity, setQuantity] = useState(1);
    const incrementQuantity = () =>{
        let currentquantity = quantity;
        if (currentquantity < 20){
        return setQuantity(currentquantity + 1);
        }
    }
    const decrementQuantity = () =>{
        let currentquantity = quantity;
        if (currentquantity > 1){
        return setQuantity(currentquantity - 1);
        }
    }
    let plusbutton = "p-3 ml-10 bg-green-600 m-2 rounded w-20";
    let minusbutton = "p-3 bg-red-600 m-2 rounded w-20";  
    if (quantity == 20){
        plusbutton = "p-3 ml-10 bg-slate-500 m-2 rounded w-20"
    }  
    if (quantity == 1){
        minusbutton = "p-3 bg-slate-500 m-2 rounded w-20"
    }
    return(
        <main className="bg-stone-500 w-72 items-center justify-center flex rounded ">
            <p className="text-2xl">{quantity}</p>
            <button onClick={incrementQuantity} className={plusbutton} >+</button>
            <button onClick={decrementQuantity} className={minusbutton}>-</button>


        </main>
    )
}