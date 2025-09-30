"use client";

import { Suspense } from "react";
import Breadcrumb from "@/components/common/ui/BreadCrumb";
import React from "react";
import ViewManagePaymentForm from "./components/ViewManagePaymentForm";
import { useSearchParams } from "next/navigation";

export default function ViewManagePayment() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <InnerViewManagePayment />
    </Suspense>
  );
}

// ✅ Actual client logic inside the inner component
function InnerViewManagePayment() {
  const searchParams = useSearchParams();
  const data = searchParams.get("data");
  const row = data ? JSON.parse(decodeURIComponent(data)) : null;

  return (
    <div className="space-y-4">
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem/dashboard" },
          { label: "Invoice & Payment", href: "/oem/invoice-payment" },
          { label: "Manage Payment", href: "/oem/invoice-payment/manage-payment" },
        ]}
      />
      <h1 className="text-3xl text-[#445E94] font-semibold mb-4">
        Manage Payment
      </h1>
      {row && <ViewManagePaymentForm rowData={row} />}
    </div>
  );
}
