"use client"
import Button from '@/components/common/ui/Button'
import Input from '@/components/common/ui/Input'
import React, { useState } from 'react'
import getStoreTypeCol from './storeTypeCol'
import Table from '@/components/common/table/Table'

function StoreType() {

  const [storeTypeData, setStoreTypeData] = useState([
        {
          id: 1,
          srNo: "1",
          storeTypeName: "Confirmed",
          action: ''
        },
        {
          id: 2,
          srNo: "2",
          storeTypeName: "Confirmed",
          action: ''
        },
      ])

      const storeTypeCols = getStoreTypeCol();
  
    const [loadingStoreType, setLoadingStoreType] = useState(false);
  
    const handleRefreshStoretype = () => {
      setLoadingStoreType(true);
      setTimeout(() => {
        setLoadingStoreType(false);
        setStoreTypeData(storeTypeData);
      }, 1000)};

  return (
    <div className='space-y-6'>
      <div className='flex gap-10 bg-white rounded-lg p-5'>
        <div className='w-1/4'>
          <label>Store Type Name</label>
          <Input placeholder='Store type name' size='sm'/>
        </div>
        <Button className='mt-6'>+ Add new store type</Button>
      </div>
      <Table rows={storeTypeData} columns={storeTypeCols} onRefresh={handleRefreshStoretype} loading={loadingStoreType} filterKey='storeTypeName' rowsPerPage={2}/>
    </div>
  )
}

export default StoreType