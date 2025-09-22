"use client";
import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Input from "@/components/common/ui/Input";
import Button from "@/components/common/ui/Button";

type ExpenseForm = {
  expenseID: string;
  userName: string;
  address: string;
  date: string;
  type: string;
  mode: string;
  comment: string;
  amount: string;
  from: string;
  to: string;
  actualDistanceInKM: string;
  gpsDistanceInKM: string;
  rate: string;
  billImage: string;
};

function ViewListFormContent() {
  const searchParams = useSearchParams();
  const rowData = searchParams.get("data")
    ? JSON.parse(searchParams.get("data") as string)
    : null;

  const { control, handleSubmit, reset } = useForm<ExpenseForm>({
    defaultValues: {
      expenseID: "",
      userName: "",
      address: "",
      date: "15-09-2025",
      type: "",
      mode: "",
      comment: "",
      amount: "",
      from: "",
      to: "",
      actualDistanceInKM: "",
      gpsDistanceInKM: "",
      rate: "",
      billImage: "",
    },
  });

  // ✅ Prefill form with row data
  useEffect(() => {
    if (rowData) {
      reset({
        expenseID: rowData.expenseDetailsID || "",
        userName: rowData.userName || "",
        address: rowData.address || "",
        date: rowData.expenseDate || "",
        type: rowData.expenseType || "",
        mode: rowData.mode || "",
        comment: rowData.comment || "",
        amount: rowData.actualAmount || "",
        from: rowData.from || "",
        to: rowData.to || "",
        actualDistanceInKM: rowData.actualKm || "",
        gpsDistanceInKM: rowData.gps || "",
        rate: rowData.rate || "",
        billImage: rowData.billImage || "",
      });
    }
  }, [rowData, reset]);

  const onSubmit = (data: ExpenseForm) => {
    console.log("Form Submitted:", data);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm flex flex-col gap-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
          {/* Expense ID */}
          <Controller
            name="expenseID"
            control={control}
            render={({ field }) => (
              <Input {...field} label="Expense ID:" placeholder="ADV44" />
            )}
          />

          {/* User Name */}
          <Controller
            name="userName"
            control={control}
            render={({ field }) => (
              <Input {...field} label="User Name:" placeholder="Shreyas" />
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
                placeholder="53, Road No. 10, Kothrud, Pune, Maharashtra, India, 411038."
              />
            )}
          />

          {/* Date */}
          <Controller
            name="date"
            control={control}
            render={({ field }) => (
              <Input {...field} type="date" label="Date:" placeholder="15-09-2025" />
            )}
          />

          {/* Type */}
          <Controller
            name="type"
            control={control}
            render={({ field }) => <Input {...field} label="Type:" placeholder="TA" />}
          />

          {/* Mode */}
          <Controller
            name="mode"
            control={control}
            render={({ field }) => <Input {...field} label="Mode:" placeholder="TA" />}
          />

          {/* Comment */}
          <Controller
            name="comment"
            control={control}
            render={({ field }) => (
              <Input {...field} label="Comment:" placeholder="Send for Approval" />
            )}
          />

          {/* Amount */}
          <Controller
            name="amount"
            control={control}
            render={({ field }) => (
              <Input {...field} type="number" label="Amount:" placeholder="5000" />
            )}
          />

          {/* From */}
          <Controller
            name="from"
            control={control}
            render={({ field }) => <Input {...field} label="From:" placeholder="-" />}
          />

          {/* To */}
          <Controller
            name="to"
            control={control}
            render={({ field }) => <Input {...field} label="To:" placeholder="-" />}
          />

          {/* Actual Distance in KM */}
          <Controller
            name="actualDistanceInKM"
            control={control}
            render={({ field }) => (
              <Input {...field} type="number" label="Actual Distance (KM):" placeholder="121" />
            )}
          />

          {/* GPS Distance in KM */}
          <Controller
            name="gpsDistanceInKM"
            control={control}
            render={({ field }) => (
              <Input {...field} type="number" label="GPS Distance (KM):" placeholder="118" />
            )}
          />

          {/* Rate */}
          <Controller
            name="rate"
            control={control}
            render={({ field }) => (
              <Input {...field} type="number" label="Rate:" placeholder="12" />
            )}
          />

          {/* Bill Image */}
          <Controller
            name="billImage"
            control={control}
            render={({ field }) => (
              <Input {...field} label="Bill Image:" placeholder="Upload / URL" />
            )}
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-center mb-4">
          <Button type="button" onClick={() => history.back()}>
            Back
          </Button>
        </div>
      </form>
    </div>
  );
}

export default function ViewListForm() {
  return (
    <Suspense fallback={<div>Loading form...</div>}>
      <ViewListFormContent />
    </Suspense>
  );
}
