"use client";

import { useForm, Controller } from "react-hook-form";
import Dropdown from "@/components/common/ui/Dropdown";
import Input from "@/components/common/ui/Input";
import Button from "@/components/common/ui/Button";
import { useDeliveryPlanStore } from "@/store/useDeliveryPlanStore";

type FormValues = {
  user: string;
  deliveryPlanDate: string;
  distributor: string;
  route: string;
  customer: string;
  target: string;
};

export default function AddNewDeliveryPlanForm() {
  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      user: "",
      deliveryPlanDate: "",
      distributor: "",
      route: "",
      customer: "",
      target: "",
    },
  });

  const addDeliveryPlan = useDeliveryPlanStore((state) => state.addDeliveryPlan);

  const onSubmit = (data: FormValues) => {
    addDeliveryPlan(data); // 👈 push into Zustand store
    reset();
  };

  const userOptions = [
    { value: "Anup Naik", label: "Anup Naik" },
    { value: "User 2", label: "User 2" },
  ];
  const distributorOptions = [
    { value: "Jon Doe", label: "Jon Doe" },
    { value: "Distributor 2", label: "Distributor 2" },
  ];
  const routeOptions = [
    { value: "Chinchwad", label: "Chinchwad" },
    { value: "Route 2", label: "Route 2" },
  ];
  const customerOptions = [
    { value: "Ankush", label: "Ankush" },
    { value: "Customer 2", label: "Customer 2" },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-3 gap-x-6 gap-y-4"
      >
        {/* User */}
        <Controller
          name="user"
          control={control}
          render={({ field }) => (
            <Dropdown
              {...field}
              label="User Name"
              options={userOptions}
              placeholder="--Select User--"
              size="sm"
            />
          )}
        />

        {/* Delivery Plan Date */}
        <Controller
          name="deliveryPlanDate"
          control={control}
          render={({ field }) => (
            <Input {...field} type="date" label="Delivery Plan Date" required size="sm" />
          )}
        />

        {/* Distributor */}
        <Controller
          name="distributor"
          control={control}
          render={({ field }) => (
            <Dropdown
              {...field}
              label="Distributor"
              options={distributorOptions}
              placeholder="--Select Distributor--"
              size="sm"
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
              label="Route"
              options={routeOptions}
              placeholder="--Select Route--"
              size="sm"
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
              label="Customer"
              options={customerOptions}
              placeholder="--Select Customer--"
              size="sm"
            />
          )}
        />

        {/* Target */}
        <Controller
          name="target"
          control={control}
          render={({ field }) => (
            <Input {...field} label="Target" placeholder="Target" size="sm" />
          )}
        />

        {/* Buttons */}
        <div className="col-span-3 flex justify-end gap-3 mt-2">
          <Button type="button" variant="outline" onClick={() => reset()}>
            Reset
          </Button>
          <Button type="submit" className="bg-[#445E94] hover:bg-[#364c73]">
            Add
          </Button>
        </div>
      </form>
    </div>
  );
}
