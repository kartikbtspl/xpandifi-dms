"use client";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import Dropdown from "@/components/common/ui/Dropdown";
import Button from "@/components/common/ui/Button";

type AttendanceFilters = {
  role: string;
  country: string;
  zone: string;
  state: string;
  city: string;
};

interface UsersFormProps {
  onSearch: (filters: AttendanceFilters) => void;
}

export default function UsersForm({ onSearch }: UsersFormProps) {
  const { control, handleSubmit, reset } = useForm<AttendanceFilters>({
    defaultValues: {
      role: "",
      country: "",
      zone: "",
      state: "",
      city: "",
    },
  });

  const roleOptions = [
    { label: "Admin", value: "admin" },
    { label: "Manager", value: "manager" },
    { label: "Employee", value: "employee" }
  ];

  const countryOptions = [
    { label: "India", value: "india" },
    { label: "USA", value: "usa" },
  ];

  const zoneOptions = [
    { label: "East", value: "east" },
    { label: "West", value: "west" },
    { label: "North", value: "north" },
    { label: "South", value: "south" }
  ];

  const stateOptions = [
    { label: "Maharashtra", value: "maharashtra" },
    { label: "California", value: "california" }
  ];

  const cityOptions = [
    { label: "Mumbai", value: "mumbai" },
    { label: "Los Angeles", value: "losangeles" }
  ];

  const onSubmit = (data: AttendanceFilters) => {
    onSearch(data);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-4">Users</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "role", label: "Role:", placeholder: "--Select Role--", options: roleOptions },
            { name: "country", label: "Country:", placeholder: "--Select Country--", options: countryOptions },
            { name: "zone", label: "Zone:", placeholder: "--Select Zone--", options: zoneOptions },
            { name: "state", label: "State:", placeholder: "--Select State--", options: stateOptions },
            { name: "city", label: "City:", placeholder: "--Select Status--", options: cityOptions },
          ].map(({ name, label, placeholder, options }) => (
            <div key={name}>
              <label className="block text-sm mb-1 font-medium text-gray-700">{label}</label>
              <Controller
                name={name as keyof AttendanceFilters}
                control={control}
                render={({ field }) => (
                  <Dropdown
                    {...field}
                    placeholder={placeholder}
                    options={options}
                    onChange={field.onChange}
                  />
                )}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-end gap-3 mt-8">
          <Button type="button" variant="outline" onClick={() => reset()}>
            Reset
          </Button>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
}
