"use client";

import { useForm, Controller } from "react-hook-form";
import Dropdown from "@/components/common/ui/Dropdown";
import Input from "@/components/common/ui/Input";
import Button from "@/components/common/ui/Button";

type FormValues = {
  user: string;
  coTravelers: string;
  journeyType: string;
  modeOfTravel: string;
  beatPlanDate: string;
  distributor: string;
  route: string;
  customer: string;
  city: string;
};

export default function AddNewBeatForm() {
  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      user: "",
      coTravelers: "",
      journeyType: "",
      modeOfTravel: "",
      beatPlanDate: "",
      distributor: "",
      route: "",
      customer: "",
      city: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form Submitted:", data);
  };

  const onReset = () => reset();

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h2 className="text-lg font-semibold text-gray-800 mb-6">
        Add Beat Plan
      </h2>
      <hr className="text-gray-200 mb-4"/>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-6">
        {/* Grid layout */}
        <div className="grid grid-cols-3 gap-6">
          {/* User */}
          <Controller
            name="user"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Dropdown
                {...field}
                label="User"
                required
                placeholder="My Beat"
                options={[{ value: "user1", label: "User 1" }]}
                size="sm"
              />
            )}
          />

          {/* Co-Travelers */}
          <Controller
            name="coTravelers"
            control={control}
            render={({ field }) => (
              <Dropdown
                {...field}
                label="Co-Travelers"
                placeholder="--Select User--"
                options={[{ value: "trav1", label: "Traveller 1" }]}
                size="sm"
              />
            )}
          />

          {/* Journey Type */}
          <Controller
            name="journeyType"
            control={control}
            render={({ field }) => (
              <Dropdown
                {...field}
                label="Journey Type"
                placeholder="--Select Type--"
                options={[
                  { value: "business", label: "Business" },
                  { value: "personal", label: "Personal" },
                ]}
                size="sm"
              />
            )}
          />

          {/* Mode of Travel */}
          <Controller
            name="modeOfTravel"
            control={control}
            render={({ field }) => (
              <Dropdown
                {...field}
                label="Mode Of Travel"
                placeholder="--Select Mode--"
                options={[
                  { value: "car", label: "Car" },
                  { value: "bus", label: "Bus" },
                  { value: "train", label: "Train" },
                  { value: "flight", label: "Flight" },
                ]}
                size="sm"
              />
            )}
          />

          {/* Beat Plan Date */}
          <Controller
            name="beatPlanDate"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Input
                {...field}
                type="date"
                label="Beat Plan Date"
                required
                size="sm"
              />
            )}
          />

          {/* Select Route */}
          <Controller
            name="route"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Input
                {...field}
                type="text"
                label="Select Route"
                required
                placeholder="Enter Route"
                size="sm"
              />
            )}
          />

          {/* Distributor */}
          <Controller
            name="distributor"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Dropdown
                {...field}
                label="Distributor"
                placeholder="--Select State--"
                required
                options={[
                  { value: "dist1", label: "Distributor 1" },
                  { value: "dist2", label: "Distributor 2" },
                ]}
                size="sm"
              />
            )}
          />

          {/* Select Customer */}
          <Controller
            name="customer"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Input
                {...field}
                type="text"
                label="Select Customer*"
                placeholder="Enter customer"
                size="sm"
              />
            )}
          />

          {/* City */}
          <Controller
            name="city"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="text"
                label="City"
                placeholder="Enter city"
                size="sm"
              />
            )}
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3">
          <Button type="button" variant="outline" onClick={onReset}>
            Reset
          </Button>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
}
