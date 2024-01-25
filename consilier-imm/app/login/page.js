'use client'
import { useState } from "react"
import { Kadwa } from "next/font/google"
import Navbar from "../components/Navbar"
import { useRouter } from "next/navigation"
import { pb } from "../(auth)/auth"
import Link from "next/link"
import Topbar from "../components/Topbar"

const kadwa = Kadwa({ weight: '400', subsets: ['devanagari'] })

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
        <Topbar/>
        <div className={`h-screen ${kadwa.className}`}>
            <Navbar />
            <section className="max-w-screen-xl h-[80vh] mx-auto flex justify-center items-center">
                <div className="h-[70vh] flex flex-col items-center justify-center border shadow-lg">
                    <h1 className="mb-10 font-bold text-3xl">Conecteaza-te la contul tau!</h1>
                    <form onSubmit={handleSubmit} className="flex flex-col w-[500px] h-2/4 space-y-4 mx-10 justify-center">
                        <label>Nume de utilizator</label>
                        <input
                            type="text"
                            onChange={(e) => setUsername(e.target.value)}
                            className="rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
                        />
                        <label>Parola</label>
                        <input
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            className="rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
                        />
                        <button className="text-white text-bold text-lg p-2 bg-orange-800 shadow-lg rounded-md hover:bg-orange-900 transition mb-10 mt-5">CONECTARE</button>
                        <div className="flex items-center justify-center">
                            <p>Nu ai cont? <Link href={"/contact"} className="font-bold hover:text-blue-800">Contacteaza-ne</Link> pentru a primi unul!</p>
                        </div>
                    </form>
                </div>
            </section>
        </div>
        </>
    )
}