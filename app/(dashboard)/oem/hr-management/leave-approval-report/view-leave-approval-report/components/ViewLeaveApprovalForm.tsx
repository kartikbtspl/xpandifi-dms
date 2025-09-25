"use client";

import { useForm, Controller } from "react-hook-form";
import Input from "@/components/common/ui/Input";
import Button from "@/components/common/ui/Button";
import React from "react"
import { useRouter } from "next/navigation";

type FormValues = {
  leaveTitle: string;
  reason: string;
  fromDate: string;
  toDate: string;
  appliedDate: string;
  leaveType: string;
  status: string;
  approvedBy: string;
  approvalMessage: string;
};

interface ViewLeaveApprovalFormProps {
  row?: FormValues; // optional, the data to populate
}

export default function ViewLeaveApprovalForm({ row }: ViewLeaveApprovalFormProps) {
  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      leaveTitle: "",
      reason: "",
      fromDate: "",
      toDate: "",
      appliedDate: "",
      leaveType: "",
      status: "",
      approvedBy: "",
      approvalMessage: "",
    },
  });
  const router = useRouter();

  const onSubmit = (data: FormValues) => {
    reset(); // clear form after submit
  };

  React.useEffect(() => {
    if (row) {
      reset(row);
    }
  }, [row, reset]);

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm space-y-4">
      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-3 gap-6">
        {/* Leave Title */}
        <Controller
          name="leaveTitle"
          control={control}
          render={({ field }) => (
            <Input {...field} label="Leave Title" placeholder="Enter leave title" />
          )}
        />

        {/* Leave Reason */}
        <Controller
          name="reason"
          control={control}
          render={({ field }) => (
            <Input {...field} label="Leave Reason" placeholder="Enter leave reason" />
          )}
        />

        {/* From Date */}
        <Controller
          name="fromDate"
          control={control}
          render={({ field }) => <Input {...field} type="date" label="From Date" />}
        />

        {/* To Date */}
        <Controller
          name="toDate"
          control={control}
          render={({ field }) => <Input {...field} type="date" label="To Date" />}
        />

        {/* Applied Date */}
        <Controller
          name="appliedDate"
          control={control}
          render={({ field }) => <Input {...field} type="date" label="Applied Date" />}
        />

        {/* Leave Type */}
        <Controller
          name="leaveType"
          control={control}
          render={({ field }) => (
            <Input {...field} label="Leave Type" placeholder="Enter leave type" />
          )}
        />

        {/* Approval Status */}
        <Controller
          name="status"
          control={control}
          render={({ field }) => (
            <Input {...field} label="Approval Status" placeholder="Enter approval status" />
          )}
        />

        {/* Approved By */}
        <Controller
          name="approvedBy"
          control={control}
          render={({ field }) => (
            <Input {...field} label="Approved By" placeholder="Enter approver name" />
          )}
        />

        {/* Approval Message */}
        <Controller
          name="approvalMessage"
          control={control}
          render={({ field }) => (
            <Input {...field} label="Approval Message" placeholder="Enter approval message" />
          )}
        />


      </form>
      <div className="flex justify-end">
        <Button variant="outline" onClick={() => router.push('/oem/hr-management/leave-approval-report')}>Back</Button>
      </div>
    </div>
  );
}
