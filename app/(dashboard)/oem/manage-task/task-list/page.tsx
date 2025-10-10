"use client"
import Breadcrumb from '@/components/common/ui/BreadCrumb'
import React, { useState } from 'react'
import TaskListForm from './components/TaskListForm'
import TaskListPieChart from './components/TaskListPieChart'
import Table from '@/components/common/table/Table'
import getTaskListCol from './components/getTaskListCol'
import { useRouter } from 'next/navigation'
import Button from '@/components/common/ui/Button'

const TaskList = () => {

  const [taskListData, setTaskListData] = useState([
    {
      id: 1,
      srNo: "01",
      taskId: "T1001",
      userName: "Alice",
      fromDate: "2025-09-20",
      taskType: "Bug",
      mainTask: "Login Issue",
      subTask: "Frontend",
      taskStatus: "Open",
      assignedTime: "0/2/15",
      completedTime: "",
      action: ""
    },
    {
      id: 2,
      srNo: "02",
      taskId: "T1002",
      userName: "Bob",
      fromDate: "2025-09-22",
      taskType: "Feature",
      mainTask: "Profile Page",
      subTask: "Backend",
      taskStatus: "In Progress",
      assignedTime: "0/1/30",
      completedTime: "",
      action: ""
    },
    {
      id: 3,
      srNo: "03",
      taskId: "T1003",
      userName: "Cathy",
      fromDate: "2025-09-23",
      taskType: "Bug",
      mainTask: "Payment Gateway",
      subTask: "API",
      taskStatus: "Open",
      assignedTime: "0/3/0",
      completedTime: "",
      action: ""
    },
    {
      id: 4,
      srNo: "04",
      taskId: "T1004",
      userName: "David",
      fromDate: "2025-09-24",
      taskType: "Feature",
      mainTask: "Dashboard",
      subTask: "UI",
      taskStatus: "Completed",
      assignedTime: "1/0/0",
      completedTime: "2025-09-25",
      action: ""
    },
    {
      id: 5,
      srNo: "05",
      taskId: "T1005",
      userName: "Eva",
      fromDate: "2025-09-25",
      taskType: "Bug",
      mainTask: "Logout",
      subTask: "API",
      taskStatus: "In Progress",
      assignedTime: "0/2/45",
      completedTime: "",
      action: ""
    }
  ]);

  const router = useRouter();

  const [loadingTaskList, setLoadingTaskList] = useState(false);


  const handleEdit = () => {
    router.push("/oem/manage-task/task-list/edit-task-list");
  }
  const handleView = (row: any) => {
    // Gather the data you need!
    const query = new URLSearchParams({
      taskId: row.taskId ?? "",
      taskType: row.taskType ?? "",
      taskStatus: row.taskStatus ?? "",
      taskDetails: (row.mainTask && row.subTask) ? (row.mainTask + " - " + row.subTask) : (row.mainTask ?? ""),
      taskDate: row.fromDate ?? "",
    }).toString();
    router.push(`/oem/manage-task/task-list/view-task-list?${query}`);
  };
  const handleDelete = () => {
    alert("Delete clicked...");
  }

  const taskListColumns = getTaskListCol(handleEdit, handleView, handleDelete);

  const handleRefreshTaskList = () => {
    setLoadingTaskList(true);
    setTimeout(() => {
      setLoadingTaskList(false);
      setTaskListData((prev) => [...prev]); // refresh same data
    }, 1000);
  };

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
          <TaskListForm />
        </div>
      </div>
      <div className='flex justify-end'>
        <Button onClick={() => router.push("/oem/manage-task/task-list/add-task-list")}><span className='text-xl mr-3'>+</span>Add New Task</Button>
      </div>
      <TaskListPieChart />
      <div className="space-y-4 rounded-lg bg-white shadow-sm">
        <div className="flex justify-between px-6 pt-4">
          <h1 className="text-xl text-[#445E94]">Task Type List</h1>
        </div>
        <hr className="text-gray-200" />
        <div className="px-6 py-4 max-w-[1200px]">
          <Table
            rows={taskListData}
            columns={taskListColumns}
            onRefresh={handleRefreshTaskList}
            loading={loadingTaskList}
            showPagination
            rowsPerPage={3}
          />
        </div>
      </div>
    </div>
  )
}

export default TaskList