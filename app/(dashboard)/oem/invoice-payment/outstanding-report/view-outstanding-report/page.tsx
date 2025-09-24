"use client";

import { Suspense } from "react";
import Breadcrumb from "@/components/common/ui/BreadCrumb";
import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import ViewOutstandingForm from "./components/ViewOutstandingForm";
import Button from "@/components/common/ui/Button";
import Table from "@/components/common/table/Table";
import getViewOutstandingCol from "./components/getViewOutstandingCol";
import { FiTrash2 } from "react-icons/fi";
import DeleteViewOutstandingListModal from "./components/Modals/DeleteViewOustandingListModal";

export default function ViewOutstandingReport() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <InnerViewOutstandingReport />
    </Suspense>
  );
}

// ✅ Client-side logic moved to inner component
function InnerViewOutstandingReport() {
  const [viewOutstandingListData, setViewOutstandingListData] = useState([
    { id: 1, srNo: "01", totalAmount: "ABC", paidAmount: "10,000", date: "XYZ", invoiceId: "16-09-2025 11:49", action: "" },
    { id: 2, srNo: "02", totalAmount: "ABC", paidAmount: "10,000", date: "XYZ", invoiceId: "16-09-2025 11:49", action: "" },
    { id: 3, srNo: "03", totalAmount: "ABC", paidAmount: "10,000", date: "XYZ", invoiceId: "16-09-2025 11:49", action: "" },
  ]);

  const [loadingViewOutstandingList, setLoadingViewOutstandingList] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deleteMode, setDeleteMode] = useState<"single" | "all" | null>(null);
  const [selectedRow, setSelectedRow] = useState<any>(null);

  // 🔹 Delete single row
  const handleDelete = (row: any) => {
    setDeleteMode("single");
    setSelectedRow(row);
    setIsDeleteModalOpen(true);
  };

  // 🔹 Delete all rows
  const handleDeleteAllClick = () => {
    setDeleteMode("all");
    setIsDeleteModalOpen(true);
  };

  // 🔹 Confirm delete
  const confirmDelete = () => {
    if (deleteMode === "single" && selectedRow) {
      setViewOutstandingListData(prev => prev.filter(r => r.id !== selectedRow.id));
    } else if (deleteMode === "all") {
      setViewOutstandingListData([]); // clear all
    }
    setIsDeleteModalOpen(false);
    setSelectedRow(null);
    setDeleteMode(null);
  };

  const viewOutstandingListColumns = getViewOutstandingCol(handleDelete);

  const handleRefreshViewOutstandingList = () => {
    setLoadingViewOutstandingList(true);
    setTimeout(() => {
      setLoadingViewOutstandingList(false);
      setViewOutstandingListData(prev => [...prev]); // refresh but same data
    }, 1000);
  };

  const searchParams = useSearchParams();
  const data = searchParams.get("data");
  const row = data ? JSON.parse(decodeURIComponent(data)) : null;

  const mappedRow = row
    ? {
        customerName: row.customerName,
        lastUpdateOn: row.lastUpdateOn,
        creditDuration: row.creditDuration ?? "",
        totalBalance: row.amount,
        creditLimit: row.creditLimit ?? "",
      }
    : null;

  return (
    <div className="space-y-4">
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem" },
          { label: "Invoice & Payment", href: "/oem/invoice-payment" },
          { label: "Outstanding Report", href: "/oem/invoice-payment/outstanding-report" },
        ]}
      />
      <h1 className="text-3xl font-semibold text-[#445E94]">Outstanding Report</h1>

      {mappedRow && <ViewOutstandingForm rowData={mappedRow} />}

      <div className="space-y-4 rounded-lg bg-white">
        {/* Header */}
        <div className="flex justify-between px-6 pt-4">
          <h1 className="text-xl text-[#445E94]">Outstanding List</h1>
          <Button startIcon={<FiTrash2 />} className="cursor-pointer" onClick={handleDeleteAllClick}>
            Delete All
          </Button>
        </div>

        <hr className="text-gray-200" />

        {/* Table */}
        <div className="px-6 pb-4">
          <Table
            columns={viewOutstandingListColumns}
            rows={viewOutstandingListData}
            onRefresh={handleRefreshViewOutstandingList}
            loading={loadingViewOutstandingList}
            showPagination
            rowsPerPage={3}
          />
        </div>
      </div>

      {/* Delete modal */}
      <DeleteViewOutstandingListModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={confirmDelete}
      />
    </div>
  );
}
