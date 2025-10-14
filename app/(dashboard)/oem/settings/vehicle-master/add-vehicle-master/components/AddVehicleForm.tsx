"use client";

import { useForm, Controller } from "react-hook-form";
import Input from "@/components/common/ui/Input";
import Dropdown from "@/components/common/ui/Dropdown";
import Button from "@/components/common/ui/Button";

type FormValues = {
  vehicleNo: string;
  driverName: string;
  driverMobile: string;
  tonnage: string;
  margin: string;
  routeName: string;
  description: string;
  country: string;
  state: string;
  city: string;
  status: string;
  startPoint: string;
  endPoint: string;
};

const marginOptions = [
  { label: "--Select Margin--", value: "" },
  // ...other options
];

const descriptionOptions = [
  { label: "--Select Task Type--", value: "" },
  // ...other options
];

export default function VehicleMasterForm() {
  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      vehicleNo: "",
      driverName: "",
      driverMobile: "",
      tonnage: "",
      margin: "",
      routeName: "",
      description: "",
      country: "",
      state: "",
      city: "",
      status: "",
      startPoint: "",
      endPoint: "",
    },
  });

  // Handle submit and log the data object
  const onSubmit = (data: FormValues) => {
    console.log("Form Data Object:", data);
  };

  return (
    <div className="bg-white rounded-lg p-6 w-full">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-3 gap-x-8 gap-y-4">
          <Controller
            name="vehicleNo"
            control={control}
            render={({ field }) => (
              <Input {...field} label="Vehicle No" size="sm" required />
            )}
          />
          <Controller
            name="driverName"
            control={control}
            render={({ field }) => (
              <Input {...field} label="Driver Name" size="sm" required />
            )}
          />
          <Controller
            name="driverMobile"
            control={control}
            render={({ field }) => (
              <Input {...field} label="Driver Mobile" size="sm" required />
            )}
          />
          <Controller
            name="tonnage"
            control={control}
            render={({ field }) => (
              <Input {...field} label="Tonnage" size="sm" required />
            )}
          />
          <Controller
            name="margin"
            control={control}
            render={({ field }) => (
              <Dropdown
                {...field}
                label="Margin"
                options={marginOptions}
                size="sm"
                placeholder="--Select Margin--"
                onChange={val => field.onChange(val)}
                required
              />
            )}
          />
          <Controller
            name="routeName"
            control={control}
            render={({ field }) => (
              <Input {...field} label="Route Name" size="sm" required />
            )}
          />
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <Dropdown
                {...field}
                label="Description"
                options={descriptionOptions}
                size="sm"
                placeholder="--Select Task Type--"
                onChange={val => field.onChange(val)}
                required
              />
            )}
          />
          <Controller
            name="country"
            control={control}
            render={({ field }) => (
              <Input {...field} label="Country" size="sm" required />
            )}
          />
          <Controller
            name="state"
            control={control}
            render={({ field }) => (
              <Input {...field} label="State" size="sm" required />
            )}
          />
          <Controller
            name="city"
            control={control}
            render={({ field }) => (
              <Input {...field} label="City" size="sm" required />
            )}
          />
          <Controller
            name="status"
            control={control}
            render={({ field }) => (
              <Input {...field} label="Status" size="sm" required />
            )}
          />
          <Controller
            name="startPoint"
            control={control}
            render={({ field }) => (
              <Input {...field} label="Start Point" size="sm" required />
            )}
          />
          <Controller
            name="endPoint"
            control={control}
            render={({ field }) => (
              <Input {...field} label="End Point" size="sm" required />
            )}
          />
        </div>
        <div className="flex justify-end gap-4 mt-8">
          <Button variant="outline" type="button" onClick={() => reset()}>
            Cancel
          </Button>
          <Button type="submit" className="bg-[#445E94] text-white px-8">
            Save
          </Button>
        </div>
      </form>
    </div>
  );
}
