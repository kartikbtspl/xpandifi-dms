// components/SearchFilters.tsx
"use client";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Search, User } from "lucide-react";
import Input from "../../../../components/common/ui/Input";
import Dropdown from "../../../../components/common/ui/Dropdown";
import Button from "../../../../components/common/ui/Button";

type FormValues = {
  searchCustomer: string;
  selectCountry: string;
  selectZone: string;
  selectCity: string;
  teamspring: string;
  route: string;
  selectUser: string;
  selectCustomerType: string;
  dateRange: string;
};

const SearchFilters: React.FC = () => {
  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      searchCustomer: "",
      selectCountry: "",
      selectZone: "",
      selectCity: "",
      teamspring: "",
      route: "",
      selectUser: "",
      selectCustomerType: "",
      dateRange: "",
    }
  });

  const countryOptions = [
    { value: "india", label: "India" },
    { value: "usa", label: "USA" },
    { value: "canada", label: "Canada" },
    { value: "uk", label: "UK" }
  ];

  const zoneOptions = [
    { value: "north", label: "North Zone" },
    { value: "south", label: "South Zone" },
    { value: "east", label: "East Zone" },
    { value: "west", label: "West Zone" }
  ];

  const cityOptions = [
    { value: "mumbai", label: "Mumbai" },
    { value: "delhi", label: "Delhi" },
    { value: "bangalore", label: "Bangalore" },
    { value: "chennai", label: "Chennai" }
  ];

  const teamspringOptions = [
    { value: "team1", label: "Team 1" },
    { value: "team2", label: "Team 2" },
    { value: "team3", label: "Team 3" }
  ];

  const routeOptions = [
    { value: "route1", label: "Route 1" },
    { value: "route2", label: "Route 2" },
    { value: "route3", label: "Route 3" }
  ];

  const userOptions = [
    { value: "user1", label: "User 1" },
    { value: "user2", label: "User 2" },
    { value: "user3", label: "User 3" }
  ];

  const customerTypeOptions = [
    { value: "premium", label: "Premium" },
    { value: "standard", label: "Standard" },
    { value: "basic", label: "Basic" }
  ];

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted:", data);
  };

  const onReset = () => {
    reset();
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-sm">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        
        {/* First Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          
          {/* Search Customer */}
          <Controller
            name="searchCustomer"
            control={control}
            render={({ field, fieldState }) => (
              <Input
                {...field}
                label="Search Customer"
                placeholder="search customer by name, phone number"
                startIcon={<Search className="w-4 h-4" />}
                error={fieldState.error?.message}
              />
            )}
          />

          {/* Select Country */}
          <Controller
            name="selectCountry"
            control={control}
            render={({ field, fieldState }) => (
              <Dropdown
                {...field}
                label="Select Country"
                placeholder="Select Country"
                options={countryOptions}
                error={fieldState.error?.message}
                clearable
              />
            )}
          />

          {/* Select Zone */}
          <Controller
            name="selectZone"
            control={control}
            render={({ field, fieldState }) => (
              <Dropdown
                {...field}
                label="Select Zone"
                placeholder="Select Zone"
                options={zoneOptions}
                error={fieldState.error?.message}
              />
            )}
          />

          {/* Select City */}
          <Controller
            name="selectCity"
            control={control}
            render={({ field, fieldState }) => (
              <Dropdown
                {...field}
                label="Select City"
                placeholder="Select City"
                options={cityOptions}
                error={fieldState.error?.message}
              />
            )}
          />

          {/* Teamspring */}
          <Controller
            name="teamspring"
            control={control}
            render={({ field, fieldState }) => (
              <Dropdown
                {...field}
                label="Teamspring"
                placeholder="Teamspring"
                options={teamspringOptions}
                error={fieldState.error?.message}
              />
            )}
          />
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Route */}
          <Controller
            name="route"
            control={control}
            render={({ field, fieldState }) => (
              <Dropdown
                {...field}
                label="Route"
                placeholder="Route"
                options={routeOptions}
                error={fieldState.error?.message}
              />
            )}
          />

          {/* Select User */}
          <Controller
            name="selectUser"
            control={control}
            render={({ field, fieldState }) => (
              <Dropdown
                {...field}
                label="Select User"
                placeholder="Select User"
                options={userOptions}
                error={fieldState.error?.message}
              />
            )}
          />

          {/* Select Customer Type */}
          <Controller
            name="selectCustomerType"
            control={control}
            render={({ field, fieldState }) => (
              <Dropdown
                {...field}
                label="Select Customer Type"
                placeholder="Select Customer Type"
                options={customerTypeOptions}
                error={fieldState.error?.message}
              />
            )}
          />

          {/* Date Range */}
          <Controller
            name="dateRange"
            control={control}
            render={({ field, fieldState }) => (
              <Input
                {...field}
                type="date"
                label="Date Range"
                error={fieldState.error?.message}
              />
            )}
          />
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-4">
          <Button rounded="full">Submit</Button>
          <Button variant="ghost" textColor="red-200">Reset</Button>
        </div>
      </form>
    </div>
  );
};

export default SearchFilters;
