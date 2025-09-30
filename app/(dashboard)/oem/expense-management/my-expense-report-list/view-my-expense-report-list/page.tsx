"use client"
import Breadcrumb from '@/components/common/ui/BreadCrumb'
import React, { useState } from 'react'
import ViewMyExpenseForm from './components/ViewMyExpenseForm'
import getViewMyExpenseReportCol from './components/getViewMyExpenseReportCol'
import { useRouter } from 'next/navigation'
import Button from '@/components/common/ui/Button'
import Table from '@/components/common/table/Table'

function ViewMyExpenseReportList() {

  const [viewMyExpenseData, setViewMyExpenseData] = useState([
      {
        id: 1,
        srNo: "01",
        expenseDetailsID: "256320",
        expenseDate: "15/09/2025",
        expenseType: "TA",
        expenseCode: "3",
        mode: "TA",
        from: "India",
        to: "TA",
        actualAmount: "12,000",
        approvedAmount: "12,000",
        actualKm: "121",
        gps: "121",
        billImage: "NA",
        action:""
      },
      {
        id: 2,
        srNo: "02",
        expenseDetailsID: "256320",
        expenseDate: "15/09/2025",
        expenseType: "TA",
        expenseCode: "3",
        mode: "TA",
        from: "India",
        to: "TA",
        actualAmount: "12,000",
        approvedAmount: "12,000",
        actualKm: "121",
        gps: "121",
        billImage: "NA",
        action:""
      },
      {
        id: 3,
        srNo: "03",
        expenseDetailsID: "256320",
        expenseDate: "15/09/2025",
        expenseType: "TA",
        expenseCode: "3",
        mode: "TA",
        from: "India",
        to: "TA",
        actualAmount: "12,000",
        approvedAmount: "12,000",
        actualKm: "121",
        gps: "121",
        billImage: "NA",
        action:""
      },
    ])
  
    const router = useRouter();
  
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isViewModalOpen, setIsViewModalOpen] = useState(false);
    const [selectedRow, setSelectedRow] = useState<any>(null);
  
    const [loadingViewMyExpense, setLoadingViewMyExpense] = useState(false);
  
    // ✅ Handle View Action
    const handleView = (row: any) => {
      router.push("/oem/expense-management/my-expense-report-list/view-list-form")
      console.log("Viewing row:", row);
    };
  
    // ✅ Handle Edit Action
    const handleEdit = (row: any) => {
      setSelectedRow(row);
      setIsEditModalOpen(true);
    };
  
    // ✅ Save Edited Data
    const handleSaveEdit = (updatedRow: any) => {
      setViewMyExpenseData((prev) =>
        prev.map((item) => (item.id === updatedRow.id ? updatedRow : item))
      );
    };
  
    // ✅ Update columns with new props
    const viewMyExpenseColumns = getViewMyExpenseReportCol(handleView, handleEdit)
  
    const handleRefreshViewMyExpense = () => {
      setLoadingViewMyExpense(true);
      setTimeout(() => {
        setLoadingViewMyExpense(false);
        setViewMyExpenseData(viewMyExpenseData);
      }, 1000)
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
      <h1 className="text-3xl text-[#445E94] font-semibold">View Expense Master</h1>
      <ViewMyExpenseForm />
      <div className="space-y-4 rounded-lg bg-white">
        <div className="flex justify-between px-6 pt-4">
          <h1 className="text-xl text-[#445E94]">Expense Report List</h1>
          <Button>Export</Button>
        </div>
        <hr className="text-gray-200" />

        <div className="px-6 w-[1200px]">
          <Table
            rows={viewMyExpenseData}
            columns={viewMyExpenseColumns}
            onRefresh={handleRefreshViewMyExpense}
            loading={loadingViewMyExpense}
            showPagination
            filterKey="expenseType"
          />
        </div>
      </div>
    </div>
  )
}

export default ViewMyExpenseReportList