"use client"
import React, { useState } from 'react'
import Table from '@/components/common/table/Table';
import getSourceCol from './sourceColumn'; 
import IndustryForm from './IndustryForm';
import getIndustryCol from './industryColumn';

function Industry() {

  const [industryData, setIndustryData] = useState([
    { id: 1,srNo: "1", leadIndustyName: 'Retail', sequence: 1, action: "" },
    { id: 2,srNo: "2", leadIndustyName: 'Wholesale', sequence: 2, action: "" },
    { id: 3,srNo: "3", leadIndustyName: 'Online', sequence: 3, action: "" },
  ])

  const [loadingIndustry, setLoadingIndustry] = useState(false);

  const IndustryColumns = getIndustryCol();

  const handleRefreshIndustry = () => {
      setLoadingIndustry(true);
      setTimeout(() => {
        setLoadingIndustry(false);
        setIndustryData(industryData);
      }, 1000)};


  return (
    <div className='space-y-4'>
      <IndustryForm />
      <Table rows={industryData} columns={IndustryColumns} loading={loadingIndustry} onRefresh={handleRefreshIndustry} filterKey='leadIndustyName'/>
    </div>
  )
}

export default Industry