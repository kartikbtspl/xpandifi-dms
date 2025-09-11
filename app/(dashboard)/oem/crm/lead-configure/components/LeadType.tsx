"use client"
import React, { useState } from 'react'
import LeadTypeForm from './LeadTypeForm'
import getLeadTypeCol from './leadTypeColumn';
import Table from '@/components/common/table/Table';

function LeadType() {

  const [leadTypeData, setLeadTypeData] = useState([
    { id: 1, srNo: "1", leadTypeName: 'Retail', sequence: 1, action: "" },
    { id: 2, srNo: "2", leadTypeName: 'Wholesale', sequence: 2, action: "" },
    { id: 3, srNo: "3", leadTypeName: 'Online', sequence: 3, action: "" },
  ])

  const [loadingLeadType, setLoadingLeadType] = useState(false);

  const leadTypeColumns = getLeadTypeCol();

  const handleRefreshLeadtype = () => {
    setLoadingLeadType(true);
    setTimeout(() => {
      setLoadingLeadType(false);
      setLeadTypeData(leadTypeData);
    }, 1000)
  };


  return (
    <div className='space-y-4'>
      <LeadTypeForm />
      <Table rows={leadTypeData} columns={leadTypeColumns} loading={loadingLeadType} onRefresh={handleRefreshLeadtype} filterKey='leadTypeName' />
    </div>
  )
}

export default LeadType