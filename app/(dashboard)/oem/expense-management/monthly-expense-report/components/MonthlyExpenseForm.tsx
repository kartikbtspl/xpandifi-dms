"use client";

import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Dropdown from "@/components/common/ui/Dropdown";
import Button from "@/components/common/ui/Button";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import Input from "@/components/common/ui/Input";

type ExpenseFormValues = {
  user: string;
  dateRange: { startDate: Date; endDate: Date; key: string };
  expenseType: string;
  role: string;
  country: string;
  state: string;
  city: string;
  billImage: string;
};

export default function MonthlyExpenseForm() {
  const { control, handleSubmit, reset } = useForm<ExpenseFormValues>({
    defaultValues: {
      user: "",
      dateRange: {
        startDate: new Date(),
        endDate: new Date(),
        key: "selection",
      },
      expenseType: "",
      role: "",
      country: "",
      state: "",
      city: "",
      billImage: "",
    },
  });

  const [showDatePicker, setShowDatePicker] = useState(false);

  // Options for dropdowns
  const userOptions = [
    { value: "cash", label: "Cash" },
    { value: "card", label: "Card" },
    { value: "online", label: "Online" },
  ];

   const onSubmit = (data: ExpenseFormValues) => {
      console.log("Filter Data:", {
        ...data,
        dateRange: {
          start: format(data.dateRange.startDate, "dd/MM/yyyy"),
          end: format(data.dateRange.endDate, "dd/MM/yyyy"),
        },
      });
    };

  return (
    <div className="bg-white rounded-xl shadow-sm flex flex-col gap-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6"
      >
        {/* Expense Mode */}
        <Controller
          name="user"
          control={control}
          render={({ field }) => (
            <Dropdown
              {...field}
              label="User:"
              placeholder="--Select User--"
              options={userOptions}
              onChange={(val) => field.onChange(val)}
            />
          )}
        />

        <Controller
          name="dateRange"
          control={control}
          render={({ field }) => (
            <div className="flex flex-col relative">
              <label className="mb-1 text-sm font-medium text-gray-700">
                Date Range:
              </label>
              <Input
                size="sm"
                readOnly
                value={
                  field.value?.startDate && field.value?.endDate
                    ? `${format(field.value.startDate, "dd/MM/yyyy")} - ${format(
                        field.value.endDate,
                        "dd/MM/yyyy"
                      )}`
                    : ""
                }
                placeholder="Select Date"
                className="text-gray-500 cursor-pointer"
                onClick={() => setShowDatePicker((prev) => !prev)}
              />

              {showDatePicker && (
                <div className="absolute z-10 mt-2 bg-white shadow-lg rounded-lg">
                  <DateRange
                    editableDateInputs
                    moveRangeOnFirstSelection={false}
                    ranges={[field.value]}
                    onChange={(ranges) => field.onChange(ranges.selection)}
                  />
                  <div className="flex justify-end p-2">
                    <Button
                      type="button"
                      size="sm"
                      variant="outline"
                      onClick={() => setShowDatePicker(false)}
                    >
                      Done
                    </Button>
                  </div>
                </div>
              )}
            </div>
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
