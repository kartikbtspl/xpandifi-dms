"use client"
import Breadcrumb from '@/components/common/ui/BreadCrumb'
import React, { useState } from 'react'
import DistributorReportForm from './components/DistributorReportForm'
import Button from '@/components/common/ui/Button'
import { FiShare } from 'react-icons/fi'
import getDistributorReportCol from './components/getDistributorReportCol'
import Table from '@/components/common/table/Table'
import DistributorReportBarChart from './components/DistributorReportBarChart'
// import your chart/graph component if needed, e.g. import DistributorGraph from './components/DistributorGraph';

const DistributorReports = () => {
  const [distributorReportData, setDistributorReportData] = useState([
    { id: 1, srNo: "01", routeName: "", amount: "", status: "" },
    { id: 2, srNo: "02", routeName: "", amount: "", status: "" },
    { id: 3, srNo: "03", routeName: "", amount: "", status: "" },
    { id: 4, srNo: "04", routeName: "", amount: "", status: "" },
    { id: 5, srNo: "05", routeName: "", amount: "", status: "" },
  ]);

  const chartData = [
    { name: "Customers", amount: 28, order: 32 },
  ];
  const [loadingDistributorReport, setLoadingDistributorReport] = useState(false);

  const distributorReportColumns = getDistributorReportCol();

  const handleRefreshDistributorReport = () => {
    setLoadingDistributorReport(true);
    setTimeout(() => {
      setLoadingDistributorReport(false);
      setDistributorReportData((prev) => [...prev]); // refresh same data
    }, 1000);
  };

  const [showGraph, setShowGraph] = useState(false);

  return (
    <div className='space-y-4'>
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem/dashboard" },
          { label: "Target Reports", isClickable: false },
          { label: "Distributor Report", href: "/oem/reports/performance-reports/distributor-reports" },
        ]}
      />
      <h1 className="text-3xl font-semibold text-[#445E94]">Distributor Report</h1>
      <div className="space-y-4 rounded-lg bg-white shadow-sm">
        <div className="flex justify-between px-6 pt-4">
          <h1 className="text-xl text-[#445E94]">Distributor Report</h1>
        </div>
        <hr className="text-gray-200" />
        <div className="">
          <DistributorReportForm />
        </div>
      </div>
      <div className='bg-white rounded-full shadow-sm p-1'>
        <Button className='cursor-pointer' onClick={() => setShowGraph(prev => !prev)}>
          {showGraph ? "List View" : "Show Graph"}
        </Button>
      </div>
      <div className="space-y-4 rounded-lg bg-white shadow-sm">
        {/* Conditionally render headers/content depending on view */}
        {showGraph ? (
          <>
            <div className="flex justify-between px-6 pt-4">
              <h1 className="text-xl text-[#445E94]">
                Route Wise Graph
              </h1>
              <div className="flex gap-3">
                <Button startIcon={<FiShare />} className="cursor-pointer">
                  Export
                </Button>
              </div>
            </div>
            <hr className="text-gray-200" />
            {/* Graph or custom content goes here */}
            <div className="pr-6 flex justify-center items-center">
              <DistributorReportBarChart
                title="Kilometers"
                data={chartData}
                barColorAmount="#4F6D9F"
                barColorOrder="#D56F7A"
              />
            </div>
          </>
        ) : (
          <>
            <div className="flex justify-between px-6 pt-4">
              <h1 className="text-xl text-[#445E94]">
                Route Wise List
              </h1>
              <div className='flex gap-3'>
                <Button startIcon={<FiShare />} className="cursor-pointer">Export</Button>
              </div>
            </div>
            <hr className="text-gray-200" />
            <div className="px-6 py-4">
              <Table
                rows={distributorReportData}
                columns={distributorReportColumns}
                onRefresh={handleRefreshDistributorReport}
                loading={loadingDistributorReport}
                showPagination
                rowsPerPage={3}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default DistributorReports;
