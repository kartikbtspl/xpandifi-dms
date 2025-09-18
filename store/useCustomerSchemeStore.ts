"use client";

import { create } from "zustand";

export interface Scheme {
  id: number;
  srNo: string;
  schemeName: string;
  startDate: string;
  endDate: string;
  schemeOn?: string;
  schemeOnValue?: string;
  discountType?: string;
  discountValue?: string;
  customerName?: string;
}

interface SchemeState {
  activeSchemes: Scheme[];
  archivedSchemes: Scheme[];
  addScheme: (scheme: Omit<Scheme, "id" | "srNo">) => void;
  archiveScheme: (id: number) => void;
  updateScheme: (updated: Scheme) => void;
  deleteScheme: (id: number) => void;
}

export const useCustomerSchemeStore = create<SchemeState>((set) => ({
  activeSchemes: [
    {
      id: 1,
      srNo: "01",
      schemeName: "Old Scheme",
      startDate: "01/01/2020",
      endDate: "31/12/2022",
    },
  ],
  archivedSchemes: [],

  // ➕ Add new scheme
  addScheme: (scheme) =>
    set((state) => {
      const newId =
        state.activeSchemes.length + state.archivedSchemes.length + 1;
      const newScheme: Scheme = {
        id: newId,
        srNo: String(newId).padStart(2, "0"),
        ...scheme,
      };
      return { activeSchemes: [...state.activeSchemes, newScheme] };
    }),

  // 📦 Archive scheme
  archiveScheme: (id) =>
    set((state) => {
      const schemeToArchive = state.activeSchemes.find((s) => s.id === id);
      if (!schemeToArchive) return state;
      return {
        activeSchemes: state.activeSchemes.filter((s) => s.id !== id),
        archivedSchemes: [...state.archivedSchemes, schemeToArchive],
      };
    }),

  // ✏️ Update scheme
  updateScheme: (updated) =>
    set((state) => ({
      activeSchemes: state.activeSchemes.map((s) =>
        s.id === updated.id ? updated : s
      ),
      archivedSchemes: state.archivedSchemes.map((s) =>
        s.id === updated.id ? updated : s
      ),
    })),

  // ❌ Delete scheme
  deleteScheme: (id) =>
    set((state) => ({
      activeSchemes: state.activeSchemes.filter((s) => s.id !== id),
      archivedSchemes: state.archivedSchemes.filter((s) => s.id !== id),
    })),
}));
