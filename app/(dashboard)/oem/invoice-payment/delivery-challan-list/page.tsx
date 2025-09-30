"use client";
import { useState } from "react";
import getChallanColumns from "./components/challanColumn";
import Table from "@/components/common/table/Table";
import ActionMenu from "./components/ActionMenu";
import Breadcrumb from "@/components/common/ui/BreadCrumb";

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
          onView={() => alert("View clicked")}
          onDownload={() => alert("Download clicked")}
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
        setTimeout(() => {
          setloadingChallanList(false);
          setChallanListData((prev) => [...prev]); // refresh but same data
        }, 1000);
      };

  return (
    <div className="space-y-4">
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem/dashboard" },
          { label: "Invoice & Payment", href: "/oem/invoice-payment" },
          {
            label: "Delivery Challan List",
            href: "/oem/invoice-payment/delivery-challan-list",
          },
        ]}
      />
      <h1 className="text-3xl text-[#445E94] font-semibold mb-4">Delivery Challan</h1>
      <div className="space-y-4 rounded-lg bg-white">
        {/* Header */}
        <div className="flex justify-between px-6 pt-4">
          <h1 className="text-xl text-[#445E94]">Delivery Challan List</h1>
          {/* Optional: Export button if needed */}
          {/* <Button>Export</Button> */}
        </div>

        <hr className="text-gray-200" />

        {/* Table */}
        <div className="px-6 pb-4">
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
    </div>
  );
}
