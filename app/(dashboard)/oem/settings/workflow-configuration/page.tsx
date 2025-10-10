"use client"
import Breadcrumb from '@/components/common/ui/BreadCrumb'
import React, { useState } from 'react'
import WorkflowConfigurationForm from './components/WorkflowConfigurationForm'
import Table from '@/components/common/table/Table'
import Button from '@/components/common/ui/Button'
import { FiUpload } from 'react-icons/fi'
import getWorkflowCol from './components/getWorkflowCol'

const WorkflowConfiguration = () => {

  const [workflowData, setWrokflowData] = useState([
      {
        id: 1,
        srNo: "01",
        workflowName: "",
        taskName: "",
        objectName: "",
        approvalType: "",
        roles: "",
        noOfLevels: "",
        editableLevels: "",
        actions: "",
      },
      {
        id: 2,
        srNo: "02",
        message: "",
        notificationType: "",
        createdDate: "",
        timeDifference: "",
      },
      {
        id: 3,
        srNo: "03",
        workflowName: "",
        taskName: "",
        objectName: "",
        approvalType: "",
        roles: "",
        noOfLevels: "",
        editableLevels: "",
        actions: "",
      },
      {
        id: 4,
        srNo: "04",
        workflowName: "",
        taskName: "",
        objectName: "",
        approvalType: "",
        roles: "",
        noOfLevels: "",
        editableLevels: "",
        actions: "",
      },
      {
        id: 5,
        workflowName: "",
        taskName: "",
        objectName: "",
        approvalType: "",
        roles: "",
        noOfLevels: "",
        editableLevels: "",
        actions: "",
      }
    ]);
  
    const [loadingWorkflow, setLoadingWorkflow] = useState(false);

    const handleDelete = (row: any) => {
      alert(`Delete clicked for row with id: ${row.id}`); 
    }
  
    const workflowColumns = getWorkflowCol(handleDelete);
  
    const handleRefreshWorkflow = () => {
      setLoadingWorkflow(true);
      setTimeout(() => {
        setLoadingWorkflow(false);
        setWrokflowData((prev) => [...prev]); // refresh same data
      }, 1000);
    };

  const handleSave = (data: any) => {
    console.log("Saved data:", data);
    alert("save clicked...");
  }

  return (
    <div className='space-y-4'>
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem/dashboard" },
          { label: "Settings", isClickable: false },
          { label: "Workflow Configuration", href: "/oem/settings/workflow-configuration" },
        ]}
      />
      <h1 className="text-3xl font-semibold text-[#445E94]">Workflow Configuration</h1>
      <div className="space-y-4 rounded-lg bg-white shadow-sm">
        <div className="flex justify-between px-6 pt-4">
          <h1 className="text-xl text-[#445E94]">Add NSR</h1>
        </div>
        <hr className="text-gray-200" />
        <div className="">
          <WorkflowConfigurationForm onSave={handleSave} />
        </div>
      </div>
      <div className="space-y-4 rounded-lg bg-white shadow-sm">
        <div className="flex justify-between px-6 pt-4">
          <h1 className="text-xl text-[#445E94]">
            Visit List
          </h1>
          <Button className='cursor-pointer' startIcon={<FiUpload />}>Export</Button>
        </div>
        <hr className="text-gray-200" />
        <div className="px-6 py-4">
          <Table
            rows={workflowData}
            columns={workflowColumns}
            onRefresh={handleRefreshWorkflow}
            loading={loadingWorkflow}
            showPagination
            rowsPerPage={3}
          />
        </div>
      </div>
    </div>
  )
}

export default WorkflowConfiguration