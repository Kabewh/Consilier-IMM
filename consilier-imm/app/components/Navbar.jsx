"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { pb } from "../(auth)/auth";
import { Kadwa } from "next/font/google";
import Image from "next/image";
import Dropdown from "./Dropdown";

const kadwa = Kadwa({ weight: "400", subsets: ["devanagari"] });

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [role, setRole] = useState(null);
  pb.autoCancellation(false);

  const router = useRouter();

  useEffect(() => {
    setIsLoggedIn(pb.authStore.isValid);
    if(pb.authStore.model) setRole(pb.authStore.model.Role);    
  });

  const handleLogin = () => {
    router.push("/login");
  };

  const handleLogout = () => {
    pb.authStore.clear();
    router.push("/");
  };

  return (
    <>
      <nav
        className={`p-3 text-lg text-white bg-orange-800 ${kadwa.className} shadow-md shadow-black/50`}
      >
          <ul className="flex items-center gap-5 max-w-screen-2xl mx-auto">
            <Link href="/" className="cursor-pointer"><Image src={"/logo.png"} alt={"Logo"} width={50} height={50}/></Link>
            <Link href="/despre-noi" className="">
              DESPRE NOI
            </Link>
            <Link href="/servicii" className="">
              SERVICII
            </Link>
            <Link href="/secret" className="">
              ARTICOLE
            </Link>
            <Link href="/contact" className="">
              CONTACT
            </Link>
            <div className="flex flex-grow justify-end gap-6">
            {
              role === 'admin' ? <Dropdown/> : null
            }
            {isLoggedIn ? (
              <div className="cursor-pointer" onClick={() => handleLogout()}>LOGOUT</div>
            ) : (
              <div className="cursor-pointer" onClick={() => handleLogin()}>LOGIN</div>
            )}
            </div>
            
          </ul>
      </nav>
    </>
  );
}
