"use client";

import { useForm, Controller } from "react-hook-form";
import Input from "@/components/common/ui/Input";

type DeliveryPlan = {
  paymentID: string;
  invoiceID: string;
  customerName: string;
  paymentAt: string;
  paymentStatus: string;
  comment: string;
  totalAmount: string;
  paidAmount: string;
  paymentMode: string;
  paymentType: string;
  status: string;
}

export default function ViewManagePaymentForm({ rowData }: { rowData: DeliveryPlan }) {
  const { control } = useForm<DeliveryPlan>({
    defaultValues: rowData, // directly from props
  });

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
          name="paymentID"
          control={control}
          render={({ field }) => (
            <Input {...field} label="Payment ID:" readOnly />
          )}
        />
        <Controller
          name="invoiceID"
          control={control}
          render={({ field }) => (
            <Input {...field} label="Invoice ID:" readOnly />
          )}
        />
        <Controller
          name="customerName"
          control={control}
          render={({ field }) => (
            <Input {...field} label="Customer Name:" readOnly />
          )}
        />
        <Controller
          name="paymentAt"
          control={control}
          render={({ field }) => <Input {...field} label="Payment At" readOnly />}
        />
        <Controller
          name="paymentStatus"
          control={control}
          render={({ field }) => <Input {...field} label="Payment Status" readOnly />}
        />
        <Controller
          name="comment"
          control={control}
          render={({ field }) => <Input {...field} label="Comment" readOnly />}
        />
        <Controller
          name="totalAmount"
          control={control}
          render={({ field }) => <Input {...field} label="Total Amount" readOnly />}
        />
        <Controller
          name="paidAmount"
          control={control}
          render={({ field }) => <Input {...field} label="Paid Amount" readOnly />}
        />
        <Controller
          name="paymentMode"
          control={control}
          render={({ field }) => <Input {...field} label="Payment Mode" readOnly />}
        />
        <Controller
          name="paymentType"
          control={control}
          render={({ field }) => (
            <Input {...field} label="Payment Type" readOnly />
          )}
        />
        <Controller
          name="status"
          control={control}
          render={({ field }) => <Input {...field} label="Status" readOnly />}
        />
      </div>
    </div>
  );
}
