"use client";

import { useAuthStore } from "@/store/authStore";

export default function OEMDashboard() {
  const logout = useAuthStore((state) => state.logout);

  return (
    <div>
      <h1 className="text-2xl font-bold">OEM Dashboard</h1>
      <button
        className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg"
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
}
