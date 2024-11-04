"use client"
import React from 'react'
import { useUserAuth } from './_utils/auth-context'
import Link from "next/link";



export default function SignInPage() {

    const {user, gitHubSignIn, firebaseSignOut} = useUserAuth();

    async function handleSignIn (){
            try
            {
                await gitHubSignIn();
            }catch(error){
                console.log(error);
            }
       }
       async function handleSignOut (){
        try{
            await firebaseSignOut();
        }
        catch(error){
            console.log(error);
        }
   }

   console.dir(user);

  return (
    <main className='h-full'>
        <header className='flex w-full  p-4'>
        <h1 className='text-3xl  flex-1'>App Home Page</h1>
            <button
                type='button'
                className='text-2xl bg-blue-700 text-white rounded p-2'
                onClick={handleSignOut}>
                Sign Out
            </button>
        </header>
        {user ? (

            <div className='items-center flex h-full justify-center'>


                <Link href='week-9/shopping-list/' className='p-5 text-2xl bg-blue-700 rounded m-4'>shopping list</Link>

            </div>

        ) : (

            <div>
                <button
                type='button'
                className='text-2xl bg-blue-700 rounded m-4 p-5'
                onClick={handleSignIn}>
                Sign In
                </button>

            </div>

        ) }

    </main>
  )
}
