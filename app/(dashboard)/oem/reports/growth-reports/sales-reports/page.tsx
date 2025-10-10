"use client";
import Breadcrumb from '@/components/common/ui/BreadCrumb';
import React, { useState } from 'react';
import Button from '@/components/common/ui/Button';
import { FiPlus, FiMinus } from 'react-icons/fi';
import SalesReportForm from './components/SalesReportForm';
import SalesReportBarChart from './components/SalesReportBarChart';
import getSalesReportCol from './components/getSalesReportCol';
import Table from '@/components/common/table/Table';

const SalesReports = () => {
  const [showGraph, setShowGraph] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  const [salesReportData, setSalesReportData] = useState([
    {
      id: 1,
      customerNameCode: "",
      totalAmount: "",
      date: "",
    },
    {
      id: 2,
      customerNameCode: "",
      totalAmount: "",
      date: "",
    },
    {
      id: 3,
      customerNameCode: "",
      totalAmount: "",
      date: "",
    },
    {
      id: 4,
      customerNameCode: "",
      totalAmount: "",
      date: "",
    },
    {
      id: 5,
      customerNameCode: "",
      totalAmount: "",
      date: "",
    },
  ])

  const sampleChartData = [
    { name: "1 Sep 2025", value: 0 },
    { name: "5 Sep 2025", value: 0 },
    { name: "10 Sep 2025", value: 1400 },
    { name: "15 Sep 2025", value: 0 },
    { name: "20 Sep 2025", value: 0 },
    { name: "25 Sep 2025", value: 0 },
    { name: "30 Sep 2025", value: 0 },
  ];

  const [loadingSalesReport, setLoadingSalesReport] = useState(false);

  const salesReportColumns = getSalesReportCol();

  const handleRefreshSalesReport = () => {
    setLoadingSalesReport(true);
    setTimeout(() => {
      setLoadingSalesReport(false);
      setSalesReportData((prev) => [...prev]); // refresh same data
    }, 1000);
  };

  const handleToggleGraph = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300); // match CSS transition time
    setShowGraph(prev => !prev);
  };

  return (
    <div className='space-y-4'>
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem/dashboard" },
          { label: "Stock Reports", isClickable: false },
          { label: "Sales Report", href: "/oem/reports/growth-reports/sales-reports" },
        ]}
      />
      <h1 className="text-3xl font-semibold text-[#445E94]">Growth Report - Sales Person</h1>
      <div className="space-y-4 rounded-lg bg-white shadow-sm">
        <div className="flex justify-between px-6 pt-4">
          <h1 className="text-xl text-[#445E94]">Growth Report - Route Wise Report</h1>
        </div>
        <hr className="text-gray-200" />
        <div className="px-6 py-4">
          <SalesReportForm />
        </div>
      </div>
      <div className="space-y-4 rounded-lg bg-white shadow-sm">
        <div className="flex justify-between px-6 pt-4">
          <h1 className="text-xl text-[#445E94]">Daily Sales Person Graph</h1>
          <div className='flex gap-3'>
            <Button
              className={`cursor-pointer transition-transform duration-300`}
              onClick={handleToggleGraph}
              size="sm"
              variant="outline"
            >
              {showGraph ? <FiMinus size={20} /> : <FiPlus size={20} />}
            </Button>
          </div>
        </div>
        <hr className="text-gray-200" />
        <div
          className={`px-6 py-4 transition-all duration-500 ${showGraph ? 'opacity-100 max-h-[500px]' : 'opacity-0 max-h-0 overflow-hidden'
            }`}
        >
          <SalesReportBarChart
            title="September 2025"
            data={sampleChartData}
            barColor="#4F6D9F"
          />
        </div>
        <p className='p-6'>Note:- To check all records, drag the mouse on map and select pan button() from upper right corner. After that drag mouse right or left to check the records.</p>
      </div>
      <Table
        rows={salesReportData}
        columns={salesReportColumns}
        onRefresh={handleRefreshSalesReport}
        loading={loadingSalesReport}
        showPagination
        rowsPerPage={3}
      />
    </div>
  );
};

export default SalesReports;
