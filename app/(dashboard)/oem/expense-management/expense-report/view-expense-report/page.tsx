"use client"
import Breadcrumb from '@/components/common/ui/BreadCrumb'
import React, { useState } from 'react'
import ViewExpenseForm from './components/ViewExpeneForm'
import getViewExpenseReportCol from './components/getViewExpeneReportCol'
import Table from '@/components/common/table/Table'
import Button from '@/components/common/ui/Button'
import { useRouter } from 'next/navigation'

function ViewExpenseReport() {
  const [viewExpenseData, setViewExpenseData] = useState([
    {
      id: 1,
      srNo: "01",
      expenseDate: "15/09/2025",
      expenseType: "TA",
      expenseCode: "3",
      mode: "TA",
      from: "India",
      to: "",
      actualAmount: "12,000",
      approvedAmount: "12,000",
      actualKm: "121",
      billImage: "NA",
    },
    {
      id: 2,
      srNo: "02",
      expenseDate: "15/09/2025",
      expenseType: "DA",
      expenseCode: "1",
      mode: "DA",
      from: "India",
      to: "",
      actualAmount: "12,000",
      approvedAmount: "12,000",
      actualKm: "121",
      billImage: "NA",
    },
    {
      id: 3,
      srNo: "03",
      expenseDate: "15/09/2025",
      expenseType: "DA",
      expenseCode: "1",
      mode: "DA",
      from: "India",
      to: "",
      actualAmount: "12,000",
      approvedAmount: "12,000",
      actualKm: "121",
      billImage: "NA",
    },
  ])

  const router = useRouter();

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<any>(null);

  const [loadingViewExpense, setLoadingViewExpense] = useState(false);

  // ✅ Handle View Action
  const handleView = (row: any) => {
    // setSelectedRow(row);
    // setIsViewModalOpen(true);
    router.push('/oem/expense-management/expense-report/view-expense-list-details')
    console.log("Viewing row:", row);
  };

  // ✅ Handle Edit Action
  const handleEdit = (row: any) => {
    setSelectedRow(row);
    setIsEditModalOpen(true);
  };

  // ✅ Save Edited Data
  const handleSaveEdit = (updatedRow: any) => {
    setViewExpenseData((prev) =>
      prev.map((item) => (item.id === updatedRow.id ? updatedRow : item))
    );
  };

  // ✅ Update columns with new props
  const viewExpenseColumns = getViewExpenseReportCol(handleView, handleEdit)

  const handleRefreshViewExpense = () => {
    setLoadingViewExpense(true);
    setTimeout(() => {
      setLoadingViewExpense(false);
      setViewExpenseData(viewExpenseData);
    }, 1000)
  };

  return (
    <div className='space-y-4'>
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem/dashboard" },
          { label: "Expense Management", href: "/oem/expense-management" },
          {
            label: "Advanced Report",
            href: "/oem/expense-management/expense-report",
          },
        ]}
      />
      <h1 className="text-3xl text-[#445E94] font-semibold">Advanced Report</h1>
      <ViewExpenseForm />
      <div className='flex flex-col gap-4 bg-white rounded-lg'>
        <div className='px-6 pt-4'>
          <h1 className='text-[#445E94]'>Expense List</h1>
        </div>
        <hr className='text-gray-200'/>
        <div className='p-6'>
          <Table
            rows={viewExpenseData}
            columns={viewExpenseColumns}
            onRefresh={handleRefreshViewExpense}
            loading={loadingViewExpense}
            showPagination
            filterKey='expenseType'
          />
        </div>
        <div className='flex justify-center mb-4 gap-3 items-center'>
          <Button>Approve</Button>
          <Button variant='outline'>Reject</Button>
          <Button>Back</Button>
        </div>
      </div>
    </div>
  )
}

export default ViewExpenseReport
