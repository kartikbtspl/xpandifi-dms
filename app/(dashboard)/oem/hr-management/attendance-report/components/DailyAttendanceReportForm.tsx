"use client";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import Input from "@/components/common/ui/Input";
import Dropdown from "@/components/common/ui/Dropdown";
import Button from "@/components/common/ui/Button";

type AttendanceFilters = {
  opportunityName: string;
  expectedCloseDate: string;
  createdBy: string;
  stageName: string;
  assignedTo: string;
  opportunityStatus: string;
};

export default function DailyAttendanceReportForm() {
  const { control, handleSubmit, reset } = useForm<AttendanceFilters>({
    defaultValues: {
      opportunityName: "",
      expectedCloseDate: "",
      createdBy: "",
      stageName: "",
      assignedTo: "",
      opportunityStatus: "",
    },
  });

  const statusOptions = [
    { label: "Open", value: "open" },
    { label: "In Progress", value: "in_progress" },
    { label: "Closed", value: "closed" },
  ];

  const onSubmit = (data: AttendanceFilters) => {
    console.log("Filters:", data);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm">
      {/* Header */}
      <h2 className="text-lg p-6 font-semibold text-gray-800">
        Daily Attendance Report
      </h2>
      <hr className="border-gray-200" />

      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-3 p-6 gap-x-6 gap-y-4"
      >
        <Controller
          name="opportunityName"
          control={control}
          render={({ field }) => (
            <Input {...field} label="Opportunity Name:" placeholder="Search here" />
          )}
        />
        <Controller
          name="expectedCloseDate"
          control={control}
          render={({ field }) => (
            <Input {...field} type="date" label="Expected Close Date:" />
          )}
        />
        <Controller
          name="createdBy"
          control={control}
          render={({ field }) => (
            <Input {...field} label="Created By:" placeholder="Enter Username" />
          )}
        />
        <Controller
          name="stageName"
          control={control}
          render={({ field }) => (
            <Input {...field} label="Stage Name:" placeholder="Enter Stage Name" />
          )}
        />
        <Controller
          name="assignedTo"
          control={control}
          render={({ field }) => (
            <Input {...field} label="Assigned To:" placeholder="Enter User Name" />
          )}
        />
        <Controller
          name="opportunityStatus"
          control={control}
          render={({ field }) => (
            <Dropdown
              {...field}
              label="Opportunity Status"
              placeholder="--Select Status--"
              options={statusOptions}
              onChange={(val) => field.onChange(val)}
            />
          )}
        />

        {/* Reset button */}
        <div className="col-span-3 flex gap-3 justify-end mt-4">
          <Button variant="outline" onClick={() => reset()}>
            Reset
          </Button>
          <Button>Submit</Button>
        </div>
      </form>
    </div>
  );
}
