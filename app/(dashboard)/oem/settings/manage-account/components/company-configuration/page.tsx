"use client"

import React, { useState } from 'react'
import CompanyConfigurationForm from './components/CompanyConfigurationForm'
import Table from '@/components/common/table/Table'
import getCompanyConfigurationCol from './components/getCompanyConfigurationCol';

function CompanyConfiguration() {

  const [companyConfigurationData, setCompanyConfigurationData] = useState([
    {
      id: 1,
      srNo: "01",
      customerType: "",
      classificationName: "",
      action: "",
    },
    {
      id: 2,
      srNo: "02",
      customerType: "",
      classificationName: "",
      action: "",
    },
  ]);

  const [loadingCompanyConfiguration, setLoadingCompanyConfiguration] = useState(false);

  const handleEdit = (row: any) => {
    alert(`Edit clicked for row with id: ${row.id}`);
  }
  const handleDelete = (row: any) => {
    alert(`Delete clicked for row with id: ${row.id}`);
  }

  const companyConfigurationColumns = getCompanyConfigurationCol(handleEdit, handleDelete)

  const handleRefreshCompanyConfiguration = () => {
    setLoadingCompanyConfiguration(true);
    setTimeout(() => {
      setLoadingCompanyConfiguration(false);
      setCompanyConfigurationData(prev => prev.map((item, idx) => ({ ...item, srNo: String(idx + 1) })));
    }, 1000);
  };

  return (
    <div className='space-y-4'>
      <div className="">
        <CompanyConfigurationForm onAdd={(data) => console.log(data)} />
      </div>

      <Table
        rows={companyConfigurationData}
        columns={companyConfigurationColumns}
        onRefresh={handleRefreshCompanyConfiguration}
        loading={loadingCompanyConfiguration}
        showPagination
        rowsPerPage={3}
      />
    </div>
  )
}

export default CompanyConfiguration