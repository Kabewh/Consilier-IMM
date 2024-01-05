'use client'
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [classNames, setClassNames] = useState("hidden")
    const session = true
    
    useEffect(() => {
        if (session) setClassNames("inline-block")
        if (!session) setClassNames("hidden") 
    },[session])
     

    return (
        <>
            <nav className="p-5 bg-orange-500">
                <ul className="flex justify-end gap-10 max-w-screen-xl mx-auto">
                    <Link href="/" className="cursor-pointer">Acasa</Link>
                    <Link href="/despre-noi" className="">Despre Noi</Link>
                    <Link href="/servicii" className="">Servicii</Link>
                    <Link href="/secret" className={classNames}>Secret</Link>
                    <Link href="/contact" className="">Contact</Link>
                </ul>
            </nav>
        </>
    )
}