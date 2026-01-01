import { create } from "zustand";
import { API_BASE_URL } from "../constants/api";

export const useStudentStore = create((set, get) => ({
  students: [],
  isLoading: false,
  isRefreshing: false,
  page: 1,
  hasMore: true,

  fetchStudents: async (token, page = 1, refresh = false) => {
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
        `${API_BASE_URL}/students/get-by-parent?page=${page}&limit=10`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch students");
      }

      set(state => {
        // 🧠 Merge + de-duplicate by _id
        const merged = refresh
          ? data.data
          : [...state.students, ...data.data];

        const uniqueStudents = Array.from(
          new Map(merged.map(item => [item._id, item])).values()
        );

        return {
          students: uniqueStudents,
          page,
          hasMore: page < data.pagination.totalPages,
        };
      });
    } catch (error) {
      console.error("Fetch students error:", error.message);
    } finally {
      set({
        isLoading: false,
        isRefreshing: false,
      });
    }
  },

  resetStudents: () =>
    set({
      students: [],
      page: 1,
      hasMore: true,
      isLoading: false,
      isRefreshing: false,
    }),
}));
