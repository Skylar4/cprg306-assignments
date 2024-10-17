"use client"
import { useState } from "react"

export default function NewItem({addNewItemFunc}){

    const [quantity, setQuantity] = useState(1);
    const [name, setName] = useState("");
    const [category, setCategory] = useState("produce");





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
    const handleSubmit = (event)=> {

        event.preventDefault();
        const item = {
            name: name,
            quantity: quantity,
            category: category
          };
          addNewItemFunc(item);
          setName("");
          setQuantity("");
          setCategory("");

    }

    const handlenamechange =(event) =>{
        setName(event.target.value);

    }
    const handlecategorychange =(event) =>{
        setCategory(event.target.value);
    }



    let plusbutton = "p-3  bg-green-600 m-2 rounded w-20";
    let minusbutton = "p-3 bg-red-600 m-2 rounded w-20";  
    if (quantity == 20){
        plusbutton = "p-3 ml-10 bg-slate-500 m-2 rounded w-20"
    }  
    if (quantity == 1){
        minusbutton = "p-3 bg-slate-500 m-2 rounded w-20"
    }
    return(
        <main className=" bg-blue-950 w-72 h-auto flex-col rounded-xl border-violet-300 border-2 ">
            <form onSubmit = {handleSubmit} className="flex flex-col w-full items-center">
                <input 
                type= "text" 
                onChange={handlenamechange} 
                value={name} 
                placeholder = "Enter Item name" 
                style={{color: 'black'}}
                className="p-3 w-64 text-center mt-4 rounded-xl"
                required ></input>

                <select 
                style={{color: 'black'}} 
                value ={category}
                className = "p-3 mt-4 mb-4 rounded-xl w-64" 
                onChange={handlecategorychange}>
                    <option>Produce</option>
                    <option>Dairy</option>
                    <option>Bakery</option>
                    <option>Meat</option>
                    <option>Frozen Food</option>
                    <option>Canned Goods</option>
                    <option>Beverages</option>
                    <option>Snacks</option>
                    <option>Household</option>
                    <option>Other</option>

                </select>


            
            <div className=" flex flex-row items-center justify-center  bg-blue-950 w-full ">

            <button onClick={incrementQuantity} className={plusbutton} type= "button" >+</button>
            <button onClick={decrementQuantity} className={minusbutton} type="button">-</button>
            <p className="text-4xl ml-2">{quantity}</p>
            </div>
            <button className="w-full h-10 rounded-xl hover:bg-green-400" type="submit" value="submit" >
                Add
            </button>
            </form>

        </main>
    )
}