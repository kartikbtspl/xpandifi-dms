"use client"
import React, { useState } from 'react'
import LeadTypeForm from './LeadTypeForm'
import getLeadTypeCol from './leadTypeColumn';
import Table from '@/components/common/table/Table';
import getSourceCol from './sourceColumn'; 
import SourceForm from './SourceForm';

function Source() {

  const [sourceData, setSourceData] = useState([
    { id: 1,srNo: "1", leadSourceName: 'Retail', sequence: 1, action: "" },
    { id: 2,srNo: "2", leadSourceName: 'Wholesale', sequence: 2, action: "" },
    { id: 3,srNo: "3", leadSourceName: 'Online', sequence: 3, action: "" },
  ])

  const [loadingSource, setloadingSource] = useState(false);

  const sourceColumns = getSourceCol();

  const handleRefreshSource = () => {
      setloadingSource(true);
      setTimeout(() => {
        setloadingSource(false);
        setSourceData(sourceData);
      }, 1000)};


  return (
    <div className='space-y-4'>
      <SourceForm />
      <Table rows={sourceData} columns={sourceColumns} loading={loadingSource} onRefresh={handleRefreshSource} filterKey='leadSourceName'/>
    </div>
  )
}

export default Source