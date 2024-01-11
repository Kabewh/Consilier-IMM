'use client'
import Navbar from "../components/Navbar";
import AdminView from "./AdminView";
import UserView from "./UserView";
import { pb } from "../(auth)/auth";
import { useEffect, useState } from "react";

export default function Secret() {
    const [userRole, setUserRole] = useState("user")
    const isLoggedIn = pb.authStore.isValid;
    async function isAdmin() {
        const user = await pb.collection("users").getFirstListItem(`username="testuser"`)
        setUserRole(user.Role)
    }

    return (
        <>
            <Navbar />
            <div className="max-w-screen-xl mx-auto">
                {isLoggedIn && userRole === "admin" ? <AdminView /> : <UserView session={isLoggedIn} />}
            </div>
        </>
    )
}