"use client";
import { useForm, Controller } from "react-hook-form";
import Input from "@/components/common/ui/Input";
import Button from "@/components/common/ui/Button";
import Dropdown from "@/components/common/ui/Dropdown";

type Option = {
  label: string;
  value: string;
};

type FormValues = {
  country: string;
  state: string;
  city: string;
  freightRate: string;
};

const countryOptions: Option[] = [
  { label: "--Select Country--", value: "" },
  // ...other country options
];

const stateOptions: Option[] = [
  { label: "--Select State--", value: "" },
  // ...other state options
];

const cityOptions: Option[] = [
  { label: "--Select City--", value: "" },
  // ...other city options
];

export default function FreightMasterForm({ onAdd }: { onAdd: (data: FormValues) => void }) {
  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      country: "",
      state: "",
      city: "",
      freightRate: "",
    },
  });

  return (
    <div className="bg-white rounded-lg p-6 w-full">
      <form onSubmit={handleSubmit(onAdd)}>
        <div className="grid grid-cols-3 gap-x-6 gap-y-4">
          <Controller
            name="country"
            control={control}
            render={({ field }) => (
              <Dropdown
                {...field}
                label="Country:"
                options={countryOptions}
                size="sm"
                placeholder="--Select Country--"
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
                placeholder="--Select State--"
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
                placeholder="--Select City--"
              />
            )}
          />
          {/* Freight Rate covers next row, so put it in a col-span-1 and leave others blank */}
          <div className="col-span-1">
            <Controller
              name="freightRate"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  label="Freight Rate:"
                  size="sm"
                  placeholder=""
                  type="text"
                />
              )}
            />
          </div>
        </div>
        <div className="flex justify-end gap-4 mt-6">
          <Button variant="outline" type="button" onClick={() => reset()}>
            Reset
          </Button>
          <Button type="submit" className="bg-[#445E94] text-white px-8">
            Add
          </Button>
        </div>
      </form>
    </div>
  );
}
