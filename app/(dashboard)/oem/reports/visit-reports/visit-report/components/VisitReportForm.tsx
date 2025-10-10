"use client";

import { useForm, Controller } from "react-hook-form";
import Dropdown from "@/components/common/ui/Dropdown";
import Input from "@/components/common/ui/Input";
import Button from "@/components/common/ui/Button";
import { useState } from "react";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import { FaCalendarAlt } from "react-icons/fa";

type FormValues = {
  name: string;
  country: string;
  state: string;
  city: string;
  user: string;
  distributor: string;
  route: string;
  dateRange: { startDate: Date; endDate: Date; key: string };
};

export default function VisitReportsForm() {
  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      name: "",
      country: "",
      state: "",
      city: "",
      user: "",
      distributor: "",
      route: "",
      dateRange: { startDate: new Date(), endDate: new Date(), key: "selection" },
    },
  });

  const [showDatePicker, setShowDatePicker] = useState(false);

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
    { label: "Mumbai", value: "mumbai" },
    { label: "Pune", value: "pune" },
  ];
  const userOptions = [
    { label: "--Select User--", value: "" },
    { label: "User 1", value: "user1" },
    { label: "User 2", value: "user2" },
  ];
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

  const onSubmit = (data: FormValues) => console.log(data);

  return (
    <div className="bg-white rounded-lg p-6">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-3 gap-x-6 gap-y-4 items-end">
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label="User Name/Customer Name:"
                placeholder=""
                size="sm"
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
          <Controller
            name="distributor"
            control={control}
            render={({ field }) => (
              <Dropdown
                {...field}
                label="Distributor:"
                placeholder="--Select Distributor--"
                size="sm"
                options={distributorOptions}
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
            name="dateRange"
            control={control}
            render={({ field }) => (
              <div className="flex flex-col relative">
                <label className="mb-1 text-sm font-medium text-gray-700">Date Range:</label>
                <Input
                  size="sm"
                  readOnly
                  startIcon={<FaCalendarAlt onClick={() => setShowDatePicker((prev) => !prev)} className="cursor-pointer" />}
                  placeholder="Date"
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
