import { create } from "zustand";


export const useAuthStore = create((set) => ({
    user: {name: "John Doe"},

    sayHello: () => console.log("Hello from authStore"),
}));

