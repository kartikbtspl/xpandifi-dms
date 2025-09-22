
"use client";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import Input from "@/components/common/ui/Input";
import Button from "@/components/common/ui/Button";

// Define form data shape
type ExpenseForm = {
  expenseID: string;
  userName: string;
  address: string;
  date: string;
  journeyType: string;
  modeOfTravel: string;
  userDestination: string;
  totalAmount: string;
  approvedAmount: string;
  headQTR: string;
  coTravellers: string;
  divisionName: string;
  weekOff: string;
  status: string;
  comment: string;
};

export default function ViewMyExpenseForm() {
  const { control, handleSubmit, reset } = useForm<ExpenseForm>({
    defaultValues: {
      expenseID: "",
      userName: "",
      address: "",
      date: "",
      journeyType: "",
      modeOfTravel: "",
      userDestination: "",
      totalAmount: "",
      approvedAmount: "",
      headQTR: "",
      coTravellers: "",
      divisionName: "",
      weekOff: "",
      status: "",
      comment: "",
    },
  });

  const onSubmit = (data: ExpenseForm) => {
    console.log("Form Submitted:", data);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm flex flex-col gap-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6"
      >
        {/* Expense ID */}
        <Controller
          name="expenseID"
          control={control}
          render={({ field }) => (
            <Input {...field} label="Expense ID:" placeholder="Enter Expense ID" />
          )}
        />

        {/* User Name */}
        <Controller
          name="userName"
          control={control}
          render={({ field }) => (
            <Input {...field} label="User Name:" placeholder="Enter User Name" />
          )}
        />

        {/* Address */}
        <Controller
          name="address"
          control={control}
          render={({ field }) => (
            <Input {...field} label="Address:" placeholder="Enter Address" />
          )}
        />

        {/* Date */}
        <Controller
          name="date"
          control={control}
          render={({ field }) => (
            <Input {...field} type="date" label="Date:" placeholder="Select Date" />
          )}
        />

        {/* Journey Type */}
        <Controller
          name="journeyType"
          control={control}
          render={({ field }) => (
            <Input {...field} label="Journey Type:" placeholder="Enter Journey Type" />
          )}
        />

        {/* Mode of Travel */}
        <Controller
          name="modeOfTravel"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              label="Mode of Travel:"
              placeholder="Enter Mode of Travel"
            />
          )}
        />

        {/* User Destination */}
        <Controller
          name="userDestination"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              label="User Destination:"
              placeholder="Enter User Destination"
            />
          )}
        />

        {/* Total Amount */}
        <Controller
          name="totalAmount"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              type="number"
              label="Total Amount:"
              placeholder="Enter Total Amount"
            />
          )}
        />

        {/* Approved Amount */}
        <Controller
          name="approvedAmount"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              type="number"
              label="Approved Amount:"
              placeholder="Enter Approved Amount"
            />
          )}
        />

        {/* Head Quarter */}
        <Controller
          name="headQTR"
          control={control}
          render={({ field }) => (
            <Input {...field} label="Head Quarter:" placeholder="Enter Head Quarter" />
          )}
        />

        {/* Co-Travellers */}
        <Controller
          name="coTravellers"
          control={control}
          render={({ field }) => (
            <Input {...field} label="Co-Travellers:" placeholder="Enter Co-Travellers" />
          )}
        />

        {/* Division Name */}
        <Controller
          name="divisionName"
          control={control}
          render={({ field }) => (
            <Input {...field} label="Division Name:" placeholder="Enter Division Name" />
          )}
        />

        {/* Week Off */}
        <Controller
          name="weekOff"
          control={control}
          render={({ field }) => (
            <Input {...field} label="Week Off:" placeholder="Enter Week Off" />
          )}
        />

        {/* Status */}
        <Controller
          name="status"
          control={control}
          render={({ field }) => (
            <Input {...field} label="Status:" placeholder="Enter Status" />
          )}
        />

        {/* Comment */}
        <Controller
          name="comment"
          control={control}
          render={({ field }) => (
            <Input {...field} label="Comment:" placeholder="Enter Comment" />
          )}
        />

        {/* Buttons */}
        <div className="col-span-3 flex justify-end gap-4 mt-4">
          <Button type="button" variant="outline" onClick={() => reset()}>
            Reset
          </Button>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
}
