"use client";

import { Suspense } from "react";
import Breadcrumb from "@/components/common/ui/BreadCrumb";
import React from "react";
import ViewManageDeliveryForm from "./components/ViewManageDeliveryForm";
import { useSearchParams } from "next/navigation";

export default function ViewManageDeliveryList() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <InnerViewManageDeliveryList />
    </Suspense>
  );
}

// ✅ Client logic moved into Inner component
function InnerViewManageDeliveryList() {
  const searchParams = useSearchParams();
  const data = searchParams.get("data");

  let deliveryData = null;
  if (data) {
    try {
      deliveryData = JSON.parse(decodeURIComponent(data));
    } catch (err) {
      console.error("Error parsing delivery data", err);
    }
  }

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

      <ViewManageDeliveryForm rowData={deliveryData} />
    </div>
  );
}
