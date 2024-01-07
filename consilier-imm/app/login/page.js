'use client'
import { useState } from "react"
import { useRouter } from "next/navigation"
import { pb } from "../components/auth"

export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const router = useRouter();

    async function auth() {
        try {
            const authData = await pb.collection('users').authWithPassword(username, password);
        } catch (error) {
            console.log('Error:', error);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        auth()
        if (pb.authStore.isValid) {
            router.push('/secret')
        }
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