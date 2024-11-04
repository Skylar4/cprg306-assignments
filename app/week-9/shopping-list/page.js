"use client"
import Item from "./item";
import ItemList from "./item-list";
import NewItem from "./new-item";
import ItemData from "./items";
import { useState } from "react";
import Meal_Ideas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";
import Link from "next/link";

export default function Page(){

    const {user, firebaseSignOut} = useUserAuth();

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
    async function handleSignOut (){
        try{
            await firebaseSignOut();
        }
        catch (error){
            console.log(error);
        }
   }
    return(

        
        <main className="flex justify-center items-center content-center flex-row bg-violet-500 h-full">
            { user ? (
            <div className="flex flex-col rounded w-full">
                <div className=" flex justify-end p-4">
                <button
                type='button'
                className='text-2xl bg-blue-700 text-white rounded p-2 mb-3 '
                onClick={handleSignOut}>
                Sign Out
                </button>
                </div>
                <div className="flex justify-center items-center" >
                <NewItem addNewItemFunc={AddItem} />
                </div>
                <div className="flex flex-row justify-center items-start gap-6">
                <ItemList itemArray={itemList} onItemSelect={HandleItemSelect} />
                <Meal_Ideas ingredient={selectedItemName} />
                </div>
            </div>
            )
            :
            (
                <div className="h-screen flex justify-center items-center flex-row">
                    <h1>You Must Sign In To View This Page     --------   </h1>
                    <div className="justify-center items-center">
                    <Link href='../week-9/' className='p-5 text-2xl bg-blue-700 rounded border-2 border-white '>Home Page</Link>
                    </div>
                </div>
            )
            }           

        </main>
    )
}