'use client'

import { useState } from "react"
import { POST } from "../api/send/route"

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
            <section>
                <form className="flex flex-col w-1/3 m-auto" onSubmit={handleSubmit}>
                    <label>Nume</label>
                    <input
                        className="p-1.5 mt-1 border border-black"
                        type="text"
                        value={data.lastName}
                        onChange={(e) => setData(prevData => ({
                            ...prevData,
                            lastName: e.target.value
                        }))}
                    />
                    <label>Prenume</label>
                    <input
                        className="p-1.5 mt-1 border border-black"
                        type="text"
                        value={data.firstName}
                        onChange={(e) => setData(prevData => ({
                            ...prevData,
                            firstName: e.target.value
                        }))}
                    />
                    <label>Email</label>
                    <input
                        className="p-1.5 mt-1 border border-black"
                        type="text"
                        value={data.email}
                        onChange={(e) => setData(prevData => ({
                            ...prevData,
                            email: e.target.value
                        }))}
                    />
                    <label>Numar de telefon</label>
                    <input
                        className="p-1.5 mt-1 border border-black"
                        type="text"
                        value={data.phoneNumber}
                        onChange={(e) => setData(prevData => ({
                            ...prevData,
                            phoneNumber: e.target.value
                        }))}
                    />
                    <button className="bg-orange-300 w-1/3 self-center mt-2 p-2 rounded">Trimite</button>
                </form>
            </section>
        </>
    )
}