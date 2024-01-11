"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { pb } from "../(auth)/auth";
import { Kadwa } from "next/font/google";

const kadwa = Kadwa({ weight: "400", subsets: ["devanagari"] });

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  pb.autoCancellation(false);

  const router = useRouter();

  useEffect(() => {
    setIsLoggedIn(pb.authStore.isValid);
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
        className={`p-5 bg-orange-500 text-lg text-white ${kadwa.className}`}
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
