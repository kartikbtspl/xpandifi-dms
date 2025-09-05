"use client"

import React from 'react'
import { useState } from 'react'
import getDocumentCol from './documentCol';
import Table from '@/components/common/table/Table';

function RequiredDocumentCol() {

  const [documentData, setDocumentData] = useState([
      {
        id: 1,
        srNo: "01",
        customerDocumnetName: "Aadhar Card",
        action: ""
      },
      {
        id: 2,
        srNo: "02",
        customerDocumnetName: "Pan Card",
        action : ""
      },
  ])

  const documentColumns = getDocumentCol();

  const [loadingDocument, setLoadingDucument] = useState(false);

  const handleRefreshDocuments = () => {
    setLoadingDucument(true);
    setTimeout(() => {
      setLoadingDucument(false);
      setDocumentData(documentData);
    }, 1000);
  };

  return (
    <div className='space-y-6'>
      <div className='flex justify-end'>
        <button className="flex items-center gap-2 px-4 border border-[#5D6F9E] text-[#5D6F9E] rounded-md text-sm font-medium ">
        <span className="text-lg">+</span>
        Add required documents
      </button>
      </div>
      
      <Table rows={documentData} columns={documentColumns} onRefresh={handleRefreshDocuments} loading = {loadingDocument} filterKey="customerDocumnetName"/>
    </div>
  )
}

export default RequiredDocumentCol