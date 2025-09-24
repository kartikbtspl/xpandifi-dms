"use client";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import Input from "@/components/common/ui/Input";
import { useEffect } from "react";

export type DeliveryPlan = {
  deliveryPlanId: string;
  customer: string;
  distributor: string;
  target: string;
  empty: string;
  location: string;
  user: string;
  deliveryPlanDate: string;
  route: string;
  archivedTarget: string;
  cash: string;
  tripId: string;
  vehicleId: string;
  challanId: string;
};

export default function ViewManageDeliveryForm({
  rowData,
}: {
  rowData: DeliveryPlan;
}) {
  const { control, reset } = useForm<DeliveryPlan>({
    defaultValues: rowData,
  });

  // Update form if rowData changes
  React.useEffect(() => {
    reset(rowData);
  }, [rowData, reset]);

  return (
    <div className="bg-white rounded-lg shadow-sm">
      {/* Header */}
      <h2 className="text-lg p-6 font-semibold text-[#445E94]">
        View Delivery Plan
      </h2>
      <hr className=" border-gray-200" />

      {/* Grid Layout */}
      <div className="grid p-6 grid-cols-3 gap-x-6 gap-y-4">
        <Controller
          name="deliveryPlanId"
          control={control}
          render={({ field }) => <Input {...field} label="Delivery Plan ID:" readOnly />}
        />
        <Controller
          name="customer"
          control={control}
          render={({ field }) => <Input {...field} label="Customer Name:" readOnly />}
        />
        <Controller
          name="distributor"
          control={control}
          render={({ field }) => <Input {...field} label="Distributor:" readOnly />}
        />
        <Controller
          name="target"
          control={control}
          render={({ field }) => <Input {...field} label="Target:" readOnly />}
        />
        <Controller
          name="empty"
          control={control}
          render={({ field }) => <Input {...field} label="Empty:" readOnly />}
        />
        <Controller
          name="location"
          control={control}
          render={({ field }) => <Input {...field} label="Location:" readOnly />}
        />
        <Controller
          name="user"
          control={control}
          render={({ field }) => <Input {...field} label="User Name:" readOnly />}
        />
        <Controller
          name="deliveryPlanDate"
          control={control}
          render={({ field }) => <Input {...field} label="Date:" readOnly />}
        />
        <Controller
          name="route"
          control={control}
          render={({ field }) => <Input {...field} label="Route:" readOnly />}
        />
        <Controller
          name="archivedTarget"
          control={control}
          render={({ field }) => <Input {...field} label="Archived Target:" readOnly />}
        />
        <Controller
          name="cash"
          control={control}
          render={({ field }) => <Input {...field} label="Cash:" readOnly />}
        />
        <Controller
          name="tripId"
          control={control}
          render={({ field }) => <Input {...field} label="Trip ID:" readOnly />}
        />
        <Controller
          name="vehicleId"
          control={control}
          render={({ field }) => <Input {...field} label="Vehicle ID:" readOnly />}
        />
        <Controller
          name="challanId"
          control={control}
          render={({ field }) => <Input {...field} label="Challan ID:" readOnly />}
        />
      </div>
    </div>
  );
}
