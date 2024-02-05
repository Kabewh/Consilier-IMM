'use client'

import Navbar from "../components/Navbar";
import {useState, useEffect} from 'react';
import { pb } from "../(auth)/auth";
import Topbar from "../components/Topbar";

export default function AdminPanel () {
    const [users, setUsers] = useState(null)
    const [admins, setAdmins] = useState(null)
    const [newUsername, setNewUsername] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [newUserRole, setNewUserRole] = useState("")
    pb.autoCancellation(false);

    const getUsers = async () => {
        const users = await pb.collection('users').getFullList({
            sort: '-created',
        });
       
        const admins = users.filter((user) => user.Role === 'admin');
        const adminCount = admins.length;

        setAdmins(adminCount)
        setUsers(users)
    }

    async function createUser(newUsername, newPassword, newUserRole) {
        const data = {
            "username": newUsername,
            "password": newPassword,
            "passwordConfirm": newPassword,
            "Role": newUserRole
        }
        try {
            const record = await pb.collection('users').create(data)
            alert("user successfully added")
            getUsers()
        } catch (e) {
            console.log(e)
        }
    }

    async function deleteUser(id) {
        try {
            const updatedUsers = [...users];
            const userToDelete = updatedUsers.find(user => user.id === id);
    
            if (userToDelete.Role === 'admin') {
                const remainingAdmins = admins - 1;
                if (remainingAdmins === 0) {
                    alert("Nu poti sterge ultimul admin");
                    return;
                }
            }
    
            await pb.collection('users').delete(id);
            getUsers();
        } catch (e) {
            console.log(e);
        }
    }
    

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <>
        <div className="h-screen">
            <Navbar />
            <div className="container mx-auto my-8 flex flex-col">
                <h2 className="text-2xl font-bold mb-4">Utilizatori</h2>
                {/* Add User Form */}
                {users && (
                    <table className="min-w-full bg-white border border-gray-300">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="py-2 px-4 border-b">ID</th>
                                <th className="py-2 px-4 border-b">Utilizator</th>
                                <th className="py-2 px-4 border-b">Drepturi</th>
                                <th className="py-2 px-4 border-b">Created</th>
                                <th className="py-2 px-4 border-b">Actions</th>
                                {/* Add more columns as needed */}
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user.id} className="hover:bg-gray-50 text-center">
                                    <td className="py-2 px-4 border-b">{user.id}</td>
                                    <td className="py-2 px-4 border-b">{user.username}</td>
                                    <td className="py-2 px-4 border-b">{user.Role}</td>
                                    <td className="py-2 px-4 border-b">{user.created}</td>
                                    <td className="py-2 px-4 border-b">
                                        <button onClick={() => deleteUser(user.id)} className="bg-red-500 text-white px-2 py-1">Delete</button>
                                    </td>
                                    {/* Add more cells as needed */}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}

                <div className="mb-4 place-self-start flex flex-col">
                    <button onClick={() => createUser(newUsername, newPassword, newUserRole)} className="ml-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2">Adauga Utilizator Nou</button>
                    <input
                        type="text"
                        placeholder="Nume utilizator nou"
                        value={newUsername}
                        onChange={(e) => setNewUsername(e.target.value)}
                        className="p-2 border border-gray-300"
                    />
                    <input
                        type="password" // Assuming this is a password field
                        placeholder="Parola utilizator nou"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="p-2 border border-gray-300"
                    />
                    <select
                        value={newUserRole}
                        onChange={(e) => setNewUserRole(e.target.value)}
                        className="p-2 border border-gray-300"
                    >
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>
            </div>
        </div>
        </>
    )
}