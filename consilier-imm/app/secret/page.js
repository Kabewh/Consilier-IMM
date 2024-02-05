'use client'
import Navbar from "../components/Navbar";
import { AiOutlineCloseCircle } from 'react-icons/ai';
import AdminView from "./AdminView";
import UserView from "./UserView";
import { pb } from "../(auth)/auth";
import { useEffect, useState } from "react";
import Topbar from "../components/Topbar";
import Image from "next/image";
import Link from "next/link";

export default function Secret() {
    const [userRole, setUserRole] = useState("user")
    const isLoggedIn = pb.authStore.isValid;
    pb.autoCancellation(false);

    const getUser = async () => {
        const user = await pb.collection("users").getFirstListItem(`username="${pb.authStore.model.username}"`)
        setUserRole(user.Role)
    }
    
    useEffect(() => {
        getUser()
    })

    return (
        <div>
         {!isLoggedIn ? (
            <>
                <div className="fixed grid place-items-center backdrop-blur-sm top-0 right-0 left-0 z-50 w-full inset-0 h-modal h-full justify-center items-center">
                <div className="relative container mx-auto px-6">
                    <div className="m-auto">
                    <div className="rounded-xl bg-orange-800/95 shadow-2xl border border-orange-800 min-w-[400px]">
                        <div className="p-8">
                        <div className="absolute top-4 right-10">
                            <Link href={"/"}>
                                <AiOutlineCloseCircle className="text-white cursor-pointer text-2xl transition duration-300 hover:text-orange-400"
                                />
                            </Link>
                        </div>
            
                        <div className="space-y-4">
                            <Image src={"/logo.png"} width={50} height={50} />
                            <h2 className="mb-8 text-2xl text-cyan-900 dark:text-white font-bold">
                            Logheaza-te pentru acces
                            <br />
                            la <span className="font-bold">articole</span>
                            </h2>
                        </div>
                        <div className="mt-10 grid space-y-4">
                            <button
                            className="group h-12 px-6 border-2 border-white rounded-xl bg-white transition duration-300 hover:border-orange-400 focus:bg-blue-50 active:bg-blue-100"
                            >
                            <div className="relative flex items-center space-x-4 justify-center">
                                <Link href={'/login'} className="block w-max font-semibold tracking-wide text-zinc-900 text-sm transition duration-300 group-hover:text-orange-600">
                                Conecteaza-te la contul tau!
                                </Link>
                            </div>
                            </button>
                        </div>
                        <div className="mt-8 py-3 w-full text-white text-center">
                            <p className="text-md">
                            Nu ai cont?{' '}
                            <Link href={'/contact'} className="underline transition duration-300 hover:text-orange-400">
                                Contacteaza-ne
                            </Link>{' '}
                            pentru a primi acces!
                            </p>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
                </div>
            </>          
            ) : (
                null
            )}
                <div>
            <Navbar />
                <div className="max-w-screen-xl mx-auto">
                    {isLoggedIn && userRole === "admin" ? <AdminView /> : <UserView session={isLoggedIn} />}
                </div>
            </div>
        </div>
    )
}