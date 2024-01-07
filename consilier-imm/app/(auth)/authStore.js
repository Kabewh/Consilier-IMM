import { create } from 'zustand'

export const useAuthStore = create((set) => ({
    loggedIn: false,
    login: () => set((state) => ({ loggedIn: true })),
    logout: () => set((state) => ({ loggedIn: false }))
}))