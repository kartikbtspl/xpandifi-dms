"use client";
import Breadcrumb from "@/components/common/ui/BreadCrumb";
import React, { useState } from "react";
import AdvancedForm from "./components/AdvancedForm";
import getAdvanceListCol from "./components/getAdvanceListCol";
import Table from "@/components/common/table/Table";
import Button from "@/components/common/ui/Button";
import { useRouter } from "next/navigation";

const AdvanceReport = () => {
  const [advanceReportData, setAdvanceReportData] = useState([
    {
      id: 1,
      srNo: "01",
      advanceRequestID: "ABC",
      userName: "PQR",
      createdAt: "2",
      amount: "2",
      reason: "2",
      status: "pending",
    },
    {
      id: 2,
      srNo: "02",
      advanceRequestID: "ABC",
      userName: "PQR",
      createdAt: "2",
      amount: "2",
      reason: "2",
      status: "pending",
    },
    {
      id: 3,
      srNo: "03",
      advanceRequestID: "ABC",
      userName: "PQR",
      createdAt: "2",
      amount: "2",
      reason: "2",
      status: "approved",
    },
  ]);

  const router = useRouter();
  const [loadingAdvanceReport, setLoadingAdvanceReport] = useState(false);

  // ✅ View handler
  const handleView = (row: any) => {
    console.log("Viewing row:", row);
    router.push("/oem/expense-management/advance-report/view-advance-report")
    // Here you can open a modal if you want
  };

  // ✅ Approve handler (update status)
  const handleApprove = (row: any) => {
    setAdvanceReportData((prev) =>
      prev.map((item) =>
        item.id === row.id ? { ...item, status: "approved" } : item
      )
    );
  };

  // ✅ Reject handler (delete row)
  const handleReject = (row: any) => {
    setAdvanceReportData((prev) => prev.filter((item) => item.id !== row.id));
  };

  // ✅ Columns with correct handlers
  const advanceReportColumns = getAdvanceListCol(
    handleView,
    handleApprove,
    handleReject
  );

  const handleAdvanceReport = () => {
    setLoadingAdvanceReport(true);
    setTimeout(() => {
      setLoadingAdvanceReport(false);
      setAdvanceReportData((prev) => [...prev]); // refresh but same data
    }, 1000);
  };

  return (
    <div className="space-y-4">
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem/dashboard" },
          { label: "Expense Management", href: "/oem/expense-management" },
          {
            label: "Advanced Report",
            href: "/oem/expense-management/advance-report",
          },
        ]}
      />
      <h1 className="text-3xl text-[#445E94] font-semibold">Advanced Report</h1>
      <AdvancedForm />

      <div className="space-y-4 rounded-lg bg-white">
        <div className="flex justify-between px-6 pt-4">
          <h1 className="text-xl">Advance List</h1>
          <Button>Export</Button>
        </div>
        <hr className="text-gray-200" />

        <div className="px-6">
          <Table
            rows={advanceReportData}
            columns={advanceReportColumns}
            onRefresh={handleAdvanceReport}
            loading={loadingAdvanceReport}
            showPagination
            filterKey="advanceRequestID"
          />
        </div>
      </div>
    </div>
  );
};

export default AdvanceReport;
