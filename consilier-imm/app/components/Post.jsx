import Image from "next/image";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import { useState, useEffect } from "react";
import { pb } from "../(auth)/auth";

const playfair = Playfair_Display({ weight: '400' , subsets: ['cyrillic']})

export default function Post({photo, title, description, id, date, deleteArticle}) {
    const [role, setRole] = useState("user");
    
    useEffect(() => {
        if (pb.authStore.model) setRole(pb.authStore.model.Role)
        console.log(id)
    });

    return (
        <div className={`h-[580px] w-[384px] w-48 bg-white hover:shadow-xl shadow-md transition ease-in-out duration-300 rounded ${playfair.className}`}>
            <div className="min-h-[260px]">
                <Image src={photo} width={394} height={260} className=""/>
            </div>
            <div className="px-8 pt-8 flex flex-col">
                <div className="flex flex-col space-y-5 h-[208px]">
                    <h1 className="text-2xl break-words hover:text-orange-800 cursor-pointer"> <Link key={id} href={"/secret/[id]"} as={`/secret/${id}`} className="hover:text-orange-800">{title}</Link></h1>
                    <p className="text-sm text-slate-500">{description}</p>
                    <Link key={id} href={"/secret/[id]"} as={`/secret/${id}`} className="hover:text-orange-800">CITESTE MAI MULT</Link>
                </div>
                <div className="mt-5 flex items-start justify-start space-x-28 text-slate-500 text-sm border-t">
                    <p className="py-5">{"Daniele Viola"} - {date}</p>
                    {role === 'admin' ? <button className="px-2 bg-red-500 rounded my-5" onClick={() => deleteArticle(id)}>X</button> : null}
                </div>
            </div>
        </div>
    )
}