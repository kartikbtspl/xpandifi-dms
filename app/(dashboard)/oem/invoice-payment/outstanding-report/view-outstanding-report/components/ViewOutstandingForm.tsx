"use client";

import { useForm, Controller } from "react-hook-form";
import Input from "@/components/common/ui/Input";

type CustomerCredit = {
  customerName: string;
  lastUpdateOn: string;
  creditDuration: string;
  totalBalance: string;
  creditLimit: string;
};

export default function ViewOutstandingForm({ rowData }: { rowData: CustomerCredit }) {
  const { control } = useForm<CustomerCredit>({
    defaultValues: rowData,
  });

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      {/* Header */}
      <h2 className="text-lg font-semibold text-[#445E94] mb-4">Customer Credit Details</h2>
      <hr className="border-gray-200 mb-6" />

      {/* Grid Layout */}
      <div className="grid grid-cols-3 gap-x-6 gap-y-4">
        <Controller
          name="customerName"
          control={control}
          render={({ field }) => <Input {...field} label="Customer Name:" readOnly />}
        />
        <Controller
          name="lastUpdateOn"
          control={control}
          render={({ field }) => <Input {...field} label="Last Update On:" readOnly />}
        />
        <Controller
          name="creditDuration"
          control={control}
          render={({ field }) => <Input {...field} label="Credit Duration:" readOnly />}
        />
        <Controller
          name="totalBalance"
          control={control}
          render={({ field }) => <Input {...field} label="Total Balance:" readOnly />}
        />
        <Controller
          name="creditLimit"
          control={control}
          render={({ field }) => <Input {...field} label="Credit Limit:" readOnly />}
        />
      </div>
    </div>
  );
}
