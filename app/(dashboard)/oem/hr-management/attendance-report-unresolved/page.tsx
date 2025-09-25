"use client";
import Breadcrumb from "@/components/common/ui/BreadCrumb";
import React, { useState } from "react";
import AttendanceReportPieChart from "./components/AttendanceReportPieChart";
import AttendanceReportForm from "./components/AttendanceReportForm";
import Table from "@/components/common/table/Table";
import Button from "@/components/common/ui/Button";
import { FiShare } from "react-icons/fi";
import getDepreAttendanceReportCol from "./components/getDepreAttendanceReportCol";

const AttendanceReportUnresolved = () => {
  const [attendanceReportData, setAttendanceReportData] = useState([
    {
      id: 1,
      username: "Shreyash",
      inTime: "",
      outTime: "",
      duration: "",
      inLocation: "",
      outLocation: "",
      entry: "",
      exit: "",
    },
    {
      id: 2,
      username: "Shreyash",
      inTime: "",
      outTime: "",
      duration: "",
      inLocation: "",
      outLocation: "",
      entry: "",
      exit: "",
    },
  ]);

  const [loadingAttendanceReport, setLoadingAttendanceReport] = useState(false);

  const attendanceReportColumns = getDepreAttendanceReportCol();

  const handleRefreshAttendanceReport = () => {
    setLoadingAttendanceReport(true);
    setTimeout(() => {
      setLoadingAttendanceReport(false);
      setAttendanceReportData((prev) => [...prev]); // refresh same data
    }, 1000);
  };

  return (
    <div className="space-y-4">
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem" },
          { label: "HR Management", href: "/oem/hr-management" },
          {
            label: "Attendance Report(Deprecated)",
            href: "/oem/sales-order-workflow/attendance-report-unresolved",
          },
        ]}
      />
      <h1 className="text-3xl font-semibold text-[#445E94]">
        Attendance Report(Deprecated)
      </h1>
      <AttendanceReportPieChart />
      <AttendanceReportForm />
      <div className="space-y-4 rounded-lg bg-white">
        <div className="flex justify-between px-6 pt-4">
          <h1 className="text-xl text-[#445E94]">
            With Attendance Report :: Total Employees Present :{" "}
            {attendanceReportData.length}.
          </h1>
          <Button startIcon={<FiShare />} className="cursor-pointer">Export</Button>
        </div>
        <hr className="text-gray-200" />

        <div className="px-6 py-4">
          <Table
            rows={attendanceReportData}
            columns={attendanceReportColumns}
            onRefresh={handleRefreshAttendanceReport}
            loading={loadingAttendanceReport}
            showPagination
            rowsPerPage={3}
          />
        </div>
      </div>
    </div>
  );
};

export default AttendanceReportUnresolved;
