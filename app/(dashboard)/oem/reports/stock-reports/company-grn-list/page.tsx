"use client"
import Breadcrumb from '@/components/common/ui/BreadCrumb'
import React, { useState } from 'react'
import CompanyGrnListForm from './components/CompanyGrnListForm'
import { FiShare } from 'react-icons/fi'
import Button from '@/components/common/ui/Button'
import getCompanyGrnListCol from './components/getCompanyGrnListCol'
import Table from '@/components/common/table/Table'

const CompanyGrnList = () => {

  const [companyGrnData, setCompanyGrnData] = useState([
    {
      id: 1,
      srNo: "01",
      grnNumber: "GRN-1001",
      productName: "Amoxycillin Capsules",
      pack: "Box of 10",
      codeLocation: "Pune Warehouse",
      quantityRecieved: "450",
      remark: "All OK",
      grnDate: "2025-09-28"
    },
    {
      id: 2,
      srNo: "02",
      grnNumber: "GRN-1002",
      productName: "Paracetamol Tablets",
      pack: "Strip of 15",
      codeLocation: "Mumbai Hub",
      quantityRecieved: "1200",
      remark: "Batch check advised",
      grnDate: "2025-09-29"
    },
    {
      id: 3,
      srNo: "03",
      grnNumber: "GRN-1003",
      productName: "Glucon-D",
      pack: "500g Pouch",
      codeLocation: "Delhi State Store",
      quantityRecieved: "700",
      remark: "-",
      grnDate: "2025-09-30"
    },
    {
      id: 4,
      srNo: "04",
      grnNumber: "GRN-1004",
      productName: "Hand Sanitizer",
      pack: "Bottle of 250ml",
      codeLocation: "Ahmedabad Centre",
      quantityRecieved: "900",
      remark: "Pack damaged",
      grnDate: "2025-10-01"
    },
    {
      id: 5,
      srNo: "05",
      grnNumber: "GRN-1005",
      productName: "Vitamin D3 Drops",
      pack: "30ml Bottle",
      codeLocation: "Kolkata Point",
      quantityRecieved: "560",
      remark: "-",
      grnDate: "2025-10-02"
    }
  ]);

  const [loadingCompanyGrnList, setLoadingCompanyGrnList] = useState(false);

  const companyGrnColumns = getCompanyGrnListCol();

  const handleRefreshCompanyGrnList = () => {
    setLoadingCompanyGrnList(true);
    setTimeout(() => {
      setLoadingCompanyGrnList(false);
      setCompanyGrnData((prev) => [...prev]); // refresh same data
    }, 1000);
  };

  return (
    <div className='space-y-4'>
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem/dashboard" },
          { label: "Stock Reports", isClickable: false },
          { label: "Company-GRN-List", href: "/oem/reports/stock-reports/company-grn-list" },
        ]}
      />
      <h1 className="text-3xl font-semibold text-[#445E94]">Company GRN List</h1>
      <div className="space-y-4 rounded-lg bg-white shadow-sm">
        <div className="flex justify-between px-6 pt-4">
          <h1 className="text-xl text-[#445E94]">Primary GRN List</h1>
        </div>
        <hr className="text-gray-200" />
        <div className="px-6 py-4">
          <CompanyGrnListForm />
        </div>
      </div>
      <div className="space-y-4 rounded-lg bg-white shadow-sm">
        <div className="flex justify-between px-6 pt-4">
          <h1 className="text-xl text-[#445E94]">
            Total Amount = 0 INR
          </h1>
          <div className='flex gap-3'>
            <Button startIcon={<FiShare />} className="cursor-pointer">Export</Button>
          </div>
        </div>
        <hr className="text-gray-200" />

        <div className="px-6 py-4">
          <Table
            rows={companyGrnData}
            columns={companyGrnColumns}
            onRefresh={handleRefreshCompanyGrnList}
            loading={loadingCompanyGrnList}
            showPagination
            rowsPerPage={3}
          />
        </div>
      </div>
    </div>
  )
}

export default CompanyGrnList