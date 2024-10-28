"use client"
import Item from "./item";
import ItemList from "./item-list";
import NewItem from "./new-item";
import ItemData from "./items";
import { useState } from "react";
import Meal_Ideas from "./meal-ideas";

export default function Page(){

    let itemArray = ItemData.map((item) => ({...item}) );
    const [itemList , setItemList] = useState(itemArray);
    const AddItem = (item) => {
        setItemList([...itemList,item])
    }
    const [selectedItemName, setSelectedItemName] = useState();
    const HandleItemSelect = (item) =>{
        const name = item.name.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '').split(",")[0].trim();
        setSelectedItemName(name);

    }

    return(
        //make sure to put in some styling
        <main className="flex justify-center items-center content-center flex-row  bg-violet-500 ">
            <div className="flex flex-col p-6 rounded m-5">
                <div className="flex justify-center items-center" >
                <NewItem addNewItemFunc={AddItem} />
                </div>
                <div className="flex flex-row justify-between items-start gap-6">
                <ItemList itemArray={itemList} onItemSelect={HandleItemSelect} />
                <Meal_Ideas ingredient={selectedItemName} />
                </div>
            </div>

        </main>
    )
}