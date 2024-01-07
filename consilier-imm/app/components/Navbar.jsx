"use client";
import Link from "next/link";
import { useAuthStore } from "./authStore";
import { useState, useEffect } from "react";
import { pb } from "./auth";

export default function Navbar() {
  const loggedIn = useAuthStore((state) => state.loggedIn);
  const logout = useAuthStore((state) => state.logout);

  useEffect(() => {
    console.log(loggedIn);
  });

  const handleClick = () => {
    pb.authStore.clear();
    logout();
  };

  return (
    <>
      <nav className="p-5 bg-orange-500">
        <ul className="flex justify-end gap-10 max-w-screen-xl mx-auto">
          <Link href="/" className="cursor-pointer">
            Acasa
          </Link>
          <Link href="/despre-noi" className="">
            Despre Noi
          </Link>
          <Link href="/servicii" className="">
            Servicii
          </Link>
          <Link href="/secret" className="">
            Secret
          </Link>
          <Link href="/contact" className="">
            Contact
          </Link>
          {loggedIn ? (
            <button onClick={() => handleClick()}>Logout</button>
          ) : (
            <Link href="/login">Login</Link>
          )}
        </ul>
      </nav>
    </>
  );
}
