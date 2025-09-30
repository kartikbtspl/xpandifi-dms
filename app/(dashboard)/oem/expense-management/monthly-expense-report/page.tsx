"use client"
import Breadcrumb from '@/components/common/ui/BreadCrumb'
import React, { useState } from 'react'
import MonthlyExpenseForm from './components/MonthlyExpenseForm'
import getMonthlyExpenseCol from './components/getMonthlyExpeseCol'
import Table from '@/components/common/table/Table'
import Button from '@/components/common/ui/Button'

const MonthlyExpenseReport = () => {

  const [monthlyExpenseData, setMonthlyExpenseData] = useState([
      {
        id: 1,
        srNo: "01",
        expenseID: "EXP123455",
        userName: "Shreyas",
        amount: "20,000",
        createdAt: "2025/09/22",
        comment: "NA",
        status: "pending",
      },
      {
        id: 2,
        srNo: "02",
        expenseID: "EXP123455",
        userName: "Shreyas",
        amount: "20,000",
        createdAt: "2025/09/22",
        comment: "NA",
        status: "pending",
      },
      {
        id: 3,
        srNo: "03",
       expenseID: "EXP123455",
        userName: "Shreyas",
        amount: "20,000",
        createdAt: "2025/09/22",
        comment: "NA",
        status: "pending",
      },
    ])
  
    const [loadingMonthlyExpense, setLoadingMonthlyExpense] = useState(false);
  
    const monthlyExpenseColumns = getMonthlyExpenseCol()
  
    const handleRefreshMonthlyExpense = () => {
      setLoadingMonthlyExpense(true);
      setTimeout(() => {
        setLoadingMonthlyExpense(false);
        setMonthlyExpenseData(monthlyExpenseData);
      }, 1000)
    };

  return (
    <div className='space-y-4'>
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem/dashboard" },
          { label: "Expense Management", href: "/oem/expense-management" },
          {
            label: "Monthly Expese Report",
            href: "/oem/expense-management/monthly-expense-report",
          },
        ]}
      />
      <h1 className="text-3xl text-[#445E94] font-semibold">Manage Expense Configuration</h1>
      <MonthlyExpenseForm />
      <div className="space-y-4 rounded-lg bg-white">
        <div className="flex justify-between px-6 pt-4">
          <h1 className="text-xl text-[#445E94]">Expense List</h1>
          <div className='flex gap-3'>
            <Button>Export</Button>
            <Button>Monthly Export</Button>
          </div>
          
        </div>
        <hr className="text-gray-200" />

        <div className="px-6">
          <Table
            rows={monthlyExpenseData}
            columns={monthlyExpenseColumns}
            onRefresh={handleRefreshMonthlyExpense}
            loading={loadingMonthlyExpense}
            showPagination
            filterKey="expenseID"
          />
        </div>
      </div>
    </div>
  )
}

export default MonthlyExpenseReport