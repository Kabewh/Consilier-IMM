'use client'
import { useAuthStore } from "../(auth)/authStore";

import Navbar from "../components/Navbar";
import AdminView from "./AdminView";
import UserView from "./UserView";

export default function Secret() {
    const isAdmin = useAuthStore((state) => state.admin)
    return (
        <>
            <Navbar />
            <div className="max-w-screen-xl mx-auto">
                {isAdmin ? <AdminView /> : <UserView />}
            </div>
        </>
    )
}