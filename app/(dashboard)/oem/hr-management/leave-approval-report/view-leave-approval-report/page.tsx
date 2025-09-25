"use client";

import React, { Suspense } from "react";
import Breadcrumb from "@/components/common/ui/BreadCrumb";
import ViewLeaveApprovalForm from "./components/ViewLeaveApprovalForm";
import { useSearchParams } from "next/navigation";

function ViewLeaveApprovalContent() {
  const searchParams = useSearchParams();
  const rowParam = searchParams.get("row");
  const selectedRow = rowParam ? JSON.parse(rowParam) : null;

  return (
    <div className="space-y-4">
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem" },
          { label: "HR Management", href: "/oem/hr-management" },
          { label: "Leave Approval Report", href: "/oem/hr-management/leave-approval-report" },
        ]}
      />
      <h1 className="text-3xl font-semibold text-[#445E94]">Leave Approval Report</h1>
      <ViewLeaveApprovalForm row={selectedRow} />
    </div>
  );
}

export default function ViewLeaveApprovalReport() {
  return (
    <Suspense fallback={<div>Loading leave approval...</div>}>
      <ViewLeaveApprovalContent />
    </Suspense>
  );
}
