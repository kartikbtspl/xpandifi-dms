"use client"

import Breadcrumb from '@/components/common/ui/BreadCrumb'
import React, { useState } from 'react'
import CompanyStockForm from './components/CompanyStockForm'
import Button from '@/components/common/ui/Button'
import Table from '@/components/common/table/Table'
import { FiDownload, FiShare } from 'react-icons/fi'
import getCompanyStockCol from './components/getCompanyStockCol'
import { useRouter } from 'next/navigation'

const CompanyStock = () => {
  const [companyStockData, setCompanyStockData] = useState([
    {
      id: 1,
      grnNumber: "-",
      productName: "-",
      pack: "-",
      codeLocation: "-",
      quantityRecieved: "-",
      remark: "",
      grnDate: "",
    },
  ]);

  const router = useRouter();

  const [loadingCompanyStockList, setLoadingCompanyStockList] = useState(false);

  const companyStockColumns = getCompanyStockCol();

  const handleRefreshCompanyStockList = () => {
    setLoadingCompanyStockList(true);
    setTimeout(() => {
      setLoadingCompanyStockList(false);
      setCompanyStockData((prev) => [...prev]); // refresh same data
    }, 1000);
  };
  return (
    <div className='space-y-4'>
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem/dashboard" },
          { label: "Stock Reports", isClickable: false },
          { label: "Company Stock", href: "/oem/reports/stock-reports/company-stock" },
        ]}
      />
      <h1 className="text-3xl font-semibold text-[#445E94]">Primary Stock</h1>
      <div className="space-y-4 rounded-lg bg-white shadow-sm">
        <div className="flex justify-between px-6 pt-4">
          <h1 className="text-xl text-[#445E94]">Primary GRN List</h1>
        </div>
        <hr className="text-gray-200" />
        <div className="px-6 py-4">
          <CompanyStockForm />
        </div>
      </div>
      <div className='flex justify-end'>
        <Button className='cursor-pointer' onClick={() => router.push('/oem/reports/stock-reports/company-stock/add-company-stock')}><span className='text-xl mr-3'>+</span>Add Stock</Button>
      </div>
      <div className="space-y-4 rounded-lg bg-white shadow-sm">
        <div className="flex justify-between px-6 pt-4">
          <h1 className="text-xl text-[#445E94]">
            Total Amount = 0 INR
          </h1>
          <div className='flex gap-3'>
            <Button startIcon={<FiDownload />} variant='outline'>Import </Button>
            <Button startIcon={<FiShare />} className="cursor-pointer">Export</Button>
          </div>
        </div>
        <hr className="text-gray-200" />

        <div className="px-6 py-4">
          <Table
            rows={companyStockData}
            columns={companyStockColumns}
            onRefresh={handleRefreshCompanyStockList}
            loading={loadingCompanyStockList}
            showPagination
            rowsPerPage={3}
          />
        </div>
      </div>
    </div>
  )
}

export default CompanyStock