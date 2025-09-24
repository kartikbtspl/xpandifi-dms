"use client";

import { create } from "zustand";

export interface ManageDelivery {
  id: number;
  srNo: string;
  planID: string;
  deliveryPlanDate: string;
  user: string;
  distributor: string;
  route: string;
  target: string;
  customerName: string;
  archivedTarget: string;
  tripID: string;
  vehicleID: string;
}

interface ManageDeliveryState {
  manageDeliveries: ManageDelivery[];
  addManageDelivery: (plan: Omit<ManageDelivery, "id" | "srNo">) => void;
  updateManageDelivery: (updated: ManageDelivery) => void;
  deleteManageDelivery: (id: number) => void;
}

export const useManageDeliveryStore = create<ManageDeliveryState>((set) => ({
  manageDeliveries: [
    {
      id: 1,
      srNo: "01",
      planID: "123456",
      deliveryPlanDate: "2025-09-16",
      user: "Anup Naik",
      distributor: "Jon Doe",
      route: "Chinchwad",
      target: "234",
      customerName: "Ankush",
      archivedTarget: "123",
      tripID: "1",
      vehicleID: "1",
    },
  ],

  // ➕ Add new manage delivery
  addManageDelivery: (plan) =>
    set((state) => {
      const newId = state.manageDeliveries.length + 1;
      const newPlan: ManageDelivery = {
        id: newId,
        srNo: String(newId).padStart(2, "0"),
        ...plan,
      };
      return { manageDeliveries: [...state.manageDeliveries, newPlan] };
    }),

  // ✏️ Update existing
  updateManageDelivery: (updated) =>
    set((state) => ({
      manageDeliveries: state.manageDeliveries.map((p) =>
        p.id === updated.id ? updated : p
      ),
    })),

  // ❌ Delete
  deleteManageDelivery: (id) =>
    set((state) => ({
      manageDeliveries: state.manageDeliveries.filter((p) => p.id !== id),
    })),
}));
