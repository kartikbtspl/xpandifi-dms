"use client";

import { useForm, Controller } from "react-hook-form";
import Dropdown from "@/components/common/ui/Dropdown";
import Input from "@/components/common/ui/Input";
import Button from "@/components/common/ui/Button";
import { FaRegCalendarAlt } from "react-icons/fa";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import { useState } from "react";

type FormValues = {
  country: string;
  state: string;
  city: string;
  distributor: string;
  product: string;
  dateRange: { startDate: Date; endDate: Date; key: string };
};

export default function ProductWiseSalesReportForm() {
  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      country: "",
      state: "",
      city: "",
      distributor: "",
      product: "",
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
  const distributorOptions = [
    { label: "--Select Distributor--", value: "" },
    { label: "Distributor 1", value: "dist1" },
    { label: "Distributor 2", value: "dist2" },
  ];
  const productOptions = [
    { label: "--Select Product--", value: "" },
    { label: "Product A", value: "prodA" },
    { label: "Product B", value: "prodB" },
  ];

  const [showDatePicker, setShowDatePicker] = useState(false);

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <div className="bg-white rounded-lg">
      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-3 gap-3 w-full items-end">
        {/* First Row */}
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

        {/* Second Row */}
        <Controller
          name="distributor"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Dropdown
              {...field}
              label="Distributor"
              required
              placeholder="--Select Distributor--"
              size="sm"
              options={distributorOptions}
              onChange={val => field.onChange(val)}
            />
          )}
        />
        <Controller
          name="product"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Dropdown
              {...field}
              label="Product"
              required
              placeholder="--Select Product--"
              size="sm"
              options={productOptions}
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

        {/* Buttons */}
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
