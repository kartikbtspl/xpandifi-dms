"use client";
import { useForm, Controller } from "react-hook-form";
import Dropdown from "@/components/common/ui/Dropdown";
import Button from "@/components/common/ui/Button";

type FormValues = {
  user: string;
  month: string;
  year: number;
  zone: string;
  country: string;
  state: string;
  city: string;
};

interface Props {
  onFilter: (filters: FormValues) => void;
}

export default function AttendanceReportForm({ onFilter }: Props) {
  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      user: "",
      month: "",
      year: new Date().getFullYear(),
      zone: "",
      country: "",
      state: "",
      city: "",
    },
  });

  const userOptions = [
    { value: "shreyash", label: "Shreyash" },
    { value: "neha", label: "Neha" },
  ];
  const monthOptions = [
    { value: "sept", label: "September" },
    { value: "oct", label: "October" },
  ];
  const yearOptions = [
    { value: "2025", label: "2025" },
    { value: "2024", label: "2024" },
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
    onFilter({
      ...data,
      month: data.month, // 👈 keep string (e.g., "sept")
      year: Number(data.year),
    });
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          Attendance Summary
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* User */}
          <Controller
            name="user"
            control={control}
            render={({ field }) => (
              <Dropdown
                {...field}
                label="User"
                placeholder="--Select User--"
                options={userOptions}
              />
            )}
          />

          {/* Month */}
          <Controller
            name="month"
            control={control}
            render={({ field }) => (
              <Dropdown
                {...field}
                value={field.value}
                label="Report Month"
                options={monthOptions}
                onChange={(val) => field.onChange(val)} // 👈 keep string
              />
            )}
          />

          {/* Year */}
          <Controller
            name="year"
            control={control}
            render={({ field }) => (
              <Dropdown
                {...field}
                value={String(field.value)}
                label="Report Year"
                options={yearOptions}
                onChange={(val) => field.onChange(Number(val))}
              />
            )}
          />

          {/* Zone */}
          <Controller
            name="zone"
            control={control}
            render={({ field }) => (
              <Dropdown
                {...field}
                label="Zone"
                placeholder="--Select Zone--"
                options={zoneOptions}
              />
            )}
          />

          {/* Country */}
          <Controller
            name="country"
            control={control}
            render={({ field }) => (
              <Dropdown {...field} label="Country" options={countryOptions} />
            )}
          />

          {/* State */}
          <Controller
            name="state"
            control={control}
            render={({ field }) => (
              <Dropdown {...field} label="State" options={stateOptions} />
            )}
          />

          {/* City */}
          <Controller
            name="city"
            control={control}
            render={({ field }) => (
              <Dropdown {...field} label="City" options={cityOptions} />
            )}
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-3 justify-end mt-6">
          <Button
            type="button"
            variant="outline"
            onClick={() => {
              reset();
              onFilter({
                user: "",
                month: "",
                year: new Date().getFullYear(),
                zone: "",
                country: "",
                state: "",
                city: "",
              });
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
