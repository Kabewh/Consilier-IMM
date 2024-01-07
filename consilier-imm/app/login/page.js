'use client'
import { useState, useEffect } from "react"
import { pb } from "../(auth)/auth"
import { login } from "../(auth)/utils"
import { useAuthStore } from "../(auth)/authStore"
import { useRouter } from "next/navigation"

export default function LoginPage() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const router = useRouter();
    const loginStore = useAuthStore((state) => state.login);
    const loggedIn = useAuthStore((state) => state.loggedIn);

    useEffect(() => {
        if (loggedIn) router.push('/secret')
    }, [loggedIn])

    function handleSubmit(e) {
        e.preventDefault()
        login(username, password, loginStore)
    }

    return (
        <>
            <section className="flex flex-col h-2/3">
                <div className="m-auto bg-slate-200/75 rounded-lg w-80 h-64 flex shadow-lg flex flex-col justify-center items-center">
                    <h1 className="mb-5">CONSILIER IMM</h1>
                    <form onSubmit={handleSubmit} className="flex flex-col justify-center">
                        <label>USERNAME</label>
                        <input
                            type="text"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <label>PASSWORD</label>
                        <input
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button>LOGIN</button>
                    </form>
                </div>
            </section>
        </>
    )
}