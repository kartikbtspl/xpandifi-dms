"use client";

import Breadcrumb from '@/components/common/ui/BreadCrumb';
import React, { useState, useEffect } from 'react';
import CheckInCheckOutForm from './components/CheckInCheckOutForm';
import Table from '@/components/common/table/Table';
import getCheckInCheckOutCol from './components/getCheckInCheckOutCol';

// Example MapView placeholder component
const MapView = () => (
  <iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d643.397090933866!2d73.77143516770276!3d18.5518849608926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9ddad3f2e59%3A0x219a979e13a0f7a8!2sBrilliantech%20Software%20-%20Ai%20%26%20Digital%20Transformation%20Solutions!5e0!3m2!1sen!2sin!4v1759471005632!5m2!1sen!2sin"
    width="100%" height="450" loading="lazy" style={{ border: 0 }}
    title="Location Map"
  ></iframe>
);

const CheckInCheckOut = () => {
  const [activeCheckInCheckOutData, setActiveCheckInCheckOutData] = useState([
    {
      id: 1,
      srNo: "01",
      userName: "John Doe",
      checkInTime: "2025-10-03 09:15 AM",
      checkInLocation: "Head Office - Mumbai",
      checkOutTime: "",
      checkOutLocation: "",
      createdDate: "2025-10-03",
      action: "Pending Checkout"
    },
    {
      id: 2,
      srNo: "02",
      userName: "Jane Smith",
      checkInTime: "2025-10-03 08:50 AM",
      checkInLocation: "Branch Office - Pune",
      checkOutTime: "",
      checkOutLocation: "",
      createdDate: "2025-10-03",
      action: "Pending Checkout"
    },
    {
      id: 3,
      srNo: "03",
      userName: "Rahul Verma",
      checkInTime: "2025-10-03 10:05 AM",
      checkInLocation: "Warehouse - Nashik",
      checkOutTime: "",
      checkOutLocation: "",
      createdDate: "2025-10-03",
      action: "Pending Checkout"
    },
  ]);

  const [archiveCheckInCheckOutData, setArchiveCheckInCheckOutData] = useState([
    {
      id: 1,
      srNo: "01",
      userName: "Amit Sharma",
      checkInTime: "2025-10-01 09:10 AM",
      checkInLocation: "Head Office - Mumbai",
      checkOutTime: "2025-10-01 06:25 PM",
      checkOutLocation: "Head Office - Mumbai",
      createdDate: "2025-10-01",
      action: "Completed"
    },
  ]);

  const [showArchive, setShowArchive] = useState(false);
  const [activeData, setActiveData] = useState(activeCheckInCheckOutData);
  const [loadingCheckData, setLoadingCheckData] = useState(false);

  // Track which button is active for styling: "toggleUserView" or "showMapView"
  const [activeButton, setActiveButton] = useState("toggleUserView");
  // Show map or table view toggle
  const [showMapView, setShowMapView] = useState(false);

  const checkInCheckOutColumns = getCheckInCheckOutCol();

  // Sync activeData when active/archive data changes or showArchive changes, but only if not in map view
  useEffect(() => {
    if (!showMapView) {
      setActiveData(showArchive ? archiveCheckInCheckOutData : activeCheckInCheckOutData);
    }
  }, [showArchive, activeCheckInCheckOutData, archiveCheckInCheckOutData, showMapView]);

  const toggleUserView = () => {
    setShowArchive(!showArchive);
    setActiveButton("toggleUserView");
    setShowMapView(false);
  };

  const showMap = () => {
    setActiveButton("showMapView");
    setShowMapView(true);
  };

  const handleRefreshCheckInCheckOut = () => {
    setLoadingCheckData(true);
    setTimeout(() => {
      setLoadingCheckData(false);
      if (!showMapView) {
        setActiveData(showArchive ? archiveCheckInCheckOutData : activeCheckInCheckOutData);
      }
    }, 1000);
  };

  return (
    <div className="space-y-4">
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem/dashboard" },
          { label: "Sales Reports", isClickable: false },
          { label: "Check-In Check-Out", href: "/oem/reports/sales-reports/check-in-check-out" },
        ]}
      />
      <h1 className="text-3xl font-semibold text-[#445E94]">Check-In Check-Out</h1>
      <div className="space-y-4 rounded-lg bg-white">
        <div className="flex justify-between px-6 pt-4">
          <h1 className="text-xl text-[#445E94]">Search for Check In and Check Out Report</h1>
        </div>
        <hr className="text-gray-200" />
        <div className="px-6 py-4">
          <CheckInCheckOutForm />
        </div>
      </div>
      <div className="w-full rounded-full bg-white">
        <div className="flex p-1 gap-2">
          <button
            onClick={toggleUserView}
            className={`px-4 py-2 rounded-full cursor-pointer font-medium ${
              activeButton === "toggleUserView"
                ? "bg-[#445E94] text-white border-[#445E94]"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            {showArchive ? "Show Active Users" : "Show Archive Users"}
          </button>
          <button
            onClick={showMap}
            className={`px-4 py-2 rounded-full cursor-pointer font-medium ${
              activeButton === "showMapView"
                ? "bg-[#445E94] text-white border-[#445E94]"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            Show Map View
          </button>
        </div>
      </div>
      {/* Render map or table based on showMapView */}
      <div>
        {showMapView ? (
          <MapView />
        ) : (
          <Table
            rows={activeData}
            columns={checkInCheckOutColumns}
            onRefresh={handleRefreshCheckInCheckOut}
            loading={loadingCheckData}
            showPagination
            rowsPerPage={3}
          />
        )}
      </div>
    </div>
  );
};

export default CheckInCheckOut;
