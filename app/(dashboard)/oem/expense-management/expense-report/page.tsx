"use client"
import Breadcrumb from '@/components/common/ui/BreadCrumb'
import React, { useState } from 'react'
import ExpenseReportForm from './components/ExpenseReportForm'
import getExpenseReportCol from './components/getExpenseReportCol'
import { useRouter } from 'next/navigation'
import Table from '@/components/common/table/Table'
import Button from '@/components/common/ui/Button'

const ExpenseReport = () => {

  const [expenseReportData, setExpenseReportData] = useState([
      {
        id: 1,
        srNo: "01",
        expenseID: "ABC",
        userName: "PQR",
        amount: "20,000",
        approvedAmount: "10,000",
        createdAt: "2024/07/17 19:05:28",
        comment: "NA",
        status: "pending",
      },
      {
        id: 2,
        srNo: "02",
        expenseID: "ABC",
        userName: "PQR",
        amount: "20,000",
        approvedAmount: "10,000",
        createdAt: "2024/07/17 19:05:28",
        comment: "NA",
        status: "pending",
      },
      {
        id: 3,
        srNo: "03",
        expenseID: "ABC",
        userName: "PQR",
        amount: "20,000",
        approvedAmount: "10,000",
        createdAt: "2024/07/17 19:05:28",
        comment: "NA",
        status: "approved",
      },
    ]);
  
    const router = useRouter();
    const [loadingExpenseReport, setLoadingExpenseReport] = useState(false);
  
    // ✅ View handler
    const handleView = (row: any) => {
      console.log("Viewing row:", row);
      router.push("/oem/expense-management/expense-report/view-expense-report")
      // Here you can open a modal if you want
    };
  
    // ✅ Approve handler (update status)
    const handleApprove = (row: any) => {
      setExpenseReportData((prev) =>
        prev.map((item) =>
          item.id === row.id ? { ...item, status: "approved" } : item
        )
      );
    };
  
    // ✅ Reject handler (delete row)
    const handleReject = (row: any) => {
      setExpenseReportData((prev) => prev.filter((item) => item.id !== row.id));
    };
  
    // ✅ Columns with correct handlers
    const expenseReportColumns = getExpenseReportCol(
      handleView,
      handleApprove,
      handleReject
    );
  
    const handleExpenseReport = () => {
      setLoadingExpenseReport(true);
      setTimeout(() => {
        setLoadingExpenseReport(false);
        setExpenseReportData((prev) => [...prev]); // refresh but same data
      }, 1000);
    };

  return (
    <div className='space-y-4'>
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem" },
          { label: "Expense Management", href: "/oem/expense-management" },
          {
            label: "Expense Report",
            href: "/oem/expense-management/expense-report",
          },
        ]}
      />
      <h1 className="text-3xl text-[#445E94] font-semibold">Expense Report</h1>
      <ExpenseReportForm />
      <div className="space-y-4 rounded-lg bg-white">
        <div className="flex justify-between px-6 pt-4">
          <h1 className="text-xl text-[#445E94]">Expense List</h1>
          <Button>Export</Button>
        </div>
        <hr className="text-gray-200" />

        <div className="px-6">
          <Table
            rows={expenseReportData}
            columns={expenseReportColumns}
            onRefresh={handleExpenseReport}
            loading={loadingExpenseReport}
            showPagination
            filterKey="expenseID"
          />
        </div>
      </div>
    </div>
  )
}

export default ExpenseReport