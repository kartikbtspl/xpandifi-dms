"use client";

import { create } from "zustand";

export interface BeatPlanReason {
  id: number;
  srNo: string;
  beatPlanReason: string;
  details: string; // true/false will be displayed as "Yes"/"No" in UI if needed
}

interface BeatPlanReasonState {
  reasons: BeatPlanReason[];
  addReason: (reason: Omit<BeatPlanReason, "id" | "srNo">) => void;
  updateReason: (updated: BeatPlanReason) => void;
  deleteReason: (id: number) => void;
}

export const useBeatPlanReasonStore = create<BeatPlanReasonState>((set) => ({
  reasons: [
    {
      id: 1,
      srNo: "01",
      beatPlanReason: "Old Reason",
      details: "Yes",
    },
  ],

  // ➕ Add Reason
  addReason: (reason) =>
    set((state) => {
      const newId = state.reasons.length + 1;
      const newReason: BeatPlanReason = {
        id: newId,
        srNo: String(newId).padStart(2, "0"),
        ...reason,
      };
      return { reasons: [...state.reasons, newReason] };
    }),

  // ✏️ Update Reason
  updateReason: (updated) =>
    set((state) => ({
      reasons: state.reasons.map((r) =>
        r.id === updated.id ? updated : r
      ),
    })),

  // ❌ Delete Reason
  deleteReason: (id) =>
    set((state) => ({
      reasons: state.reasons.filter((r) => r.id !== id),
    })),
}));
