"use client";
import SearchInvoices from "./components/SearchInvoices";
import Button from "@/components/common/ui/Button";
import { useState } from "react";
import { FiMoreVertical } from "react-icons/fi";
import Table from "@/components/common/table/Table";
import getInvoiceListColumns from "./components/invoiceListcolumn";
import Breadcrumb from "@/components/common/ui/BreadCrumb";

export default function InvoiceList() {
  const [invoiceListData, setInvoiceListData] = useState([
    {
      id: 1,
      srNo: "01",
      invoiceId: "672938",
      invoiceNo: "923820",
      salesOrderNo: "235",
      customer: "vijay",
      createdDate: "22june 2025",
      totalAmonut: "45.8",
      amountPaid: "16.3",
      status: "Paid",
      remainingAmount: "56.9",
      blank: <FiMoreVertical />,
    },
    {
      id: 2,
      srNo: "02",
      invoiceId: "672938",
      invoiceNo: "923820",
      salesOrderNo: "235",
      customer: "vijay",
      createdDate: "22june 2025",
      totalAmonut: "45.8",
      amountPaid: "16.3",
      status: "Unpaid",
      remainingAmount: "56.9",
      blank: <FiMoreVertical />,
    },
    {
      id: 3,
      srNo: "03",
      invoiceId: "672938",
      invoiceNo: "923820",
      salesOrderNo: "235",
      customer: "vijay",
      createdDate: "22june 2025",
      totalAmonut: "45.8",
      amountPaid: "16.3",
      status: "Paid",
      remainingAmount: "56.9",
      blank: <FiMoreVertical />,
    },
    {
      id: 4,
      srNo: "04",
      invoiceId: "672938",
      invoiceNo: "923820",
      salesOrderNo: "235",
      customer: "vijay",
      createdDate: "22june 2025",
      totalAmonut: "45.8",
      amountPaid: "16.3",
      status: "Unpaid",
      remainingAmount: "56.9",
      blank: <FiMoreVertical />,
    },
    {
      id: 5,
      srNo: "05",
      invoiceId: "672938",
      invoiceNo: "923820",
      salesOrderNo: "235",
      customer: "vijay",
      createdDate: "22june 2025",
      totalAmonut: "45.8",
      amountPaid: "16.3",
      status: "Unpaid",
      remainingAmount: "56.9",
      blank: <FiMoreVertical />,
    },
    {
      id: 6,
      srNo: "06",
      invoiceId: "672938",
      invoiceNo: "923820",
      salesOrderNo: "235",
      customer: "vijay",
      createdDate: "22june 2025",
      totalAmonut: "45.8",
      amountPaid: "16.3",
      status: "Unpaid",
      remainingAmount: "56.9",
      blank: <FiMoreVertical />,
    },
    {
      id: 7,
      srNo: "07",
      invoiceId: "672938",
      invoiceNo: "923820",
      salesOrderNo: "235",
      customer: "vijay",
      createdDate: "22june 2025",
      totalAmonut: "45.8",
      amountPaid: "16.3",
      status: "Unpaid",
      remainingAmount: "56.9",
      blank: <FiMoreVertical />,
    },
    {
      id: 8,
      srNo: "08",
      invoiceId: "672938",
      invoiceNo: "923820",
      salesOrderNo: "235",
      customer: "vijay",
      createdDate: "22june 2025",
      totalAmonut: "45.8",
      amountPaid: "16.3",
      status: "Unpaid",
      remainingAmount: "56.9",
      blank: <FiMoreVertical />,
    },
  ]);

  const invoiceColumn = getInvoiceListColumns();

  const [loadingInvoice, setLoadingInvoice] = useState(false);

  const handleInvoiceListRefresh = () => {
    setLoadingInvoice(true);
    setTimeout(() => setLoadingInvoice(false), 1000);
  };

  return (
    <div className="space-y-4">
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem/dashboard" },
          { label: "Invoice & Payment", href: "/oem/invoice-payment" },
          {
            label: "Invoice List",
            href: "/oem/invoice-payment/invoice-list",
          },
        ]}
      />
      <div>
        <h1 className="text-3xl font-semibold text-[#445E94]">Invoice List</h1>
      </div>
      <div>
        <SearchInvoices />
      </div>
      <div className="space-y-4 rounded-lg bg-white">
        {/* Header */}
        <div className="flex justify-between px-6 pt-4">
          <h1 className="text-xl font-semibold text-[#445E94]">Invoice List</h1>
          <Button className="px-12">Import</Button>
        </div>

        <hr className="text-gray-200" />

        {/* Table */}
        <div className="px-6 pb-4 w-[1200px]">
          <Table
            rows={invoiceListData}
            columns={invoiceColumn}
            rowsPerPage={4}
            onRefresh={handleInvoiceListRefresh}
          />
        </div>
      </div>

    </div>
  );
}
