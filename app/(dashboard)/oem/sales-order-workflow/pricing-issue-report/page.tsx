"use client"
import Breadcrumb from '@/components/common/ui/BreadCrumb'
import React, { useState } from 'react'
import getPricingIssueReportCol from './components/getPricingIssueReportCol';
import Table from '@/components/common/table/Table';

function PricingIssueReport() {

  const [pricingIssueReportData, setPricingIssueReportData] = useState([
    {
      id: 1,
      srNo: "01",
      salesPerson: "-",
      customer: "-",
      plant: "-",
      date: "-",
      status: "-",
      total: "-",
      address: "-",
      approvalStatus: "-",
      action: "-"
    },
    {
      id: 2,
      srNo: "02",
      salesPerson: "-",
      customer: "-",
      plant: "-",
      date: "-",
      status: "-",
      total: "-",
      address: "-",
      approvalStatus: "-",
      action: "-"
    },
    {
      id: 3,
      srNo: "03",
      salesPerson: "-",
      customer: "-",
      plant: "-",
      date: "-",
      status: "-",
      total: "-",
      address: "-",
      approvalStatus: "-",
      action: "-"
    },
  ]);

  const [loadingPricingIssue, setLoadingPricingIssue] = useState(false);

  const pricingIssueReportColumns = getPricingIssueReportCol();

  const handleRefreshPricingIssueReport = () => {
    setLoadingPricingIssue(true);
    setTimeout(() => {
      setLoadingPricingIssue(false);
      setPricingIssueReportData((prev) => [...prev]); // refresh but same data
    }, 1000);
  };

  return (
    <div className='space-y-4'>
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem" },
          { label: "Sales Order Workflow", href: "/oem/sales-order-workflow" },
          { label: "Pricing Issue Report", href: "/oem/sales-order-workflow/pricing-issue-report" },
        ]}
      />
      <h1 className="text-3xl font-semibold text-[#445E94]">Pricing Issue Report</h1>
      <div className="space-y-4 rounded-lg bg-white">
        <div className="flex gap-3 px-6 pt-4">
          <h1 className="text-xl text-[#445E94]">Total Amount = </h1>
          <h1 className="text-xl text-[#445E94]">Total Orders = </h1>
        </div>
        <hr className="text-gray-200" />

        <div className="px-6">
          <Table
            rows={pricingIssueReportData}
            columns={pricingIssueReportColumns}
            onRefresh={handleRefreshPricingIssueReport}
            loading={loadingPricingIssue}
            showPagination
            rowsPerPage={3}
          />
        </div>
      </div>
    </div>
  )
}

export default PricingIssueReport