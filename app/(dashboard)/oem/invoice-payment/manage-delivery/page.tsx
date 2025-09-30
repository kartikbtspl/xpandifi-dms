"use client";
import Breadcrumb from "@/components/common/ui/BreadCrumb";
import React, { useState } from "react";
import ManageDeliveryForm from "./components/ManageDeliveryForm";
import Button from "@/components/common/ui/Button";
import getManageDeliveryCol from "./components/getManageDeliveryCol";
import { useRouter } from "next/navigation";
import Table from "@/components/common/table/Table";

const ManageDelivery = () => {
  const router = useRouter();

  // ✅ Initial table data (yours)
  const [manageDeliveries] = useState([
    {
      id: 1,
      srNo: "01",
      planID: "PLAN101",
      deliveryPlanDate: "20/09/2025",
      user: "user1",
      distributor: "Dist A",
      route: "Route X",
      target: "5000",
      customerName: "ABC Traders",
      archivedTarget: "4800",
      tripID: "TRIP01",
      vehicleID: "VEH001",
    },
    {
      id: 2,
      srNo: "02",
      planID: "PLAN102",
      deliveryPlanDate: "22/09/2025",
      user: "user2",
      distributor: "Dist B",
      route: "Route Y",
      target: "8000",
      customerName: "XYZ Enterprises",
      archivedTarget: "7600",
      tripID: "TRIP02",
      vehicleID: "VEH002",
    },
  ]);

  const [filteredDeliveries, setFilteredDeliveries] = useState(manageDeliveries);
  const [loadingManageDelivery, setLoadingManageDelivery] = useState(false);

  // 🟢 Filter only by user + date range
  const handleFilter = (filters: any) => {
    const { user, dateRange } = filters;

    const filtered = manageDeliveries.filter((row) => {
      // ✅ user filter
      const userMatch = user ? row.user.toLowerCase() === user.toLowerCase() : true;

      // ✅ date filter (convert dd/MM/yyyy → Date)
      const [day, month, year] = row.deliveryPlanDate.split("/");
      const rowDate = new Date(Number(year), Number(month) - 1, Number(day));

      const startDate = new Date(dateRange.startDate);
      startDate.setHours(0, 0, 0, 0);

      const endDate = new Date(dateRange.endDate);
      endDate.setHours(23, 59, 59, 999);

      const dateMatch = rowDate >= startDate && rowDate <= endDate;

      return userMatch && dateMatch;
    });

    setFilteredDeliveries(filtered);
  };

  const handleView = (row: any) => {
    // Serialize row data into query params
    const query = encodeURIComponent(JSON.stringify(row));

    router.push(
      `/oem/invoice-payment/manage-delivery/view-manage-delivery-list?data=${query}`
    );
  };

  // 🔄 Refresh → reset to original data
  const handleRefreshManageDeliveryPlan = () => {
    setLoadingManageDelivery(true);
    setTimeout(() => {
      setLoadingManageDelivery(false);
      setFilteredDeliveries([...manageDeliveries]); // reset
    }, 1000);
  };

  const manageDeliveryColumns = getManageDeliveryCol(
    (row) => console.log("Edit", row),
    handleView,
    (row) => console.log("Delete", row)
  );

  return (
    <div className="space-y-4">
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem/dashboard" },
          { label: "Invoice & Payment", href: "/oem/invoice-payment" },
          { label: "Manage Delivery", href: "/oem/invoice-payment/manage-delivery" },
        ]}
      />
      <h1 className="text-3xl font-semibold text-[#445E94]">Manage Delivery</h1>

      {/* Filter Form */}
      <ManageDeliveryForm onFilter={handleFilter} />

      <div className="flex justify-end">
        <Button
          onClick={() =>
            router.push("/oem/invoice-payment/manage-delivery/add-new-delivery-plan")
          }
        >
          <span className="text-xl mr-3">+</span>Add New Delivery Plan
        </Button>
      </div>

      <div className="space-y-4 rounded-lg bg-white">
        <div className="flex justify-between px-6 pt-4">
          <h1 className="text-xl text-[#445E94]">Delivery Plan List</h1>
          <Button>Export</Button>
        </div>
        <hr className="text-gray-200" />

        <div className="px-6 w-[1200px]">
          <Table
            rows={filteredDeliveries}
            columns={manageDeliveryColumns}
            onRefresh={handleRefreshManageDeliveryPlan}
            loading={loadingManageDelivery}
            showPagination
          />
        </div>
      </div>
    </div>
  );
};

export default ManageDelivery;
