"use client"
import Button from '@/components/common/ui/Button'
import Input from '@/components/common/ui/Input'
import React, { useState } from 'react'
import Table from '@/components/common/table/Table'
import getClassTypeCol from "./typeCol"

function ClassType() {

  const [classTypeData, setClassTypeData] = useState([
      {
        id: 1,
        srNo: "1",
        type : "Confirmed",
        sequence: "1",
        frequency: "1",
        action: ""
      },
      {
        id: 2,
        srNo: "2",
        type : "Confirmed",
        sequence: "1",
        frequency: "1",
        action: ""
      },
    ])
  
    const classTypeColumns = getClassTypeCol()
  
    const [loadingClassType, setLoadingClassType] = useState(false);
  
    const handleRefreshClassType = () => {
      setLoadingClassType(true);
      setTimeout(() => {
        setLoadingClassType(false);
        setClassTypeData(classTypeData);
      }, 1000)};

  return (
    <div className='space-y-6'>
      <div className="flex gap-10 p-6 justify-between bg-white rounded-lg">
        <div>
          <label className="block mb-1">Type</label>
          <Input placeholder="Class Type Name" />
        </div>
        <div>
          <label className="block mb-1">Frequency</label>
          <Input placeholder="1" />
        </div>
        <div>
          <label className="block mb-1">Sequence</label>
          <Input placeholder="1" />
        </div>
        <div className="mt-7">
          <Button>+ Add Class Type</Button>
        </div>
      </div>
      <Table rows={classTypeData} columns={classTypeColumns} onRefresh={handleRefreshClassType} loading={loadingClassType}filterKey='type' rowsPerPage={2}/>
    </div>  
  )
}

export default ClassType