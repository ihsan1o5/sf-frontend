import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";


export const useAuthStore = create((set) => ({
    user: null,
    token: null,
    isLoading: false,

    register: async (name, email, cnic, password) => {
        set({ isLoading: true });
        try {
            const response = await fetch("http://192.168.43.10:3000/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email, cnic, password }),
            });

            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message || "Registration failed");
            }

            // Don't store user and token on registration, as we will want the user login after registration
            // await AsyncStorage.setItem("user", JSON.stringify(data.user));
            // await AsyncStorage.setItem("token", data.token);

            set({ isLoading: false });

            return { success: true };
        } catch (error) {
            set({ isLoading: false });
            return { success: false, error: error.message };
        }
    },

    login: async (email, password) => {
        set({ isLoading: true });
        try {
            const response = await fetch("http://192.168.43.10:3000/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();
            if (!response.ok) throw new Error(data.message || "Something went wrong! Login failed");

            await AsyncStorage.setItem("user", JSON.stringify(data.user));
            await AsyncStorage.setItem("token", data.token);

            set({ user: data.user, token: data.token, isLoading: false });

            return { success: true };

        } catch (error) {
            console.log("Login error:", error);
            set({ isLoading: false });
            return { success: false, error: error.message };
        }
    },

    checkAuth: async () => {
        try {
            const token = await AsyncStorage.getItem("token");
            const userJson = await AsyncStorage.getItem("user");
            const user = userJson ? JSON.parse(userJson) : null;

            set({ user, token });
        } catch (error) {
            console.log("Auth check failed", error);
        }
    },
    
    logout: async () => {
        try {
            await AsyncStorage.removeItem("user");
            await AsyncStorage.removeItem("token");
            set({ user: null, token: null });
        } catch (error) {
            console.log("Logout failed", error);
        }
    }

}));

