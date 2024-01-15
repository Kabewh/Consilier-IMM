'use client'
import { useState } from "react"
import Navbar from "../components/Navbar"
import { useRouter } from "next/navigation"
import { pb } from "../(auth)/auth"

export default function LoginPage() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const router = useRouter();

    async function login(username, password) {
        try {
            const authData = await pb
                .collection("users")
                .authWithPassword(username, password);
            router.push("/secret")
        } catch (error) {
            console.log("Error:", error);
        }
    }

    function handleSubmit(e) {
        e.preventDefault()
        login(username, password)
    }

    return (
        <>
            <Navbar />
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