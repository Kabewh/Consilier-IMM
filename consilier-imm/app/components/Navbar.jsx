"use client";
import Link from "next/link";
import { pb } from "./auth";

export default function Navbar() {
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
          {pb.authStore.isValid ? (
            <button onClick={() => pb.authStore.clear()}>Logout</button>
          ) : (
            <Link href="/login">Login</Link>
          )}
        </ul>
      </nav>
    </>
  );
}
