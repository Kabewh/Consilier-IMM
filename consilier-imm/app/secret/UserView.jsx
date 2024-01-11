import React from 'react'
import { useState, useEffect } from 'react'
import { useAuthStore } from '../(auth)/authStore'
import { useRouter } from "next/navigation"




const UserView = () => {
    const [classNames, setClassNames] = useState("absolute bg-slate-200/75 inset-0 flex p-10")
    
    const session = useAuthStore((state) => state.loggedIn)
    const router = useRouter()
    
    useEffect(() => {
        if (session) setClassNames("hidden")
        if (!session) setClassNames("absolute bg-slate-200/75 inset-0 flex p-10")
}, [session])
  return (
    <section className="flex flex-col max-w-1/2 h-2/3">
                <div className="flex-wrap h-96">
                    <h1>blabla</h1>
                    <p>blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablab</p>
                </div>
                <div className={classNames}>
                    <div className="m-auto bg-white rounded-lg w-80 h-64 flex shadow-lg">
                        <p className="m-auto flex flex-col">
                            <button onClick={() => router.push('/')}>X</button>
                            <button onClick={() => router.push('/login')}>Login</button>
                            <button onClick={() => router.push('/contact')}>Nu ai cont? Contactaza-ne!</button>
                        </p>
                    </div>
                </div>
    </section> 
  )
}

export default UserView