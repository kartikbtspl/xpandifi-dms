"use client";

import { create } from "zustand";

export interface DeliveryPlan {
  id: number;
  srNo: string;
  user: string;
  deliveryPlanDate: string;
  distributor: string;
  route: string;
  customer: string;
  target: string;
}

interface DeliveryPlanState {
  deliveryPlans: DeliveryPlan[];
  addDeliveryPlan: (plan: Omit<DeliveryPlan, "id" | "srNo">) => void;
  updateDeliveryPlan: (updated: DeliveryPlan) => void;
  deleteDeliveryPlan: (id: number) => void;
}

export const useDeliveryPlanStore = create<DeliveryPlanState>((set) => ({
  deliveryPlans: [
    {
      id: 1,
      srNo: "01",
      user: "Anup Naik",
      deliveryPlanDate: "2025-09-16",
      distributor: "Jon Doe",
      route: "Chinchwad",
      customer: "Ankush",
      target: "234",
    },
  ],

  // ➕ Add new delivery plan
  addDeliveryPlan: (plan) =>
    set((state) => {
      const newId = state.deliveryPlans.length + 1;
      const newPlan: DeliveryPlan = {
        id: newId,
        srNo: String(newId).padStart(2, "0"),
        ...plan,
      };
      return { deliveryPlans: [...state.deliveryPlans, newPlan] };
    }),

  // ✏️ Update existing
  updateDeliveryPlan: (updated) =>
    set((state) => ({
      deliveryPlans: state.deliveryPlans.map((p) =>
        p.id === updated.id ? updated : p
      ),
    })),

  // ❌ Delete
  deleteDeliveryPlan: (id) =>
    set((state) => ({
      deliveryPlans: state.deliveryPlans.filter((p) => p.id !== id),
    })),
}));
