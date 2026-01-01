import { create } from "zustand";
import { API_BASE_URL } from "../constants/api";


export const useTransactionStore = create((set, get) => ({
    transactions: [],
    isLoading: false,
    isRefreshing: false,
    page: 1,
    hasMore: true,

    makeTransaction: async (token, payload) => {
        if (!token) {
            return { success: false, error: "Unauthorized" };
        }

        const { isLoading, isRefreshing } = get();
        if (isLoading || isRefreshing) return;

        set({ isLoading: true });

        try {
            const response = await fetch(`${API_BASE_URL}/transactions/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`, // ✅ REQUIRED
                },
                body: JSON.stringify(payload),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data?.message || "Transaction failed");
            }

            set({ isLoading: false });

            return { success: true, data };
        } catch (error) {
            set({ isLoading: false });

            return {
                success: false,
                error: error.message ?? "Something went wrong",
            };
        }
    },

    fetchTransactions: async (token, page = 1, refresh = false) => {
        if (!token) return;

        const { isLoading, isRefreshing } = get();
        if (isLoading || isRefreshing) return; // 🔒 guard

        if (refresh) {
            set({
                isRefreshing: true,
                page: 1,
                hasMore: true,
            });
        } else {
            set({ isLoading: true });
        }

        try {
            const response = await fetch(
                `${API_BASE_URL}/transactions/?page=${page}&limit=10`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Failed to fetch transactions");
            }

            set(state => {
                // 🧠 Merge + de-duplicate by _id
                const merged = refresh
                ? data.data
                : [...state.transactions, ...data.data];

                const uniqueTransactions = Array.from(
                    new Map(merged.map(item => [item._id, item])).values()
                );

                return {
                    transactions: uniqueTransactions,
                    page,
                    hasMore: page < data.pagination.totalPages,
                };
            });
        } catch (error) {
            console.error("Fetch transactions error:", error.message);
        } finally {
            set({
                isLoading: false,
                isRefreshing: false,
            });
        }
    },

    resetTransactions: () =>
        set({
            transactions: [],
            page: 1,
            hasMore: true,
            isLoading: false,
            isRefreshing: false,
        }),
}));

