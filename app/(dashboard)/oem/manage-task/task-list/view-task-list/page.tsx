
"use client";
import Breadcrumb from '@/components/common/ui/BreadCrumb';
import React, { useState, Suspense } from 'react';
import getViewTaskListCol from './components/getViewTaskListCol';
import Table from '@/components/common/table/Table';
import TaskListWithParams from './components/TaskListWithParams'; // import your new Client component

function ViewTaskList() {
  const [viewTaskListData, setViewTaskListData] = useState([
    {
      id: 1,
      srNo: "01",
      commentId: "T1001",
      comment: "Alice",
      commentDate: "2025-09-20",
    },
    {
      id: 2,
      srNo: "02",
      commentId: "T1001",
      comment: "Alice",
      commentDate: "2025-09-20",
    },
    {
      id: 3,
      srNo: "03",
      commentId: "T1001",
      comment: "Alice",
      commentDate: "2025-09-20",
    },
    {
      id: 4,
      srNo: "04",
      commentId: "T1001",
      comment: "Alice",
      commentDate: "2025-09-20",
    },
    {
      id: 5,
      srNo: "05",
      commentId: "T1001",
      comment: "Alice",
      commentDate: "2025-09-20",
    }
  ]);

  const [loadingViewTaskList, setLoadingViewTaskList] = useState(false);
  const viewTaskListColumns = getViewTaskListCol();

  const handleRefreshViewTaskList = () => {
    setLoadingViewTaskList(true);
    setTimeout(() => {
      setLoadingViewTaskList(false);
      setViewTaskListData((prev) => [...prev]); // refresh same data
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
          <h1 className="text-xl text-[#445E94]">View Task Details</h1>
        </div>
        <hr className="text-gray-200" />
        <div>
          <Suspense fallback={<div>Loading...</div>}>
            <TaskListWithParams />
          </Suspense>
        </div>
      </div>
      <div className="space-y-4 rounded-lg bg-white shadow-sm">
        <div className="flex justify-between px-6 pt-4">
          <h1 className="text-xl text-[#445E94]">Task Comment List</h1>
        </div>
        <hr className="text-gray-200" />
        <div className="px-6 py-4 max-w-[1200px]">
          <Table
            rows={viewTaskListData}
            columns={viewTaskListColumns}
            onRefresh={handleRefreshViewTaskList}
            loading={loadingViewTaskList}
            showPagination
            rowsPerPage={3}
          />
        </div>
      </div>
    </div>
  );
}

export default ViewTaskList;
