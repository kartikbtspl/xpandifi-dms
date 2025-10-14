"use client";

import { useForm, Controller } from "react-hook-form";
import Input from "@/components/common/ui/Input";
import Dropdown from "@/components/common/ui/Dropdown";
import Button from "@/components/common/ui/Button";

type FormValues = {
  routeName: string;
  distributor: string;
};

const distributorOptions = [
  { label: "--Select Distributor--", value: "" },
  // ...other options
];

export default function RouteForm({ onSearch }: { onSearch: (data: FormValues) => void }) {
  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      routeName: "",
      distributor: "",
    },
  });

  return (
    <div className="bg-white rounded-lg p-6 w-full">
      <form onSubmit={handleSubmit(onSearch)}>
        <div className="grid grid-cols-3 gap-x-8 gap-y-4">
          <Controller
            name="routeName"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label="Route Name:"
                size="sm"
              />
            )}
          />
          <Controller
            name="distributor"
            control={control}
            render={({ field }) => (
              <Dropdown
                {...field}
                label="Select Distributor:"
                options={distributorOptions}
                size="sm"
                placeholder="--Select Distributor--"
                onChange={val => field.onChange(val)}
              />
            )}
          />
        </div>
        <div className="flex justify-end gap-4 mt-8">
          <Button variant="outline" type="button" onClick={() => reset()}>
            Cancel
          </Button>
          <Button type="submit" className="bg-[#445E94] text-white px-8">
            Search
          </Button>
        </div>
      </form>
    </div>
  );
}
