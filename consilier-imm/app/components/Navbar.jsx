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
        className={`p-3 text-md text-white bg-orange-800 ${kadwa.className} shadow-md shadow-black/50`}
      >
          <ul className="flex items-center gap-5 max-w-screen-2xl mx-auto transition-all duration-300 ease-in-out">
            <Link href="/" className="cursor-pointer"><Image src={"/logo.png"} alt={"Logo"} width={50} height={50}/></Link>
            <Link href="/despre-noi" className="group transition-all duration-300 ease-in-out">
              <span className="bg-left-bottom bg-gradient-to-l from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">DESPRE NOI</span>
            </Link>
            <Link href="/servicii" className="group transition-all duration-300 ease-in-out">
            <span className="bg-left-bottom bg-gradient-to-l from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">SERVICII</span>
            </Link>
            <Link href="/secret" className="group transition-all duration-300 ease-in-out">
            <span className="bg-left-bottom bg-gradient-to-l from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">ARTICOLE</span>
            </Link>
            <Link href="/contact" className="group transition-all duration-300 ease-in-out">
            <span className="bg-left-bottom bg-gradient-to-l from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">CONTACT</span>
            </Link>
            <div className="flex flex-grow justify-end gap-6">
            {
              role === 'admin' ? <Dropdown/> : null
            }
            {isLoggedIn ? (
              <div className="cursor-pointer group transition-all duration-300 ease-in-out" onClick={() => handleLogout()}> <span className="bg-left-bottom bg-gradient-to-l from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">LOGOUT</span></div>
            ) : (
              <div className="cursor-pointer" onClick={() => handleLogin()}>LOGIN</div>
            )}
            </div>
          </ul>
      </nav>
    </>
  );
}
