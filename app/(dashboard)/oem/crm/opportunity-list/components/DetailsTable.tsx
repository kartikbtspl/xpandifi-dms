"use client"
import Button from '@/components/common/ui/Button'
import React, { useState } from 'react'
import getDetailsCol from './detailsColumn';
import Table from '@/components/common/table/Table';

function DetailsTable() {

  const [detailsData, setDetailsData] = useState([
      { id: 1, srNo: "01", ID: 'FMI/20240724/MI', opportunityName: "", assignTo: "", stage: "", closeDate: "", value: "", createdDate: "04/10/2024", leadId:"", status: "Active", action: ""},
      { id: 2, srNo: "02", ID: 'FMI/20240724/MI', opportunityName: "", assignTo: "", stage: "", closeDate: "", value: "", createdDate: "04/10/2024", leadId:"", status: "Active", action: ""},
      { id: 3, srNo: "03", ID: 'FMI/20240724/MI', opportunityName: "", assignTo: "", stage: "", closeDate: "", value: "", createdDate: "04/10/2024", leadId:"", status: "Active", action: ""},
    ])
  
    const [loadingDetails, setloadingDetails] = useState(false);
  
    const detailsColumn = getDetailsCol();
  
    const handleRefreshDetails = () => {
      setloadingDetails(true);
      setTimeout(() => {
        setloadingDetails(false);
        setDetailsData(detailsData);
      }, 1000)
    };

  return (
    <div className='space-y-4 bg-white p-6 rounded-xl shadow-sm'>
      <div className='flex justify-between items-center '>
        <div>
          <h1 className='text-xl font-semibold text-[#445E94]'>Opportunity Details</h1>
        </div>
        <div className='flex gap-4'>
          <Button variant='outline'>Import</Button>
          <Button>Export</Button>
        </div>
      </div>
      <hr className='text-gray-200' />
      <Table rows={detailsData} columns={detailsColumn} loading={loadingDetails} onRefresh={handleRefreshDetails} filterKey='opportunityName' />
    </div>
  )
}

export default DetailsTable