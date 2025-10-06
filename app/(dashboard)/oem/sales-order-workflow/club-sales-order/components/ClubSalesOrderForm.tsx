"use client";

import { useForm, Controller } from "react-hook-form";
import Input from "@/components/common/ui/Input";
import Button from "@/components/common/ui/Button";
import Dropdown from "@/components/common/ui/Dropdown";

type FormValues = {
  revisedFreightRate: string;
  assignTruck: string;
  vehicleRoute: string;
  orderType: string;
};

export default function ClubSalesOrderForm() {


  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      revisedFreightRate: "",
      assignTruck: "",
      vehicleRoute: "",
      orderType: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted:", data); // shows object in console
  };

  const truckOptions = [
    { label: "Truck A", value: "truck_a" },
    { label: "Truck B", value: "truck_b" },
    { label: "Truck C", value: "truck_c" },
  ];

  const routeOptions = [
    { label: "Route 1", value: "route_1" },
    { label: "Route 2", value: "route_2" },
    { label: "Route 3", value: "route_3" },
  ];

  const orderTypeOptions = [
    { label: "Normal", value: "normal" },
    { label: "Express", value: "express" },
    { label: "Urgent", value: "urgent" },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-3 gap-6 items-end"
      >
        {/* Country */}
        <Controller
          name="revisedFreightRate"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              label="Revised Freight Rate"
              placeholder="--Start From--"
              size="sm"
              className="text-gray-500"
              onChange={(val) => field.onChange(val)}
            />
          )}
        />

        {/* User */}
        <Controller
          name="assignTruck"
          control={control}
          render={({ field }) => (
            <Dropdown
              {...field}
              label="Assign Truck"
              placeholder="--select truck--"
              size="sm"
              required
              options={truckOptions}
              className="text-gray-500"
              onChange={(val) => field.onChange(val)}
            />
          )}
        />

        {/* State */}
        <Controller
          name="vehicleRoute"
          control={control}
          render={({ field }) => (
            <Dropdown
              {...field}
              label="Vehicle Route"
              placeholder="--select route--"
              options={routeOptions}
              size="sm"
              required
              className="text-gray-500"
              onChange={(val) => field.onChange(val)}
            />
          )}
        />

        {/* City */}
        <Controller
          name="orderType"
          control={control}
          render={({ field }) => (
            <Dropdown
              {...field}
              label="Order Type"
              placeholder="--select type--"
              size="sm"
              options={orderTypeOptions}
              className="text-gray-500"
              onChange={(val) => field.onChange(val)}
            />
          )}
        />

        {/* Buttons */}
        <div className="col-span-3 flex gap-3 justify-end mt-4">
          <Button type="submit">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
