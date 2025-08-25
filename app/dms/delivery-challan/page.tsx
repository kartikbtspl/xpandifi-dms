"use client";
import { useState } from "react";
import { FiMoreVertical } from "react-icons/fi";
import getChallanColumns from "./components/challanColumn";
import Table from "../../../components/common/table/Table";
import ActionMenu from "./components/ActionMenu";

export default function DeliveryChallan() {
  const [challanListData, setChallanListData] = useState([
    {
      id: 1,
      srNo: "1",
      dispatchDocumentNumber: "sssa",
      customerName: "Bajaj Enterprises",
      salesOrderNo: "105301",
      createdDate: "25-07-24 8:15",
      action: (
        <ActionMenu
          // onView={() => alert("View clicked")}
          // onDownload={() => alert("Download clicked")}
        />
      ),
    },
    {
      id: 2,
      srNo: "1",
      dispatchDocumentNumber: "sssa",
      customerName: "Bajaj Enterprises",
      salesOrderNo: "105301",
      createdDate: "25-07-24 8:15",
      action: (
        <ActionMenu
          onView={() => alert("View clicked")}
          onDownload={() => alert("Download clicked")}
        />
      ),
    },
    {
      id: 3,
      srNo: "1",
      dispatchDocumentNumber: "sssa",
      customerName: "Bajaj Enterprises",
      salesOrderNo: "105301",
      createdDate: "25-07-24 8:15",
      action: (
        <ActionMenu
          onView={() => alert("View clicked")}
          onDownload={() => alert("Download clicked")}
        />
      ),
    },
    {
      id: 4,
      srNo: "1",
      dispatchDocumentNumber: "sssa",
      customerName: "Bajaj Enterprises",
      salesOrderNo: "105301",
      createdDate: "25-07-24 8:15",
      action: (
        <ActionMenu
          onView={() => alert("View clicked")}
          onDownload={() => alert("Download clicked")}
        />
      ),
    },
    {
      id: 5,
      srNo: "1",
      dispatchDocumentNumber: "sssa",
      customerName: "Bajaj Enterprises",
      salesOrderNo: "105301",
      createdDate: "25-07-24 8:15",
      action: (
        <ActionMenu
          onView={() => alert("View clicked")}
          onDownload={() => alert("Download clicked")}
        />
      ),
    },
    {
      id: 6,
      srNo: "1",
      dispatchDocumentNumber: "sssa",
      customerName: "Bajaj Enterprises",
      salesOrderNo: "105301",
      createdDate: "25-07-24 8:15",
      action: (
        <ActionMenu
          onView={() => alert("View clicked")}
          onDownload={() => alert("Download clicked")}
        />
      ),
    },
    {
      id: 7,
      srNo: "1",
      dispatchDocumentNumber: "sssa",
      customerName: "Bajaj Enterprises",
      salesOrderNo: "105301",
      createdDate: "25-07-24 8:15",
      action: (
        <ActionMenu
          onView={() => alert("View clicked")}
          onDownload={() => alert("Download clicked")}
        />
      ),
    },
    {
      id: 8,
      srNo: "1",
      dispatchDocumentNumber: "sssa",
      customerName: "Bajaj Enterprises",
      salesOrderNo: "105301",
      createdDate: "25-07-24 8:15",
      action: (
        <ActionMenu
          onView={() => alert("View clicked")}
          onDownload={() => alert("Download clicked")}
        />
      ),
    },
    {
      id: 9,
      srNo: "1",
      dispatchDocumentNumber: "sssa",
      customerName: "Bajaj Enterprises",
      salesOrderNo: "105301",
      createdDate: "25-07-24 8:15",
      action: (
        <ActionMenu
          onView={() => alert("View clicked")}
          onDownload={() => alert("Download clicked")}
        />
      ),
    },
    {
      id: 10,
      srNo: "1",
      dispatchDocumentNumber: "sssa",
      customerName: "Bajaj Enterprises",
      salesOrderNo: "105301",
      createdDate: "25-07-24 8:15",
      action: (
        <ActionMenu
          onView={() => alert("View clicked")}
          onDownload={() => alert("Download clicked")}
        />
      ),
    },
  ]);

  const [loadingChallanList, setloadingChallanList] = useState(false);
  const challanColumn = getChallanColumns();

  const handleChallanListRefresh = () => {
    setloadingChallanList(true);
    setTimeout(() => setloadingChallanList(false), 1000);
  };

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-3xl font-bold mb-4">Delivery Challan</h1>
        <p>Delivery Challan List</p>
      </div>
      <div>
        <Table
          columns={challanColumn}
          rows={challanListData}
          onRefresh={handleChallanListRefresh}
          loading={loadingChallanList}
          showPagination={true}
          rowsPerPage={6}
        />
      </div>
    </div>
  );
}
