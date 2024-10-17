"use client"
import Item from "./item";
import ItemList from "./item-list";
import NewItem from "./new-item";
import ItemData from "./items";
import { useState } from "react";

export default function Page(){

    let itemArray = ItemData.map((item) => ({...item}) );
    const [itemList , setItemList] = useState(itemArray);
    const AddItem = (item) => {
        setItemList([...itemList,item])
    }
    return(
        //make sure to put in some styling
        <main className="flex justify-center items-center content-center ">
            <div className="p-6 rounded bg-violet-500  w-1/3 m-5">
                <div className="flex justify-center items-center" >
                <NewItem addNewItemFunc={AddItem} />
                </div>
                <div className="mt-4">
                <ItemList itemArray={itemList} />
                </div>
            </div>
        </main>
    )
}