"use client";

import React from "react";
import { useForm, Controller } from "react-hook-form";
import Dropdown from "@/components/common/ui/Dropdown";
import Button from "@/components/common/ui/Button";

type ExpenseForm = {
  expenseMode: string;
  expenseType: string;
  role: string;
  country: string;
  state: string;
  city: string;
  billImage: string;
};

export default function ManageExpenseConfigForm() {
  const { control, handleSubmit, reset } = useForm<ExpenseForm>({
    defaultValues: {
      expenseMode: "",
      expenseType: "",
      role: "",
      country: "",
      state: "",
      city: "",
      billImage: "",
    },
  });

  const onSubmit = (data: ExpenseForm) => {
    console.log("Form Submitted:", data);
  };

  // Options for dropdowns
  const expenseModeOptions = [
    { value: "cash", label: "Cash" },
    { value: "card", label: "Card" },
    { value: "online", label: "Online" },
  ];

  const expenseTypeOptions = [
    { value: "travel", label: "Travel" },
    { value: "food", label: "Food" },
    { value: "stay", label: "Stay" },
  ];

  const roleOptions = [
    { value: "manager", label: "Manager" },
    { value: "employee", label: "Employee" },
  ];

  const countryOptions = [
    { value: "india", label: "India" },
    { value: "usa", label: "USA" },
    { value: "uk", label: "UK" },
  ];

  const stateOptions = [
    { value: "maharashtra", label: "Maharashtra" },
    { value: "karnataka", label: "Karnataka" },
  ];

  const cityOptions = [
    { value: "pune", label: "Pune" },
    { value: "mumbai", label: "Mumbai" },
    { value: "bangalore", label: "Bangalore" },
  ];

  const billImageOptions = [
    { value: "na", label: "NA" },
    { value: "bill1.png", label: "Bill 1" },
    { value: "bill2.png", label: "Bill 2" },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm flex flex-col gap-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6"
      >
        {/* Expense Mode */}
        <Controller
          name="expenseMode"
          control={control}
          render={({ field }) => (
            <Dropdown
              {...field}
              label="Expense Mode:"
              placeholder="--Select Expense Mode--"
              options={expenseModeOptions}
              onChange={(val) => field.onChange(val)}
            />
          )}
        />

        {/* Expense Type */}
        <Controller
          name="expenseType"
          control={control}
          render={({ field }) => (
            <Dropdown
              {...field}
              label="Expense Type:"
              placeholder="--Select"
              options={expenseTypeOptions}
              onChange={(val) => field.onChange(val)}
            />
          )}
        />

        {/* Role */}
        <Controller
          name="role"
          control={control}
          render={({ field }) => (
            <Dropdown
              {...field}
              label="Role:"
              placeholder="--Select Role--"
              options={roleOptions}
              onChange={(val) => field.onChange(val)}
            />
          )}
        />

        {/* Country */}
        <Controller
          name="country"
          control={control}
          render={({ field }) => (
            <Dropdown
              {...field}
              label="Country:"
              placeholder="--Select Country--"
              options={countryOptions}
              onChange={(val) => field.onChange(val)}
            />
          )}
        />

        {/* State */}
        <Controller
          name="state"
          control={control}
          render={({ field }) => (
            <Dropdown
              {...field}
              label="State:"
              placeholder="--Select State--"
              options={stateOptions}
              onChange={(val) => field.onChange(val)}
            />
          )}
        />

        {/* City */}
        <Controller
          name="city"
          control={control}
          render={({ field }) => (
            <Dropdown
              {...field}
              label="City:"
              placeholder="--Select City--"
              options={cityOptions}
              onChange={(val) => field.onChange(val)}
            />
          )}
        />

        {/* Bill Image */}
        <Controller
          name="billImage"
          control={control}
          render={({ field }) => (
            <Dropdown
              {...field}
              label="Bill Image:"
              placeholder="--Select Bill Image--"
              options={billImageOptions}
              onChange={(val) => field.onChange(val)}
            />
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
