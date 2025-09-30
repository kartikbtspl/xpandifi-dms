"use client";
import React from "react";

export interface Column {
  id: string;
  label: string;
  render?: (row: any, index?: number) => React.ReactNode;
}

// Helper: get total days in a month
const getDaysInMonth = (month: number, year: number): number => {
  return new Date(year, month, 0).getDate();
};

// Helper: month number → abbreviation
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

const getMonthlyReportCol = (month: number, year: number): Column[] => {
  const totalDays = getDaysInMonth(month, year);

  // 1️⃣ Day columns first
  const dayCols: Column[] = Array.from({ length: totalDays }, (_, i) => {
    const day = i + 1;
    const monthAbbr = monthNames[month - 1];
    return {
      id: `day${day}`,
      label: `${day} ${monthAbbr}`, // 1 Sept, 2 Sept, ...
      render: (row) => <span>{row.days?.[day] || "-"}</span>,
    };
  });

  // 2️⃣ Employee info columns after days
  const infoCols: Column[] = [
    { id: "user", label: "Employee Name", render: (row) => <span>{row.user}</span> },
    { id: "zone", label: "Zone", render: (row) => <span>{row.zone}</span> },
    { id: "country", label: "Country", render: (row) => <span>{row.country}</span> },
    { id: "state", label: "State", render: (row) => <span>{row.state}</span> },
    { id: "city", label: "City", render: (row) => <span>{row.city}</span> },
  ];

  return [...dayCols, ...infoCols];
};

export default getMonthlyReportCol;
