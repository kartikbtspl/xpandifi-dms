"use client"
import Breadcrumb from '@/components/common/ui/BreadCrumb'
import React, { useState } from 'react'
import ProductReportForm from './components/ProductReportForm'
import Button from '@/components/common/ui/Button'
import { FiUpload } from 'react-icons/fi'
import getProductReportCol from './components/getProductReportCol'
import Table from '@/components/common/table/Table'

const ProductReports = () => {

  const [productReportData, setProductReportData] = useState([
      { id: 1, srNo: "01", productName: "",productCode: "", pack: "", amount: "", quantity: "" },
      { id: 2, srNo: "02", productName: "",productCode: "", pack: "", amount: "", quantity: "" },
      { id: 3, srNo: "03", productName: "",productCode: "", pack: "", amount: "", quantity: "" },
      { id: 4, srNo: "04", productName: "",productCode: "", pack: "", amount: "", quantity: "" },
      { id: 5, srNo: "05", productName: "",productCode: "", pack: "", amount: "", quantity: "" },
    ]);
  
    const [loadingProductReport, setLoadingProductReport] = useState(false);
  
    const productReportColumns = getProductReportCol();
  
    const handleRefreshProductReport = () => {
      setLoadingProductReport(true);
      setTimeout(() => {
        setLoadingProductReport(false);
        setProductReportData((prev) => [...prev]); // refresh same data
      }, 1000);
    };

  return (
    <div className='space-y-4'>
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem/dashboard" },
          { label: "Target Reports", isClickable: false },
          { label: "Product Report", href: "/oem/reports/performance-reports/product-reports" },
        ]}
      />
      <h1 className="text-3xl font-semibold text-[#445E94]">Product Report</h1>
      <div className="space-y-4 rounded-lg bg-white shadow-sm">
        <div className="flex justify-between px-6 pt-4">
          <h1 className="text-xl text-[#445E94]">Product Report</h1>
        </div>
        <hr className="text-gray-200" />
        <div className="">
          <ProductReportForm />
        </div>
      </div>
      <div className="space-y-4 rounded-lg bg-white shadow-sm">
        <div className="flex justify-between px-6 pt-4">
          <h1 className="text-xl text-[#445E94]">
            Product Report List
          </h1>
          <div>
            <Button startIcon={<FiUpload />}>Export</Button>
          </div>
        </div>
        <hr className="text-gray-200" />

        <div className="px-6">
          <Table
            rows={productReportData}
            columns={productReportColumns}
            onRefresh={handleRefreshProductReport}
            loading={loadingProductReport}
            showPagination
            rowsPerPage={3}
          />
        </div>
      </div>
    </div>
  )
}

export default ProductReports