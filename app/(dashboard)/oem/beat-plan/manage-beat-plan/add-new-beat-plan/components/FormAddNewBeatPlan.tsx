"use client";

import React from "react";
import { useForm, Controller } from "react-hook-form";
import Input from "@/components/common/ui/Input";
import Dropdown from "@/components/common/ui/Dropdown";
import Button from "@/components/common/ui/Button";

type FormValues = {
  user: string;
  beatPlanDate: string;
  distributor: string;
  route: string;
  customer: string;
  salesTarget: string;
  units: string;
  collectedTarget: string;
  sequence: string;
};

export default function FormAddNewBeatPlan() {
  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      user: "",
      beatPlanDate: "",
      distributor: "",
      route: "",
      customer: "",
      salesTarget: "",
      units: "",
      collectedTarget: "",
      sequence: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form Submitted:", data);
  };

  // Example options
  const userOptions = [
    { label: "John Doe", value: "john" },
    { label: "Jane Smith", value: "jane" },
  ];

  const distributorOptions = [
    { label: "Distributor A", value: "distA" },
    { label: "Distributor B", value: "distB" },
  ];

  const routeOptions = [
    { label: "Route 1", value: "route1" },
    { label: "Route 2", value: "route2" },
  ];

  const customerOptions = [
    { label: "Customer X", value: "custX" },
    { label: "Customer Y", value: "custY" },
  ];

  const unitOptions = [
    { label: "KG", value: "kg" },
    { label: "Litre", value: "litre" },
    { label: "Box", value: "box" },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h2 className="text-lg text-[#445E94] font-semibold mb-4">Add Beat Plan</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {/* User */}
        <Controller
          name="user"
          control={control}
          render={({ field }) => (
            <Dropdown
              {...field}
              label="User"
              options={userOptions}
              placeholder="--Select User--"
              required
            />
          )}
        />

        {/* Beat Plan Date */}
        <Controller
          name="beatPlanDate"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              type="date"
              className="text-gray-500"
              label="Beat Plan Date"
              required
              size="sm"
            />
          )}
        />

        {/* Distributor */}
        <Controller
          name="distributor"
          control={control}
          render={({ field }) => (
            <Dropdown
              {...field}
              label="Select Distributor"
              options={distributorOptions}
              placeholder="Select Distributor"
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
              label="Select Route"
              options={routeOptions}
              placeholder="Select Route"
            />
          )}
        />

        {/* Customer */}
        <Controller
          name="customer"
          control={control}
          render={({ field }) => (
            <Dropdown
              {...field}
              label="Select Customer"
              options={customerOptions}
              placeholder="Select Customer"
            />
          )}
        />

        {/* Sales Target */}
        <Controller
          name="salesTarget"
          control={control}
          render={({ field }) => (
            <Input {...field} label="Select Sales Target" placeholder="Enter Target" size="sm" />
          )}
        />

        {/* Units */}
        <Controller
          name="units"
          control={control}
          render={({ field }) => (
            <Dropdown
              {...field}
              label="Units"
              options={unitOptions}
              placeholder="Select Unit"
            />
          )}
        />

        {/* Collected Target */}
        <Controller
          name="collectedTarget"
          control={control}
          render={({ field }) => (
            <Input {...field} label="Collected Target" placeholder="GST0-0" size="sm" />
          )}
        />

        {/* Sequence */}
        <Controller
          name="sequence"
          control={control}
          render={({ field }) => (
            <Input {...field} label="Sequence" placeholder="MSP" size="sm" />
          )}
        />

        {/* Buttons */}
        <div className="col-span-1 md:col-span-3 flex justify-end gap-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => reset()}
            className="rounded-full"
          >
            Reset
          </Button>
          <Button type="submit" className="rounded-full bg-[#445E94]">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
