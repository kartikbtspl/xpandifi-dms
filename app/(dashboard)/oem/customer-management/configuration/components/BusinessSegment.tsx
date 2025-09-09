"use client"
import Button from '@/components/common/ui/Button'
import Input from '@/components/common/ui/Input'
import React, { useState } from 'react'
import getStoreTypeCol from './storeTypeCol'
import Table from '@/components/common/table/Table'

function BusinessSegment() {

  const [segmentData, setSegmentData] = useState([
        {
          id: 1,
          srNo: "1",
          segmentType: "Sole proprietorship",
          action: ''
        },
        {
          id: 2,
          srNo: "2",
          segmentType: "Public Limited Compnay(PLC)",
          action: ''
        },
      ])

      const segmentTypeCols = getStoreTypeCol();
  
    const [loadingSegment, setLoadingSegment] = useState(false);
  
    const handleBusinessSegment = () => {
      setLoadingSegment(true);
      setTimeout(() => {
        setLoadingSegment(false);
        setSegmentData(segmentData);
      }, 1000)};

  return (
    <div className='space-y-6'>
      <div className='flex gap-10 bg-white rounded-lg p-5'>
        <div className='w-1/4'>
          <label>Segment Name</label>
          <Input placeholder='Segament Name' size='sm'/>
        </div>
        <Button className='mt-6'>+ Add Segment Name</Button>
      </div>
      <Table rows={segmentData} columns={segmentTypeCols} onRefresh={handleBusinessSegment} loading={loadingSegment} filterKey='segmentType' rowsPerPage={2}/>
    </div>
  )
}

export default BusinessSegment;