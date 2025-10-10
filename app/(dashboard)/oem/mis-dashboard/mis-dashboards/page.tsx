"use client"
import Breadcrumb from '@/components/common/ui/BreadCrumb'
import React, { useState } from 'react'
import MisSalesBarChart from './components/MisSalesBarChart'
import MisDistributorBarChart from './components/MisDistributorBarChart'
import MisCustomerBarChart from './components/MisCustomerBarChart'
import MisProductBarChart from './components/MisProductBarChart'
import MisMonthlyTargetPieChart from './components/MisMonthlyTargetPieChart'
import MisYearlyTargetPieChart from './components/MisYearlyTargetPieChart'
import MisGrowthReportBarChart from './components/MisGrowthReportBarChart'
import Button from '@/components/common/ui/Button'
import { FiMinus, FiPlus } from 'react-icons/fi'

const MisDashboard = () => {
  const [showGraph, setShowGraph] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
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
          { label: "MIS Dashboard", isClickable: false },
          { label: "MIS Dashboards", href: "/oem/mis-dashboard/mis-dashboards" },
        ]}
      />
      <h1 className="text-3xl font-semibold text-[#445E94]">MIS Dashboard</h1>
      <MisSalesBarChart />
      <MisDistributorBarChart />
      <MisCustomerBarChart />
      <MisProductBarChart />
      <div className='flex gap-6'>
        <MisMonthlyTargetPieChart />
        <MisYearlyTargetPieChart />
      </div>
      <div className="space-y-4 rounded-lg bg-white shadow-sm">
        <div className="flex justify-between px-6 pt-4">
          <h1 className="text-xl text-[#445E94]">
            Growth Report Last 6 Months
          </h1>
          <Button
            className={`cursor-pointer transition-transform duration-300`}
            onClick={handleToggleGraph}
            size="sm"
            variant="outline"
          >
            {showGraph ? <FiMinus size={20} /> : <FiPlus size={20} />}
          </Button>
        </div>
        <hr className="text-gray-200" />
        <div className={` transition-all duration-500 ${showGraph ? 'opacity-100 max-h-[500px]' : 'opacity-0 max-h-0 overflow-hidden'
          }`}>
          <MisGrowthReportBarChart />
        </div>
      </div>

    </div>
  )
}

export default MisDashboard