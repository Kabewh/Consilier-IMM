import { create } from 'zustand'

export const useAuthStore = create((set) => ({
    loggedIn: false,
    admin: false,
    setAdmin: () => set((state) => ({ admin: true })),
    removeAdmin: () => set((state) => ({ admin: false })),
    login: () => set((state) => ({ loggedIn: true })),
    logout: () => set((state) => ({ loggedIn: false }))
}))