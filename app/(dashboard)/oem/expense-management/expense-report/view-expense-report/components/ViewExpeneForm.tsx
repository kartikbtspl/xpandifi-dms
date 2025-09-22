"use client";

import React from "react";
import { useForm, Controller } from "react-hook-form";
import Input from "@/components/common/ui/Input";
import Button from "@/components/common/ui/Button";

type BeatPlanForm = {
  expenseId: string;
  userName: string;
  address: string;
  date: string;
  totalAmount: string;
  approvedAmount: string;
  status: string;
  comment: string;
};

export default function ViewExpenseForm() {
  const { control } = useForm<BeatPlanForm>();

  return (
    <div className="bg-white rounded-xl shadow-sm flex flex-col gap-4">
      <div className="flex justify-between px-6 pt-4">
          <h1 className="text-xl text-[#445E94]">Add Expense Report</h1>
        </div>
      <hr className="text-gray-200" />

      <form className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {/* Expense ID */}
        <Controller
          name="expenseId"
          control={control}
          render={({ field }) => (
            <Input {...field} label="Expense ID:" placeholder="ADV44" readOnly />
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

        {/* Date */}
        <Controller
          name="date"
          control={control}
          render={({ field }) => (
            <Input {...field} label="Date:" placeholder="15-09-2025" readOnly />
          )}
        />

        {/* Total Amount */}
        <Controller
          name="totalAmount"
          control={control}
          render={({ field }) => (
            <Input {...field} label="Total Amount:" placeholder="₹. 3999" readOnly />
          )}
        />

        {/* Approved Amount */}
        <Controller
          name="approvedAmount"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              label="Approved Amount:"
              placeholder="₹. 3999"
              readOnly
            />
          )}
        />

        {/* Status */}
        <Controller
          name="status"
          control={control}
          render={({ field }) => (
            <Input {...field} label="Status:" placeholder="Approved" readOnly />
          )}
        />

        {/* Comment */}
        <Controller
          name="comment"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              label="Comment:"
              placeholder="Send For Approval"
              readOnly
            />
          )}
        />
      </form>
    </div>
  );
}
