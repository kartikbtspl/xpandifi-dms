"use client";

import { useForm, Controller } from "react-hook-form";
import Input from "@/components/common/ui/Input";
import Dropdown from "@/components/common/ui/Dropdown";
import Button from "@/components/common/ui/Button";
import { FaSearch, FaCalendarAlt } from "react-icons/fa";
import { useState } from "react";
import { DateRange } from "react-date-range";
import { format } from "date-fns";

type FormValues = {
  taskId: string;
  country: string;
  state: string;
  city: string;
  user: string;
  taskStatus: string;
  dateRange: { startDate: Date; endDate: Date; key: string };
};

export default function TaskListForm() {
  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      taskId: "",
      country: "",
      state: "",
      city: "",
      user: "",
      taskStatus: "",
      dateRange: { startDate: new Date(), endDate: new Date(), key: "selection" }
    }
  });

  const [showDatePicker, setShowDatePicker] = useState(false);

  const countryOptions = [
    { label: "--Select Country--", value: "" },
    { label: "India", value: "india" },
    { label: "USA", value: "usa" }
  ];
  const stateOptions = [
    { label: "--Select State--", value: "" },
    { label: "Maharashtra", value: "maharashtra" },
    { label: "Gujarat", value: "gujarat" }
  ];
  const cityOptions = [
    { label: "--Select City--", value: "" },
    { label: "Mumbai", value: "mumbai" },
    { label: "Pune", value: "pune" }
  ];
  const statusOptions = [
    { label: "--Select Status--", value: "" },
    { label: "Open", value: "open" },
    { label: "In Progress", value: "progress" },
    { label: "Completed", value: "completed" }
  ];

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <div className="bg-white rounded-lg p-6">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-3 gap-x-6 gap-y-4 items-end">
          {/* Task ID */}
          <Controller
            name="taskId"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label="Task ID:"
                placeholder=""
                size="sm"
                startIcon={<FaSearch />}
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
                size="sm"
                options={countryOptions}
                onChange={val => field.onChange(val)}
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
                size="sm"
                options={stateOptions}
                onChange={val => field.onChange(val)}
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
                size="sm"
                options={cityOptions}
                onChange={val => field.onChange(val)}
              />
            )}
          />
          {/* User */}
          <Controller
            name="user"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label="User:"
                placeholder="Enter User Name"
                size="sm"
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
                  startIcon={<FaCalendarAlt className="cursor-pointer" />}
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

          {/* Task Status */}
          <Controller
            name="taskStatus"
            control={control}
            render={({ field }) => (
              <Dropdown
                {...field}
                label="Task Status"
                placeholder="--Select Status--"
                size="sm"
                options={statusOptions}
                onChange={val => field.onChange(val)}
              />
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
