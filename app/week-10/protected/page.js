
import React from 'react'
import { useUserAuth } from '../_utils/auth-context'
import Link from 'next/link';

export default function ProtectedPage() {

    const {user} = useUserAuth();

  return (
    <main>
        <h1>Protected Page</h1>

    {
        user ? (

            <div>
                <p>hello {user.email} your user id is {user.uid}</p>
            </div>

        ) : (

            <div><h1>You must be logged in to view this page</h1>
            <Link href='/week-9/'>click here to return to the sign in page</Link>
            </div>
        )
    }
        </main>
  )
}