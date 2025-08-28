"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import Cookies from "js-cookie";

type Role = "OEM" | "DMS" | null;

interface AuthState {
  token: string | null;
  role: Role;
  isAuthenticated: boolean;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
}

// Dummy user DB
const dummyUsers = [
  { username: "oem@example.com", password: "oem@1234", role: "OEM" },
  { username: "dms@example.com", password: "dms@1234", role: "DMS" },
];

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      role: null,
      isAuthenticated: false,

      login: async (username, password) => {
        const user = dummyUsers.find(
          (u) => u.username === username && u.password === password
        );

        if (user) {
          // Generate dummy token (later replace with backend API)
          const fakeToken = `${user.role}-token-${Date.now()}`;

          set({ token: fakeToken, role: user.role as Role, isAuthenticated: true });

          // Store token in cookies (for middleware) and localStorage
          Cookies.set("token", fakeToken, { expires: 1 });
          Cookies.set("role", user.role, { expires: 1 });

          return true;
        }
        return false;
      },

      logout: () => {
        set({ token: null, role: null, isAuthenticated: false });
        Cookies.remove("token");
        Cookies.remove("role");
      },
    }),
    { name: "auth-storage" }
  )
);
