"use client";
import Link from "next/link";
import { useAuthStore } from "../(auth)/authStore";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { pb } from "../(auth)/auth";

export default function Navbar() {
  const loggedIn = useAuthStore((state) => state.loggedIn);
  const logout = useAuthStore((state) => state.logout);
  const router = useRouter();

  const handleClick = () => {
    pb.authStore.clear();
    router.push("/");
    logout();
  };

  return (
    <>
      <nav className="p-5 bg-orange-500 text-lg text-white">
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
          {loggedIn ? (
            <button onClick={() => handleClick()}>Logout</button>
          ) : (
            <Link href="/login">LOGIN</Link>
          )}
        </ul>
      </nav>
    </>
  );
}
