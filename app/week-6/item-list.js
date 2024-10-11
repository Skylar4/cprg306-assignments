"use client"
import { useState } from "react";
import Item from "./item";
import items from "./items";

export default function ItemList(){
const [sortby, setsortby] = useState("Name");
if (sortby === "Name"){
  items.sort((a,b) =>{
  const nameA = a.name;
  const nameB = b.name;
  if (nameA > nameB){
    return 1;
  }
  if (nameA < nameB){
    return -1;
  }
  return 0;
}
);
}
if (sortby ==="category"){
    items.sort((a,b) =>{
    const categoryA = a.category;
    const categoryB = b.category;
    if (categoryA > categoryB){
      return 1;
    }
    if (categoryA < categoryB){
      return -1;
    }
    return 0;
  }
  );

}

let namebutton = "p-2 bg-blue-950 border-orange-50 border-2 w-32";
let categorybutton = "p-2 bg-blue-950 border-orange-50 border-2 w-32";
if (sortby === "Name"){
  namebutton = "p-2 bg-gray border-orange-50 border-2 w-32"
}
if (sortby === "category"){
  categorybutton = "p-2 bg-gray border-orange-50 border-2 w-32"
}
const setSortToCat = () => {
  return setsortby("category");
}
const setSortToName = () => {
  return setsortby("Name");
}
    
    return(
        <main className = " flex justify-center items-center text-center">
          <div>
            <ul>
              {items.map((Items) => (
                <li key = {Items.id}>
                  <Item aitem = {Items}/> 
                </li>
              ))}

            </ul>
            <div >
            <h2>sort by:</h2>
            <button onClick = {setSortToName} className = {namebutton}>
              Name

            </button>
            <button onClick = {setSortToCat} className = {categorybutton}>
              Category

            </button>
            </div>

        </div>
        </main>
    );
}