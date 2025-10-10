"use client"
import Breadcrumb from '@/components/common/ui/BreadCrumb'
import React, { useState } from 'react'
import AcquisitionBarChart from './components/AcquisitionBarChart'
import Button from '@/components/common/ui/Button'
import { FiMinus, FiPlus } from 'react-icons/fi'
import getAcquisitionUserCol from './components/getAcquisitionUserCol'
import Table from '@/components/common/table/Table'
import getAcquisitionZoneCol from './components/getAcquisitionZoneCol'
import getAcquisitionKpiCol from './components/getAcquisitionKpiCol'

const AcquisitionDashboard = () => {

  const [userData, setUserData] = useState([
    {
      id: 1,
      srNo: "01",
      userName: "Alice",
      activityDate: "2025-09-20",
      activityDoneFrom: "Mobile App"
    },
    {
      id: 2,
      srNo: "02",
      userName: "Bob",
      activityDate: "2025-09-22",
      activityDoneFrom: "Web Portal"
    },
    {
      id: 3,
      srNo: "03",
      userName: "Cathy",
      activityDate: "2025-09-23",
      activityDoneFrom: "Mobile App"
    }
  ]);
  const [zoneData, setZoneData] = useState([
    {
      id: 1,
      srNo: "01",
      role: "Manager",
      oneWeek: "",
      oneToFourWeeks: "",
      oneToThreeMonths: "",
      threeMonths: "",
      neverLoggedIn: ""
    },
    {
      id: 2,
      srNo: "02",
      role: "Manager",
      oneWeek: "",
      oneToFourWeeks: "",
      oneToThreeMonths: "",
      threeMonths: "",
      neverLoggedIn: ""
    },
    {
      id: 3,
      srNo: "03",
      role: "Manager",
      oneWeek: "",
      oneToFourWeeks: "",
      oneToThreeMonths: "",
      threeMonths: "",
      neverLoggedIn: ""
    }
  ]);
  const [kpiData, setKpiData] = useState([
    {
      id: 1,
      srNo: "01",
      zone: "",
      totalDistributors: "",
      distributorWithout: "",
      withoutDSR: "",
      dsrWithNo: "",
    },
    {
      id: 2,
      srNo: "02",
      zone: "",
      totalDistributors: "",
      distributorWithout: "",
      withoutDSR: "",
      dsrWithNo: "",
    },
    {
      id: 3,
      srNo: "03",
      zone: "",
      totalDistributors: "",
      distributorWithout: "",
      withoutDSR: "",
      dsrWithNo: "",
    }
  ]);
  
  const [showGraph, setShowGraph] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const TABS = ['Pune', 'EAST', 'NORTH', 'SOUTH', 'WEST'];
  const [activeTab, setActiveTab] = useState('Pune');
  const [loadingAcquisitionUser, setLoadingAcquisitionUser] = useState(false);
  const [loadingAcquisitionZone, setLoadingAcquisitionZone] = useState(false);
  const [loadingAcquisitionKpi, setLoadingAcquisitionKpi] = useState(false);

  const acquisitionUserColumns = getAcquisitionUserCol();
  const acquisitionZoneColumns = getAcquisitionZoneCol();
  const acquisitionKpiColumns = getAcquisitionKpiCol();

  const handleRefreshAcquisitionUser = () => {
    setLoadingAcquisitionUser(true);
    setTimeout(() => {
      setLoadingAcquisitionUser(false);
      setUserData((prev) => [...prev]); // refresh same data
    }, 1000);
  };
  const handleRefreshAcquisitionZone = () => {
    setLoadingAcquisitionZone(true);
    setTimeout(() => {
      setLoadingAcquisitionZone(false);
      setZoneData((prev) => [...prev]); // refresh same data
    }, 1000);
  };
  const handleRefreshAcquisitionKpi = () => {
    setLoadingAcquisitionKpi(true);
    setTimeout(() => {
      setLoadingAcquisitionKpi(false);
      setKpiData((prev) => [...prev]); // refresh same data
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
          { label: "MIS Dashboard", isClickable: false },
          { label: "Acquisition Dashboard", href: "/oem/mis-dashboard/acquisition-dashboard" },
        ]}
      />
      <div className="space-y-4 rounded-lg bg-white shadow-sm">
        <div className="flex justify-between px-6 pt-4">
          <div className='flex gap-3'>
            <h1 className="text-xl text-[#445E94]">Activity Trend</h1>
            <select name="" id="" className='border border-gray-300 rounded-sm'>
              <option value="2025">2025</option>
            </select>
            <select name="selectMobileWeb" id="selectMobileWeb" className='border border-gray-300 rounded-sm'>
              <option value="mobile">Login from mobile</option>
              <option value="web">Login from web</option>
              <option value="attendance">Attendance</option>
            </select>
          </div>
          <div>
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
        <div className={` transition-all duration-500 ${showGraph ? 'opacity-100 max-h-[500px]' : 'opacity-0 max-h-0 overflow-hidden'
          }`}>
          <AcquisitionBarChart />
        </div>
      </div>
      <Table
        rows={userData}
        columns={acquisitionUserColumns}
        onRefresh={handleRefreshAcquisitionUser}
        loading={loadingAcquisitionUser}
        showPagination
        rowsPerPage={3}
      />
      <div className="space-y-4 rounded-lg bg-white shadow-sm">
        <div className="flex justify-between px-6 pt-4">
          <h1 className="text-xl text-[#445E94]">
            User Login Report Zone Wise
          </h1>
        </div>
        <hr className="text-gray-200" />
        <div>
          {TABS.map(tab => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={
            `py-3 px-6 font-medium text-base transition-all 
            border-none outline-none cursor-pointer
            ${
              activeTab === tab
                ? 'bg-[#445E94] text-white rounded-md shadow-md'
                : 'bg-transparent text-[#7592B3] hover:bg-gray-100'
            }`
          }
          style={{ minWidth: 80 }}
        >
          {tab}
        </button>
      ))}
        </div>
        <hr className="text-gray-200" />
        <div className="px-6 py-4">
          <Table
            rows={zoneData}
            columns={acquisitionZoneColumns}
            onRefresh={handleRefreshAcquisitionZone}
            loading={loadingAcquisitionZone}
            showPagination
            rowsPerPage={3}
          />
        </div>
      </div>
      <div className="space-y-4 rounded-lg bg-white shadow-sm">
        <div className="flex justify-between px-6 pt-4">
          <h1 className="text-xl text-[#445E94]">
            DSR Login Report
          </h1>
        </div>
        <hr className="text-gray-200" />
        <div className="px-6 py-4">
          <Table
            rows={zoneData}
            columns={acquisitionZoneColumns}
            onRefresh={handleRefreshAcquisitionZone}
            loading={loadingAcquisitionZone}
            showPagination
            rowsPerPage={3}
          />
        </div>
      </div>
      <div className="space-y-4 rounded-lg bg-white shadow-sm">
        <div className="flex justify-between px-6 pt-4">
          <h1 className="text-xl text-[#445E94]">
            KPI
          </h1>
        </div>
        <hr className="text-gray-200" />
        <div className="px-6 py-4">
          <Table
            rows={kpiData}
            columns={acquisitionKpiColumns}
            onRefresh={handleRefreshAcquisitionKpi}
            loading={loadingAcquisitionKpi}
            showPagination
            rowsPerPage={3}
          />
        </div>
      </div>
    </div>
  )
}

export default AcquisitionDashboard