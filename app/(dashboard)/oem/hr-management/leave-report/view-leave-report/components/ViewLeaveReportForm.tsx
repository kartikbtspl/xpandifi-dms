"use client";

import React from "react";
import Input from "@/components/common/ui/Input";
import Button from "@/components/common/ui/Button";
import { useRouter, useSearchParams } from "next/navigation";

export default function ViewLeaveReportForm() {
  const router = useRouter();
  const params = useSearchParams();

  // Extract values from query params
  const user = params.get("user") || "";
  const leaveTitle = params.get("leaveTitle") || "";
  const leaveReason = params.get("reason") || "";
  const fromDate = params.get("fromDate") || "";
  const toDate = params.get("toDate") || "";
  const appliedDate = params.get("appliedDate") || "";
  const leaveType = params.get("leaveType") || "";
  const status = params.get("status") || "";
  const approveBy = "NA";
  const approvalMessage = "NA";

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
      {/* User Name */}
      <h2 className="text-lg font-semibold text-gray-700">
        User Name: <span className="font-normal">{user}</span>
      </h2>

      {/* Grid Form */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-4">
        <Input label="Leave Title:" value={leaveTitle} readOnly />
        <Input label="Leave Reason:" value={leaveReason} readOnly />
        <Input label="From Date:" value={fromDate} readOnly />
        <Input label="To Date:" value={toDate} readOnly />
        <Input label="Applied Date:" value={appliedDate} readOnly />
        <Input label="Leave Type:" value={leaveType} readOnly />
        <Input label="Approval Status:" value={status} readOnly />
        <Input label="Approve By:" value={approveBy} readOnly />
        <Input label="Approval Message:" value={approvalMessage} readOnly />
      </div>

      {/* Back Button */}
      <div className="flex justify-end">
        <Button
          type="button"
          variant="outline"
          onClick={() => router.back()}
        >
          Back
        </Button>
      </div>
    </div>
  );
}
