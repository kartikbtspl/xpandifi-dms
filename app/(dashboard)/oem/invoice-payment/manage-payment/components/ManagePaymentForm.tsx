"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Input from "@/components/common/ui/Input";
import Dropdown from "@/components/common/ui/Dropdown";
import Button from "@/components/common/ui/Button";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

type FormValues = {
  customer: string;
  paymentStatus: string;
  dateRange: { startDate: Date; endDate: Date; key: string };
};

type Props = {
  onFilter: (data: FormValues) => void;
};

export default function ManagePaymentForm({ onFilter }: Props) {
  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      customer: "",
      paymentStatus: "",
      dateRange: { startDate: new Date(), endDate: new Date(), key: "selection" },
    },
  });

  const [showDatePicker, setShowDatePicker] = useState(false);

  const paymentStatusOptions = [
    { value: "pending", label: "Pending" },
    { value: "approved", label: "Approved" },
    { value: "rejected", label: "Rejected" },
  ];

  const onSubmit = (data: FormValues) => {
    onFilter(data);
  };

  const handleReset = () => {
    reset();
    onFilter({
      customer: "",
      paymentStatus: "",
      dateRange: { startDate: new Date(), endDate: new Date(), key: "selection" },
    });
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-3 gap-6 w-full items-end"
      >
        {/* Customer Name/Invoice ID */}
        <Controller
          name="customer"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              label="Customer Name/Invoice ID"
              placeholder="Search..."
              size="sm"
            />
          )}
        />

        {/* Payment Status */}
        <Controller
          name="paymentStatus"
          control={control}
          render={({ field }) => (
            <Dropdown
              {...field}
              label="Payment Status"
              placeholder="--Select--"
              options={paymentStatusOptions}
              size="sm"
              onChange={(val) => field.onChange(val)}
            />
          )}
        />

        {/* Date Range */}
        <Controller
          name="dateRange"
          control={control}
          render={({ field }) => (
            <div className="flex flex-col relative">
              <label className="mb-1 text-sm font-medium text-gray-700">Date Range<span className="text-red-500">*</span></label>
              <Input
                size="sm"
                readOnly
                value={`${format(field.value.startDate, "dd/MM/yyyy")} - ${format(field.value.endDate, "dd/MM/yyyy")}`}
                required
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
                    <Button type="button" size="sm" variant="outline" onClick={() => setShowDatePicker(false)}>
                      Done
                    </Button>
                  </div>
                </div>
              )}
            </div>
          )}
        />

        {/* Buttons */}
        <div className="col-span-3 flex gap-3 justify-end mt-4">
          <Button type="button" variant="outline" onClick={handleReset}>
            Reset
          </Button>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
}
