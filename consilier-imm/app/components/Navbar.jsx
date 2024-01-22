"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { pb } from "../(auth)/auth";
import { Kadwa } from "next/font/google";

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
        className={`p-5 bg-orange-800 text-lg text-white ${kadwa.className}`}
      >
        <ul className="flex justify-end gap-9 max-w-screen-2xl mx-auto">
          <Link href="/" className="cursor-pointer">
            ACASA
          </Link>
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
          {
            role === 'admin' ? <Link href="/admin_panel">PANOU DE ADMINISTRARE</Link> : null
          }
          {isLoggedIn ? (
            <button onClick={() => handleLogout()}>LOGOUT</button>
          ) : (
            <button onClick={() => handleLogin()}>LOGIN</button>
          )}
        </ul>
      </nav>
    </>
  );
}
