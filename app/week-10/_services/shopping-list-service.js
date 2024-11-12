import React from 'react'
import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query, doc } from "firebase/firestore";



    export async function getItems(userID){
        try{
            const docRef = collection(db, "Users", userID,"items")
            const docSnap = await getDocs(docRef)
            const items = [];
            
            if (docSnap.empty){
                console.log("doesnt exist")
                

            }else{

                docSnap.forEach((doc) =>{
                    console.dir(doc.id)
                    items.push({
                        id:doc.id,
                        ...doc.data()
                    })
                })
                return items;
            }
        }catch (error){
            console.log(error);

        }


    }

    export async function addItems(userID, Item){
        const docRef = collection(db, "Users", userID,"items")
        const docsnap= await addDoc(docRef, {
            name: Item.name,
            quantity: Item.quantity,
            category: Item.category
        })
        return docsnap.id


    }

