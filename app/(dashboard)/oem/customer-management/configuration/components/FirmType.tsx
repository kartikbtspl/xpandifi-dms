"use client"
import Button from '@/components/common/ui/Button'
import Input from '@/components/common/ui/Input'
import React, { useState } from 'react'
import getStoreTypeCol from './storeTypeCol'
import Table from '@/components/common/table/Table'

function FirmType() {

  const [firmTypeData, setFirmTypeData] = useState([
        {
          id: 1,
          srNo: "1",
          type: "Sole proprietorship",
          action: ''
        },
        {
          id: 2,
          srNo: "2",
          type: "Public Limited Compnay(PLC)",
          action: ''
        },
      ])

      const firmTypeCols = getStoreTypeCol();
  
    const [loadingFirmType, setLoadingFirmType] = useState(false);
  
    const handleRefreshFirmtype = () => {
      setLoadingFirmType(true);
      setTimeout(() => {
        setLoadingFirmType(false);
        setFirmTypeData(firmTypeData);
      }, 1000)};

  return (
    <div className='space-y-6'>
      <div className='flex gap-10 bg-white rounded-lg p-5'>
        <div className='w-1/4'>
          <label>Name</label>
          <Input placeholder='Firm type' size='sm'/>
        </div>
        <Button className='mt-6'>+ Add Firm Type</Button>
      </div>
      <Table rows={firmTypeData} columns={firmTypeCols} onRefresh={handleRefreshFirmtype} loading={loadingFirmType} filterKey='firmTypeName' rowsPerPage={2}/>
    </div>
  )
}

export default FirmType