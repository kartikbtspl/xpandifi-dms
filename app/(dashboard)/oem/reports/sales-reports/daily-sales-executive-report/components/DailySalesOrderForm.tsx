"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Dropdown from "@/components/common/ui/Dropdown";
import Input from "@/components/common/ui/Input";
import Button from "@/components/common/ui/Button";
import { FaRegCalendarAlt } from "react-icons/fa";
import { DateRange } from "react-date-range";
import { format } from "date-fns";

type FormValues = {
  customer: string;
  country: string;
  state: string;
  city: string;
  route: string;
  distributor: string;
  user: string;
  dateRange: { startDate: Date; endDate: Date; key: string };
};

export default function DailySalesOrderForm() {
  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      customer: "",
      country: "",
      state: "",
      city: "",
      route: "",
      distributor: "",
      user: "",
      dateRange: { startDate: new Date(), endDate: new Date(), key: "selection" },
    },
  });

  const countryOptions = [
    { label: "--Select Country--", value: "" },
    { label: "India", value: "india" },
    { label: "USA", value: "usa" },
  ];
  const stateOptions = [
    { label: "--Select State--", value: "" },
    { label: "Maharashtra", value: "maharashtra" },
    { label: "Gujarat", value: "gujarat" },
  ];
  const cityOptions = [
    { label: "--Select City--", value: "" },
    { label: "Pune", value: "pune" },
    { label: "Mumbai", value: "mumbai" },
  ];
  const routeOptions = [
    { label: "--Select Route--", value: "" },
    { label: "Route 1", value: "r1" },
    { label: "Route 2", value: "r2" },
  ];
  const distributorOptions = [
    { label: "--Select User--", value: "" },
    { label: "Distributor 1", value: "dist1" },
    { label: "Distributor 2", value: "dist2" },
  ];
  const userOptions = [
    { label: "--Select User--", value: "" },
    { label: "User 1", value: "user1" },
    { label: "User 2", value: "user2" },
  ];
  const [showDatePicker, setShowDatePicker] = useState(false);
  const onSubmit = (data: FormValues) => {
    console.log(data); // handle submit
  };

  return (
    <div className="bg-white">
      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-3 gap-x-6 gap-y-4 items-end">
        {/* First Row */}
        <Controller
          name="customer"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              label="Customer:"
              placeholder="Customer"
              size="sm"
              className="text-gray-500"
            />
          )}
        />
        <Controller
          name="country"
          control={control}
          render={({ field }) => (
            <Dropdown
              {...field}
              label="Country:"
              placeholder="--Select Country--"
              size="sm"
              options={countryOptions}
              onChange={val => field.onChange(val)}
            />
          )}
        />
        <Controller
          name="state"
          control={control}
          render={({ field }) => (
            <Dropdown
              {...field}
              label="State:"
              placeholder="--Select State--"
              size="sm"
              options={stateOptions}
              onChange={val => field.onChange(val)}
            />
          )}
        />

        {/* Second Row */}
        <Controller
          name="city"
          control={control}
          render={({ field }) => (
            <Dropdown
              {...field}
              label="City:"
              placeholder="--Select City--"
              size="sm"
              options={cityOptions}
              onChange={val => field.onChange(val)}
            />
          )}
        />
        <Controller
          name="route"
          control={control}
          render={({ field }) => (
            <Dropdown
              {...field}
              label="Route:"
              placeholder="--Select Route--"
              size="sm"
              options={routeOptions}
              onChange={val => field.onChange(val)}
            />
          )}
        />
        <Controller
          name="distributor"
          control={control}
          render={({ field }) => (
            <Dropdown
              {...field}
              label="Distributor:"
              placeholder="--Select User--"
              size="sm"
              options={distributorOptions}
              onChange={val => field.onChange(val)}
            />
          )}
        />

        {/* Third Row */}
        <Controller
          name="user"
          control={control}
          render={({ field }) => (
            <Dropdown
              {...field}
              label="User:"
              placeholder="--Select User--"
              size="sm"
              options={userOptions}
              onChange={val => field.onChange(val)}
            />
          )}
        />

        <div className="col-span-1 flex flex-col">
          <Controller
            name="dateRange"
            control={control}
            render={({ field }) => (
              <div className="flex flex-col relative col-span-3 md:col-span-1">
                <label className="mb-1 text-sm font-medium text-gray-700">Date Range:</label>
                <Input
                  size="sm"
                  readOnly
                  value={`${format(field.value.startDate, "dd/MM/yyyy")} - ${format(
                    field.value.endDate,
                    "dd/MM/yyyy"
                  )}`}
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

        <div className="col-span-1"></div>

        {/* Action Buttons */}
        <div className="col-span-3 flex justify-end gap-4 mt-4">
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
