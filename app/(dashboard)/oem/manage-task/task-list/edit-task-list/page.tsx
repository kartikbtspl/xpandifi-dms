"use client"
import Breadcrumb from '@/components/common/ui/BreadCrumb'
import React from 'react'
import EditTaskListForm from './components/EditTaskListForm'

function EditTaskList() {
  return (
    <div className='space-y-4'>
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem/dashboard" },
          { label: "Manage Task", isClickable: false },
          { label: "Task List", href: "/oem/manage-task/task-list" },
        ]}
      />
      <h1 className="text-3xl font-semibold text-[#445E94]">Task List</h1>
      <div className="space-y-4 rounded-lg bg-white shadow-sm">
        <div className="flex justify-between px-6 pt-4">
          <h1 className="text-xl text-[#445E94]">Search Task</h1>
        </div>
        <hr className="text-gray-200" />
        <div className="">
          <EditTaskListForm />
        </div>
      </div>
    </div>
  )
}

export default EditTaskList