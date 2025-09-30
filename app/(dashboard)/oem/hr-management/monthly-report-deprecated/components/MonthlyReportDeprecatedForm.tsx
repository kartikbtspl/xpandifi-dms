"use client";
import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import Button from "@/components/common/ui/Button";
import Dropdown from "@/components/common/ui/Dropdown";
import Input from "@/components/common/ui/Input";

type FormValues = {
  user: string;
  dateRange: { startDate: Date; endDate: Date; key: string };
  zone: string;
  country: string;
  state: string;
  city: string;
};

export default function AttendanceReportForm() {
  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      user: "",
      dateRange: { startDate: new Date(), endDate: new Date(), key: "selection" },
      zone: "",
      country: "",
      state: "",
      city: "",
    },
  });

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [formData, setFormData] = useState<FormValues>({
    user: "",
    dateRange: { startDate: new Date(), endDate: new Date(), key: "selection" },
    zone: "",
    country: "",
    state: "",
    city: "",
  });

  const userOptions = [
    { value: "shreyash", label: "Shreyash" },
    { value: "neha", label: "Neha" },
  ];
  const zoneOptions = [{ value: "west", label: "West" }];
  const countryOptions = [{ value: "india", label: "India" }];
  const stateOptions = [
    { value: "maharashtra", label: "Maharashtra" },
    { value: "gujarat", label: "Gujarat" },
  ];
  const cityOptions = [
    { value: "pune", label: "Pune" },
    { value: "mumbai", label: "Mumbai" },
  ];

  const onSubmit = (data: FormValues) => {
    setFormData(data);
    console.log("Form submitted:", data);
    setShowDatePicker(false);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Monthly Attendance Report</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* User */}
          <Controller
            name="user"
            control={control}
            render={({ field }) => (
              <Dropdown {...field} label="User" placeholder="--Select User--" options={userOptions} />
            )}
          />

          {/* Date Range */}
          <Controller
            name="dateRange"
            control={control}
            render={({ field }) => (
              <div className="flex flex-col relative col-span-3 md:col-span-1">
                <label className="mb-1 text-sm font-medium text-gray-700">Date Range:</label>
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

          {/* Zone */}
          <Controller
            name="zone"
            control={control}
            render={({ field }) => (
              <Dropdown {...field} label="Zone" placeholder="--Select Zone--" options={zoneOptions} />
            )}
          />

          {/* Country */}
          <Controller
            name="country"
            control={control}
            render={({ field }) => <Dropdown {...field} label="Country" options={countryOptions} />}
          />

          {/* State */}
          <Controller
            name="state"
            control={control}
            render={({ field }) => <Dropdown {...field} label="State" options={stateOptions} />}
          />

          {/* City */}
          <Controller
            name="city"
            control={control}
            render={({ field }) => <Dropdown {...field} label="City" options={cityOptions} />}
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-3 justify-end mt-6">
          <Button
            type="button"
            variant="outline"
            onClick={() => {
              reset();
              setFormData({
                user: "",
                dateRange: { startDate: new Date(), endDate: new Date(), key: "selection" },
                zone: "",
                country: "",
                state: "",
                city: "",
              });
              setShowDatePicker(false);
            }}
          >
            Reset
          </Button>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
}
