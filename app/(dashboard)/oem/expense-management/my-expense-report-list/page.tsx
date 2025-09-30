"use client"
import Breadcrumb from '@/components/common/ui/BreadCrumb'
import React, { useState } from 'react'
import MyExpenseReportForm from './components/MyExpenseReportForm'
import getMyExpenseReportCol from './components/getMyExpenseReportCol'
import { useRouter } from 'next/navigation'
import Button from '@/components/common/ui/Button'
import Table from '@/components/common/table/Table'

const MyExpenseReportList = () => {

  const [myExpenseReportData, setMyExpenseReportData] = useState([
      {
        id: 1,
        srNo: "01",
        expenseID: "ABC",
        userName: "PQR",
        amount: "2",
        approvedAmount: "2",
        createdAt: "2024-07-17 19:05:28",
        comment: "NA",
        status: "pending",
        action: "",
      },
      {
        id: 2,
        srNo: "02",
        expenseID: "ABC",
        userName: "PQR",
        amount: "2",
        approvedAmount: "2",
        createdAt: "2024-07-17 19:05:28",
        comment: "NA",
        status: "pending",
        action: "",
      },
      {
        id: 3,
        srNo: "03",
        expenseID: "ABC",
        userName: "PQR",
        amount: "2",
        approvedAmount: "2",
        createdAt: "2024-07-17 19:05:28",
        comment: "NA",
        status: "pending",
        action: "",
      },
    ]);
  
    const router = useRouter();
    const [loadingMyExpense, setLoadingMyExpense] = useState(false);
  
    // ✅ View handler
    const handleView = (row: any) => {
      console.log("Viewing row:", row);
      router.push("/oem/expense-management/my-expense-report-list/view-my-expense-report-list")
      // Here you can open a modal if you want
    };
  
    const myExpenseReportColumns = getMyExpenseReportCol(
      handleView,
    );
  
    const handleRefreshMyExpense = () => {
      setLoadingMyExpense(true);
      setTimeout(() => {
        setLoadingMyExpense(false);
        setMyExpenseReportData((prev) => [...prev]); // refresh but same data
      }, 1000);
    };

  return (
    <div className='space-y-4'>
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem/dashboard" },
          { label: "Expense Management", href: "/oem/expense-management" },
          {
            label: "My Expense Report List",
            href: "/oem/expense-management/my-expense-report-list",
          },
        ]}
      />
      <h1 className="text-3xl text-[#445E94] font-semibold">My Expense Report List</h1>
      <div className='flex w-1/2  justify-between'>
        <div className='flex w-full gap-3'>
          <input type="radio" id="myExpenses" name="expenseType" />
          <label htmlFor="">My Expenses</label>
        </div>
        <div className='flex w-full gap-3'>
          <input type="radio" id="myReporteeExpenses" name="expenseType" />
          <label htmlFor="">My Reportee Expenses</label>
        </div>
      </div>
      <MyExpenseReportForm />
      <div className="space-y-4 rounded-lg bg-white">
        <div className="flex justify-between px-6 pt-4">
          <h1 className="text-xl text-[#445E94]">Expense Report List</h1>
          <Button>Export</Button>
        </div>
        <hr className="text-gray-200" />

        <div className="px-6">
          <Table
            rows={myExpenseReportData}
            columns={myExpenseReportColumns}
            onRefresh={handleRefreshMyExpense}
            loading={loadingMyExpense}
            showPagination
            filterKey="expenseID"
          />
        </div>
      </div>
    </div>
  )
}

export default MyExpenseReportList