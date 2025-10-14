"use client";

import { useForm, Controller } from "react-hook-form";
import Input from "@/components/common/ui/Input";
import Dropdown from "@/components/common/ui/Dropdown";
import Button from "@/components/common/ui/Button";

type FormValues = {
  vehicleInfo: string;
  state: string;
  city: string;
  tonnage: string;
};

const stateOptions = [
  { label: "-Select State-", value: "" },
  { label: "Maharashtra", value: "maharashtra" },
  { label: "Karnataka", value: "karnataka" },
];

const cityOptions = [
  { label: "-Select City-", value: "" },
  { label: "Mumbai", value: "mumbai" },
  { label: "Pune", value: "pune" },
];

const tonnageOptions = [
  { label: "-Select Tonnage-", value: "" },
  { label: "7 Tonne", value: "7" },
  { label: "18 Tonne", value: "18" },
];

export default function VehicleMasterForm() {
  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      vehicleInfo: "",
      state: "",
      city: "",
      tonnage: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Submitted Data:", data);
  };

  return (
    <div className="bg-white rounded-lg p-6 w-full">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-3 gap-x-8 gap-y-4">
          <Controller
            name="vehicleInfo"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label="Vehicle No/Driver Name/Driver Mobile"
                size="sm"
                placeholder=""
              />
            )}
          />
          <Controller
            name="state"
            control={control}
            render={({ field }) => (
              <Dropdown
                {...field}
                label="State:"
                options={stateOptions}
                size="sm"
                placeholder="-Select State-"
                onChange={val => field.onChange(val)}
              />
            )}
          />
          <Controller
            name="city"
            control={control}
            render={({ field }) => (
              <Dropdown
                {...field}
                label="City:"
                options={cityOptions}
                size="sm"
                placeholder="-Select City-"
                onChange={val => field.onChange(val)}
              />
            )}
          />
          <Controller
            name="tonnage"
            control={control}
            render={({ field }) => (
              <Dropdown
                {...field}
                label="Tonnage:"
                options={tonnageOptions}
                size="sm"
                placeholder="-Select Tonnage-"
                onChange={val => field.onChange(val)}
              />
            )}
          />
        </div>
        <div className="flex justify-end gap-4 mt-8">
          <Button
            variant="outline"
            type="button"
            onClick={() => reset()}
          >
            Reset
          </Button>
          <Button
            type="submit"
            className="bg-[#445E94] text-white px-8"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
