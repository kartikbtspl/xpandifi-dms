"use client";
import Breadcrumb from '@/components/common/ui/BreadCrumb';
import React, { useState } from 'react';
import Table from '@/components/common/table/Table';
import getMonthlyReportCol from './components/getMonthlyReportCol';
import MonthlyReportForm from "./components/MonthlyReportForm";

// 🔹 helper: convert month string ("sept") → number (1-12)
const monthMap: Record<string, number> = {
  jan: 1, feb: 2, mar: 3, apr: 4, may: 5, jun: 6,
  jul: 7, aug: 8, sept: 9, oct: 10, nov: 11, dec: 12,
};

// 🔹 generate attendance days with your dummy P/A pattern
const generateAttendanceDays = (month: number, year: number, pattern: string[] = []): Record<number, string> => {
  const totalDays = new Date(year, month, 0).getDate();
  const days: Record<number, string> = {};

  for (let i = 1; i <= totalDays; i++) {
    days[i] = pattern[i - 1] || "P"; // fallback to "P" if pattern shorter than month
  }

  return days;
};

const MonthlyReport = () => {
  const septPatternShreyash = [
    "P","P","L","P","P","P","WO","P","P","P","P","A",
    "P","P","P","P","P","A","P","H","P","P","P","P","P","P","P","P","P","P"
  ]; // 30 days
  const septPatternNeha = [
    "P","A","P","P","P","P","WO","L","P","P","P","P",
    "P","P","A","P","P","P","P","H","P","P","P","P","P","P","P","P","P","P"
  ];

  // 🔹 initial attendance data
  const [attendanceData] = useState([
    {
      id: 1,
      month: "sept",
      year: 2025,
      days: generateAttendanceDays(9, 2025, septPatternShreyash),
      user: "Shreyash",
      zone: "West",
      country: "India",
      state: "Maharashtra",
      city: "Pune",
    },
    {
      id: 2,
      month: "sept",
      year: 2025,
      days: generateAttendanceDays(9, 2025, septPatternNeha),
      user: "Neha",
      zone: "West",
      country: "India",
      state: "Maharashtra",
      city: "Mumbai",
    }
  ]);

  const [filteredData, setFilteredData] = useState(attendanceData);
  const [loading, setLoading] = useState(false);

  // 🔹 default selected month/year
  const [selectedMonth, setSelectedMonth] = useState(9); // September
  const [selectedYear, setSelectedYear] = useState(2025);

  // 🔹 Filtering Logic
  const handleFilter = (filters: {
    user: string;
    month: string;
    year: number;
    zone: string;
    country: string;
    state: string;
    city: string;
  }) => {
    let filtered = attendanceData;

    if (filters.user) {
      filtered = filtered.filter(row =>
        row.user.toLowerCase().includes(filters.user.toLowerCase())
      );
    }

    if (filters.month && filters.year) {
      filtered = filtered.filter(
        row =>
          row.month.toLowerCase() === filters.month.toLowerCase() &&
          row.year === filters.year
      );

      // 🔹 convert month string → number for table columns
      setSelectedMonth(monthMap[filters.month.toLowerCase()]);
      setSelectedYear(filters.year);
    }

    if (filters.zone) {
      filtered = filtered.filter(row =>
        row.zone.toLowerCase().includes(filters.zone.toLowerCase())
      );
    }

    if (filters.country) {
      filtered = filtered.filter(row =>
        row.country.toLowerCase().includes(filters.country.toLowerCase())
      );
    }

    if (filters.state) {
      filtered = filtered.filter(row =>
        row.state.toLowerCase().includes(filters.state.toLowerCase())
      );
    }

    if (filters.city) {
      filtered = filtered.filter(row =>
        row.city.toLowerCase().includes(filters.city.toLowerCase())
      );
    }

    setFilteredData(filtered);
  };

  const handleRefresh = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setFilteredData(attendanceData);
    }, 1000);
  };

  // 🔹 generate table columns dynamically based on numeric month/year
  const columns = getMonthlyReportCol(selectedMonth, selectedYear);

  return (
    <div className="space-y-4">
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem/dashboard" },
          { label: "HR Management", href: "/oem/hr-management" },
          { label: "Attendance Report", href: "/oem/hr-management/attendance-report" },
        ]}
      />

      <h1 className="text-3xl font-semibold text-[#445E94]">Attendance Report</h1>

      {/* Filter Form */}
      <MonthlyReportForm onFilter={handleFilter} />

      {/* Table */}
      <div className="space-y-4 rounded-lg bg-white">
        <div className="flex justify-between px-6 pt-4">
          <h1 className="text-xl text-[#445E94]"> Monthly Attendance </h1>
        </div>
        <hr className="text-gray-200" />
        <div className="px-6 py-4 w-[1200px] overflow-x-auto">
          <Table
            rows={filteredData}
            columns={columns}
            onRefresh={handleRefresh}
            loading={loading}
            showPagination
            rowsPerPage={2}
          />
        </div>
      </div>
    </div>
  );
};

export default MonthlyReport;
