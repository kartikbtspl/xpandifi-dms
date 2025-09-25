// store/holidayStore.ts
"use client";

import { create } from "zustand";

export interface Holiday {
  id: number;
  srNo: string;
  holidayName: string;
  holidayDateTime: string;
  holidayStatus: string;
  country: string;
  state: string;
  holidayImage?: File | null;
  year?: string;
}

interface HolidayState {
  holidays: Holiday[];
  addHoliday: (holiday: Omit<Holiday, "id" | "srNo">) => void;
  updateHoliday: (updatedHoliday: Holiday) => void;
  deleteHoliday: (id: number) => void;
}

export const useHolidayStore = create<HolidayState>((set) => ({
  holidays: [
    {
      id: 1,
      srNo: "01",
      holidayName: "New Year",
      holidayDateTime: "2025-01-01",
      holidayStatus: "Public",
      country: "India",
      state: "Maharashtra",
      year: "2024",
      holidayImage: null,
    },
  ],

  addHoliday: (holiday) =>
  set((state) => {
    const newId = state.holidays.length + 1;
    const year = holiday.holidayDateTime
      ? new Date(holiday.holidayDateTime).getFullYear().toString()
      : "";

    const newHoliday: Holiday = {
      id: newId,
      srNo: String(newId).padStart(2, "0"),
      ...holiday,
      year, // <-- store year
    };
    return { holidays: [...state.holidays, newHoliday] };
  }),

  updateHoliday: (updatedHoliday) =>
    set((state) => ({
      holidays: state.holidays.map((h) =>
        h.id === updatedHoliday.id
          ? {
              ...updatedHoliday,
              year: updatedHoliday.holidayDateTime
                ? new Date(updatedHoliday.holidayDateTime).getFullYear().toString()
                : updatedHoliday.year,
            }
          : h
      ),
    })),

    deleteHoliday: (id) =>
    set((state) => ({
      holidays: state.holidays.filter((h) => h.id !== id),
    })),

}));
