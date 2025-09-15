"use client"
import Button from '@/components/common/ui/Button'
import React, { useState } from 'react'
import getDetailsCol from '../../opportunity-list/components/detailsColumn';
import Table from '@/components/common/table/Table';
import getLeadListCol from './leadListColumn';

function DetailsTable() {

  const [leadListData, setLeadListData] = useState([
      { id: 1, srNo: "01", ID: 'FMI/20240724/MI', leadName: "Neha Kumari", companyName: "Tata", contactNo: "9999999999", closeDate: "", status: "Assigned", assignTo: "Anup Naik", email:"manager@gmail.com", createdDate: "04/10/2024", opportunityId: "", webiste: "" ,action: ""},
      { id: 2, srNo: "02", ID: 'FMI/20240724/MI', leadName: "Neha Kumari", companyName: "Tata", contactNo: "9999999999", closeDate: "", status: "Assigned", assignTo: "Anup Naik", email:"manager@gmail.com", createdDate: "04/10/2024", opportunityId: "", webiste: "" ,action: ""},
      { id: 3, srNo: "03", ID: 'FMI/20240724/MI', leadName: "Neha Kumari", companyName: "Tata", contactNo: "9999999999", closeDate: "", status: "Assigned", assignTo: "Anup Naik", email:"manager@gmail.com", createdDate: "04/10/2024", opportunityId: "", webiste: "" ,action: ""},
      { id: 4, srNo: "04", ID: 'FMI/20240724/MI', leadName: "Neha Kumari", companyName: "Tata", contactNo: "9999999999", closeDate: "", status: "Assigned", assignTo: "Anup Naik", email:"manager@gmail.com", createdDate: "04/10/2024", opportunityId: "", webiste: "" ,action: ""},
      { id: 5, srNo: "05", ID: 'FMI/20240724/MI', leadName: "Neha Kumari", companyName: "Tata", contactNo: "9999999999", closeDate: "", status: "Assigned", assignTo: "Anup Naik", email:"manager@gmail.com", createdDate: "04/10/2024", opportunityId: "", webiste: "" ,action: ""},
      { id: 6, srNo: "06", ID: 'FMI/20240724/MI', leadName: "Neha Kumari", companyName: "Tata", contactNo: "9999999999", closeDate: "", status: "Assigned", assignTo: "Anup Naik", email:"manager@gmail.com", createdDate: "04/10/2024", opportunityId: "", webiste: "" ,action: ""},
      { id: 7, srNo: "07", ID: 'FMI/20240724/MI', leadName: "Neha Kumari", companyName: "Tata", contactNo: "9999999999", closeDate: "", status: "Assigned", assignTo: "Anup Naik", email:"manager@gmail.com", createdDate: "04/10/2024", opportunityId: "", webiste: "" ,action: ""},
      { id: 8, srNo: "08", ID: 'FMI/20240724/MI', leadName: "Neha Kumari", companyName: "Tata", contactNo: "9999999999", closeDate: "", status: "Assigned", assignTo: "Anup Naik", email:"manager@gmail.com", createdDate: "04/10/2024", opportunityId: "", webiste: "" ,action: ""},
      { id: 9, srNo: "09", ID: 'FMI/20240724/MI', leadName: "Neha Kumari", companyName: "Tata", contactNo: "9999999999", closeDate: "", status: "Assigned", assignTo: "Anup Naik", email:"manager@gmail.com", createdDate: "04/10/2024", opportunityId: "", webiste: "" ,action: ""},
      { id: 10, srNo: "10", ID: 'FMI/20240724/MI', leadName: "Neha Kumari", companyName: "Tata", contactNo: "9999999999", closeDate: "", status: "Assigned", assignTo: "Anup Naik", email:"manager@gmail.com", createdDate: "04/10/2024", opportunityId: "", webiste: "" ,action: ""},
    ])
  
    const [loadingLeadList, setLoadingLeadList] = useState(false);
  
    const leadListColumn = getLeadListCol();
  
    const handleRefreshLeadList = () => {
      setLoadingLeadList(true);
      setTimeout(() => {
        setLoadingLeadList(false);
        setLeadListData(leadListData);
      }, 1000)
    };

  return (
    <div className='space-y-4 bg-white p-6 rounded-xl shadow-sm'>
      <div className='flex justify-between items-center '>
        <div>
          <h1 className='text-xl font-semibold text-[#445E94]'>Lead List</h1>
        </div>
        <div className='flex gap-4'>
          <Button variant='outline'>Import</Button>
          <Button>Export</Button>
        </div>
      </div>
      <hr className='text-gray-200' />
      <div className='w-[1170px]'>
        <Table rows={leadListData} columns={leadListColumn} loading={loadingLeadList} onRefresh={handleRefreshLeadList} filterKey='leadName' rowsPerPage={8}/>
      </div>
      
    </div>
  )
}

export default DetailsTable