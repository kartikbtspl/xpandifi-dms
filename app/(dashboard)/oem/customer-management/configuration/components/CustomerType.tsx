"use client"
import Button from '@/components/common/ui/Button'
import Input from '@/components/common/ui/Input'
import React, { useState } from 'react'
import getCustomerTypeCol from './customerTypeCol'
import Table from '@/components/common/table/Table'

function CustomerType() {

  const [typeData, setTypeData] = useState([
    {
      id: 1,
      srNo: "1",
      customerType: "Confirmed",
      customerSubType: "Confirmed",
      action: ""
    },
    {
      id: 2,
      srNo: "2",
      customerType: "Confirmed",
      customerSubType: "Confirmed",
      action: ""
    },
  ])

  const customerTypeColumns = getCustomerTypeCol();

  const [loadingType, setLoadingType] = useState(false);

  const handleRefreshCustomerType = () => {
    setLoadingType(true);
    setTimeout(() => {
      setLoadingType(false);
      setTypeData(typeData);
    }, 1000)};


    return (
      <div className='space-y-6 '>
        <div className='flex gap-10 p-6 pr-[100px] bg-white'>
          <div>
            <label>Main Type :</label>
            <Input placeholder='Customer type' />
          </div>
          <div>
            <label>Sub type :</label>
            <Input placeholder='Customer sub type' />
          </div>
          <div className='mt-7'>
            <Button>+ Add cutsomer type</Button>
          </div>
        </div>
        <div>
          <Table rows={typeData} columns={customerTypeColumns} onRefresh={handleRefreshCustomerType} loading={loadingType} filterKey='customerType' rowsPerPage={2}/>
        </div>
      </div>
    )
  }

  export default CustomerType