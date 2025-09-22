"use client";

import React from "react";
import { useForm, Controller } from "react-hook-form";
import Input from "@/components/common/ui/Input";
import Button from "@/components/common/ui/Button";

type BeatPlanForm = {
  advanceId: string;
  userName: string;
  address: string;
  createdAt: string;
  advanceDuration: string;
  from: string;
  to: string;
  reason: string;
  amount: string;
  adminComment: string;
  status: string;
};

export default function ViewAdvanceForm() {
  const { control } = useForm<BeatPlanForm>({
    defaultValues: {
      advanceId: "",
      userName: "",
      address: "",
      createdAt: "",
      advanceDuration: "",
      from: "",
      to: "",
      reason: "",
      amount: "",
      adminComment: "",
      status: "",
    },
  });

  return (
    <div className="bg-white rounded-xl shadow-sm flex flex-col gap-4">
      <h2 className="text-lg font-semibold px-6 pt-4">Add Beat Plan</h2>
      <hr className="text-gray-200"/>
      <form className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {/* Advance ID */}
        <Controller
          name="advanceId"
          control={control}
          render={({ field }) => (
            <Input {...field} label="Advance ID:" placeholder="ADV44" readOnly />
          )}
        />

        {/* User Name */}
        <Controller
          name="userName"
          control={control}
          render={({ field }) => (
            <Input {...field} label="User Name:" placeholder="Shreyash" readOnly />
          )}
        />

        {/* Address */}
        <Controller
          name="address"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              label="Address:"
              placeholder="53, Rd no 10, Kothrud, Pune, Maharashtra India 411038"
              readOnly
            />
          )}
        />

        {/* Created At */}
        <Controller
          name="createdAt"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              label="Created At:"
              placeholder="15-09-2025 12:39:21"
              readOnly
            />
          )}
        />

        {/* Advance Duration */}
        <Controller
          name="advanceDuration"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              label="Advance Duration:"
              placeholder="15-09-2025 To 23-09-2025"
              readOnly
            />
          )}
        />

        {/* Reason */}
        <Controller
          name="reason"
          control={control}
          render={({ field }) => (
            <Input {...field} label="Reason:" placeholder="NA" readOnly />
          )}
        />

        {/* From */}
        <Controller
          name="from"
          control={control}
          render={({ field }) => (
            <Input {...field} label="From:" placeholder="NA" readOnly />
          )}
        />

        {/* To */}
        <Controller
          name="to"
          control={control}
          render={({ field }) => (
            <Input {...field} label="To:" placeholder="NA" readOnly />
          )}
        />

        {/* Amount */}
        <Controller
          name="amount"
          control={control}
          render={({ field }) => (
            <Input {...field} label="Amount:" placeholder="₹. 3999" readOnly />
          )}
        />

        {/* Admin Comment */}
        <Controller
          name="adminComment"
          control={control}
          render={({ field }) => (
            <Input {...field} label="Admin Comment:" placeholder="NA" readOnly />
          )}
        />

        {/* Status */}
        <Controller
          name="status"
          control={control}
          render={({ field }) => (
            <Input {...field} label="Status:" placeholder="Pending" readOnly />
          )}
        />

        {/* Buttons */}
        <div className="col-span-1 md:col-span-3 flex justify-end gap-4 mt-4">
          <Button
            type="button"
            variant="outline"
            className="px-5"
          >
            Reject
          </Button>
          <Button
            type="button"
          >
            Approve
          </Button>
        </div>
      </form>
    </div>
  );
}
