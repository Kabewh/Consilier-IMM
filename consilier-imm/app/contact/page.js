'use client'
import { AiFillFacebook } from "react-icons/ai";
import Navbar from "../components/Navbar"
import { useState } from "react"
import Topbar from "../components/Topbar"
import Link from "next/link";
import { Kadwa } from "next/font/google";

const kadwa = Kadwa({ weight: '400', subsets: ['devanagari'] })

export default function Contact() {
    const [data, setData] = useState({
        lastName: "",
        firstName: "",
        email: "",
        phoneNumber: "",
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })

        if (response.status === 200) {
            setData({})
            alert("Email sent successfully")
        }
    }

    return (
        <>
            <section className={`h-screen ${kadwa.className}`}>
                <Navbar/>
                <div className="flex flex-col justify-center items-center h-[80vh]">
                    <div className="grid grid-cols-2 space-10 h-[70vh] border max-w-screen-xl shadow-lg bg-white rounded-lg">
                        <div className="flex justify-center items-center ml-24">
                            <div className="flex flex-col h-2/4">
                                <h1 className="text-5xl font-bold text-zinc-800">CONTACTEAZA-NE</h1>
                                <p className="text-zinc-500 mt-2 break-words">Pentru un cont de utilizator sau pentru orice nelamurire sau sugestie si revenim in cel mai scurt timp cu un raspuns.</p>
                                <div className="mt-20 flex flex-col justify-start items-start">           
                                    <h2 className="font-bold text-zinc-800 text-2xl">Social Media</h2>
                                    <Link href={"https://www.facebook.com/"}><AiFillFacebook className="hover:text-blue-500 text-5xl"/></Link>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center items-center ml-24">
                            <form className="flex flex-col w-[500px] h-2/4 mr-20 space-y-4" onSubmit={handleSubmit}>
                                <input
                                    className="rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
                                    placeholder="Nume"
                                    type="text"
                                    value={data.lastName}
                                    onChange={(e) => setData(prevData => ({
                                        ...prevData,
                                        lastName: e.target.value
                                    }))}
                                />
                                <input
                                    className="rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
                                    placeholder="Prenume"
                                    type="text"
                                    value={data.firstName}
                                    onChange={(e) => setData(prevData => ({
                                        ...prevData,
                                        firstName: e.target.value
                                    }))}
                                />
                                <input
                                    className="rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
                                    placeholder="Email"
                                    type="text"
                                    value={data.email}
                                    onChange={(e) => setData(prevData => ({
                                        ...prevData,
                                        email: e.target.value
                                    }))}
                                />
                                <input
                                    className="rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
                                    placeholder="Numar de telefon"
                                    type="text"
                                    value={data.phoneNumber}
                                    onChange={(e) => setData(prevData => ({
                                        ...prevData,
                                        phoneNumber: e.target.value
                                    }))}
                                />
                                <button className="text-white text-bold text-lg p-2 bg-orange-800 shadow-lg rounded-md hover:bg-orange-900 transition mb-10 mt-5">TRIMITE</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}