"use client";
import Table from '@/components/common/table/Table';
import Breadcrumb from '@/components/common/ui/BreadCrumb';
import React, { useState } from 'react';
import getApprovalRequestCol from './components/getApprovalRequestCol';

const CustomerApprovalRequest = () => {
  const [selectedApproval, setSelectedApproval] = useState("approval");
   const [approvalRequestData, setApprovalRequestData] = useState([
      {
        id: 1,
        srNo: "01",
        customerName: "",
        distributor: "",
        route: "",
        email: "",
        createdBy: "",
        mobile: "",
        createdDate: "",
        action: "",
      },
      {
        id: 2,
        srNo: "02",
        customerName: "",
        distributor: "",
        route: "",
        email: "",
        createdBy: "",
        mobile: "",
        createdDate: "",
        action: "",
      },
      {
        id: 3,
        srNo: "03",
        customerName: "",
        distributor: "",
        route: "",
        email: "",
        createdBy: "",
        mobile: "",
        createdDate: "",
        action: "",
      },
    ]);
  
    const [loadingApprovalRequest, setLoadingApprovalRequest] = useState(false);
  
    const approvalRequestColumns = getApprovalRequestCol();
  
    const handleRefreshApprovalRequest = () => {
      setLoadingApprovalRequest(true);
      setTimeout(() => {
        setLoadingApprovalRequest(false);
        setApprovalRequestData(prev =>
          prev.map((item, idx) => ({
            ...item,
            id: idx + 1, // Or keep the original id if you want them stable
            srNo: String(idx + 1).padStart(2, '0'),
          }))
        );
      }, 1000);
    }

  return (
    <div className='space-y-4'>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/oem/dashboard" },
        { label: "Customer Management", href: "/oem/customer-management" },
        { label: "Customer Approval", href: "/oem/customer-management/approval-request" },
      ]} />
      <h1 className="text-3xl font-bold mb-4 text-[#5D6F9E]">Customer Approval</h1>

      <div className='flex gap-6'>
        <div className='flex items-center gap-3'>
          <input
            type="radio"
            name="customerApprovalStatus"
            id="approval"
            checked={selectedApproval === "approval"}
            onChange={() => setSelectedApproval("approval")}
          />
          <label htmlFor="approval" className="cursor-pointer">Approval Customer List</label>
        </div>

        <div className='flex items-center gap-3'>
          <input
            type="radio"
            name="customerApprovalStatus"
            id="rejected"
            checked={selectedApproval === "rejected"}
            onChange={() => setSelectedApproval("rejected")}
          />
          <label htmlFor="rejected" className="cursor-pointer">Rejected Customer List</label>
        </div>
      </div>
      <Table rows={approvalRequestData} columns={approvalRequestColumns} loading={loadingApprovalRequest} onRefresh={handleRefreshApprovalRequest}/>
    </div>
  );
}
export default CustomerApprovalRequest
