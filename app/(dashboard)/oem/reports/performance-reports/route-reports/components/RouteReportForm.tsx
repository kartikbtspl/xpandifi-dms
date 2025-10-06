"use client";

import { useForm, Controller } from "react-hook-form";
import Dropdown from "@/components/common/ui/Dropdown";
import Input from "@/components/common/ui/Input";
import Button from "@/components/common/ui/Button";
import { useState } from "react";
import { DateRange } from "react-date-range";
import { format } from "date-fns";

type FormValues = {
  distributor: string;
  route: string;
  dateRange: { startDate: Date; endDate: Date; key: string };
};

export default function RouteReportForm() {
  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      distributor: "",
      route: "",
      dateRange: { startDate: new Date(), endDate: new Date(), key: "selection" },
    },
  });

  const [showDatePicker, setShowDatePicker] = useState(false);

  const distributorOptions = [
    { label: "--Select Distributor--", value: "" },
    { label: "Distributor 1", value: "distributor1" },
    { label: "Distributor 2", value: "distributor2" },
  ];
  const routeOptions = [
    { label: "--Select Route--", value: "" },
    { label: "Route 1", value: "route1" },
    { label: "Route 2", value: "route2" },
  ];

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <div className="bg-white rounded-lg p-6">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-3 gap-x-6 gap-y-4 items-end">
          {/* Distributor */}
          <Controller
            name="distributor"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Dropdown
                {...field}
                label="Distributor"
                placeholder="--Select Distributor--"
                size="sm"
                options={distributorOptions}
                onChange={val => field.onChange(val)}
                required
              />
            )}
          />
          {/* Route */}
          <Controller
            name="route"
            control={control}
            render={({ field }) => (
              <Dropdown
                {...field}
                label="Route"
                placeholder="--Select Route--"
                size="sm"
                options={routeOptions}
                onChange={val => field.onChange(val)}
              />
            )}
          />
          {/* Date Range */}
          <Controller
            name="dateRange"
            control={control}
            render={({ field }) => (
              <div className="flex flex-col relative">
                <label className="mb-1 text-sm font-medium text-gray-700">Date Range:</label>
                <Input
                  size="sm"
                  readOnly
                  value={`${format(field.value.startDate, "dd/MM/yyyy")} - ${format(field.value.endDate, "dd/MM/yyyy")}`}
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
        </div>
        {/* Action Buttons */}
        <div className="flex justify-end gap-4 mt-4">
          <Button variant="outline" type="button" onClick={() => reset()}>
            Reset
          </Button>
          <Button type="submit" className="bg-[#445E94] text-white px-6">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
