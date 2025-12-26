import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";


export const useAuthStore = create((set) => ({
    user: null,
    token: null,
    isLoading: false,

    register: async (name, email, cnic, password) => {
        set({ isLoading: true });
        console.log("register called ====>>> ", name, email, cnic, password);
        try {
            const response = await fetch("http://192.168.43.10:3000/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email, cnic, password }),
            });

            const data = response.json();
            console.log("register ====>>> ", data);
            if (!response.ok) {
                throw new Error(data.message || "Registration failed");
            }

            await AsyncStorage.setItem("user", JSON.stringify(data.user));
            await AsyncStorage.setItem("token", data.token);

            set({ user: data.user, token: data.token, isLoading: false });

            return { success: true };
        } catch (error) {
            set({ isLoading: false });
            return { success: false, error: error.message };
        }
    }

}));

