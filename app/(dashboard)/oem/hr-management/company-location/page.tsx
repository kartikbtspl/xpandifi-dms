"use client"
import Breadcrumb from '@/components/common/ui/BreadCrumb'
import React, { useState } from 'react'
import CompanyLocationForm from "./components/CompanyLocationForm"
import MapView from './components/MapView'
import getCompanyLocationCol from './components/getComapnyLocationCol'
import Table from '@/components/common/table/Table'

const CompanyLocation = () => {

  const [companyLocationData, setCompanyLocationData] = useState([
    {
      id: 1,
      srNo: "01",
      companyLocationName: "",
      companyLocationCode: "",
      officeLocation: "",
      address: "",
      lat: "",
      long: "",
      action: "",
    },
    {
      id: 2,
      srNo: "02",
      companyLocationName: "",
      companyLocationCode: "",
      officeLocation: "",
      address: "",
      lat: "",
      long: "",
      action: "",
    },
  ]);

  const [loadingCompanyLocation, setLoadingCompanyLocation] = useState(false);

  const companyLocationColumns = getCompanyLocationCol();

  const handleRefreshCompanyLocation = () => {
    setLoadingCompanyLocation(true);
    setTimeout(() => {
      setLoadingCompanyLocation(false);
      setCompanyLocationData((prev) => [...prev]); // refresh same data
    }, 1000);
  };

  const handleFormSubmit = (data: any) => {
    console.log("Form submitted data:", data)
    // 🔼 You can save this in state, call API, etc.
  }
  return (
    <div className='space-y-4'>
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem" },
          { label: "HR Management", href: "/oem/hr-management" },
          {
            label: "Comapny Location",
            href: "/oem/hr-management/company-location",
          },
        ]}
      />
      <h1 className="text-3xl font-semibold text-[#445E94]">Comapny Location</h1>
      <CompanyLocationForm onSubmitData={handleFormSubmit} />
      <MapView />
      <Table
        rows={companyLocationData}
        columns={companyLocationColumns}
        onRefresh={handleRefreshCompanyLocation}
        loading={loadingCompanyLocation}
        showPagination
        rowsPerPage={3}
      />
    </div>
  )
}

export default CompanyLocation