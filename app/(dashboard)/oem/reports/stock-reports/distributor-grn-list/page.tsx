"use client"
import Breadcrumb from '@/components/common/ui/BreadCrumb'
import React, { useState } from 'react'
import DistributorGrnListForm from './components/DistributorGrnListForm'
import { FiShare } from 'react-icons/fi'
import Button from '@/components/common/ui/Button'
import Table from '@/components/common/table/Table'
import getDistributorGrnListCol from './components/getDistributorGrnListCol'

const DistributorGrnList = () => {

  const [distributorGrnData, setDistributorGrnData] = useState([
    {
      id: 1,
      srNo:"01",
      grnNumber: "GRN-1001",
      productName: "Amoxycillin Capsules",
      pack: "Box of 10",
      distributorName: "Medico Distributors",
      codeLocation: "Pune Warehouse",
      quantityRecieved: "450",
      remark: "All OK",
      grnDate: "2025-09-28"
    },
    {
      id: 2,
      srNo:"02",
      grnNumber: "GRN-1002",
      productName: "Paracetamol Tablets",
      pack: "Strip of 15",
      distributorName: "Healthy Pharma",
      codeLocation: "Mumbai Hub",
      quantityRecieved: "1200",
      remark: "Batch check advised",
      grnDate: "2025-09-29"
    },
    {
      id: 3,
      srNo:"03",
      grnNumber: "GRN-1003",
      productName: "Glucon-D",
      pack: "500g Pouch",
      distributorName: "Sunrise Agencies",
      codeLocation: "Delhi State Store",
      quantityRecieved: "700",
      remark: "-",
      grnDate: "2025-09-30"
    },
    {
      id: 4,
      srNo:"04",
      grnNumber: "GRN-1004",
      productName: "Hand Sanitizer",
      pack: "Bottle of 250ml",
      distributorName: "SafeMed Supplies",
      codeLocation: "Ahmedabad Centre",
      quantityRecieved: "900",
      remark: "Pack damaged",
      grnDate: "2025-10-01"
    },
    {
      id: 5,
      srNo:"05",
      grnNumber: "GRN-1005",
      productName: "Vitamin D3 Drops",
      pack: "30ml Bottle",
      distributorName: "Wellness Pharma",
      codeLocation: "Kolkata Point",
      quantityRecieved: "560",
      remark: "-",
      grnDate: "2025-10-02"
    }
  ]);


  const [loadingdistributorGrnList, setLoadingDistirbutorGrnList] = useState(false);

  const distributorGrnColumns = getDistributorGrnListCol();

  const handleRefreshDistributorGrnList = () => {
    setLoadingDistirbutorGrnList(true);
    setTimeout(() => {
      setLoadingDistirbutorGrnList(false);
      setDistributorGrnData((prev) => [...prev]); // refresh same data
    }, 1000);
  };

  return (
    <div className='space-y-4'>
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem/dashboard" },
          { label: "Stock Reports", isClickable: false },
          { label: "Distributor GRN List", href: "/oem/reports/stock-reports/distributor-grn-list" },
        ]}
      />
      <h1 className="text-3xl font-semibold text-[#445E94]">Distributor GRN List</h1>
      <div className="space-y-4 rounded-lg bg-white shadow-sm">
        <div className="flex justify-between px-6 pt-4">
          <h1 className="text-xl text-[#445E94]">Distributor GRN List</h1>
        </div>
        <hr className="text-gray-200" />
        <div className="px-6 py-4">
          <DistributorGrnListForm />
        </div>
      </div>
      <div className="space-y-4 rounded-lg bg-white shadow-sm">
        <div className="flex justify-between px-6 pt-4">
          <h1 className="text-xl text-[#445E94]">
            Distributor GRN List
          </h1>
          <div className='flex gap-3'>
            <Button startIcon={<FiShare />} className="cursor-pointer">Export</Button>
          </div>
        </div>
        <hr className="text-gray-200" />

        <div className="px-6 py-4">
          <Table
            rows={distributorGrnData}
            columns={distributorGrnColumns}
            onRefresh={handleRefreshDistributorGrnList}
            loading={loadingdistributorGrnList}
            showPagination
            rowsPerPage={3}
          />
        </div>
      </div>
    </div>
  )
}

export default DistributorGrnList