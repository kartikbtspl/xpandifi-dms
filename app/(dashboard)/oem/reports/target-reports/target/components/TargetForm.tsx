"use client";

import { useForm, Controller } from "react-hook-form";
import Dropdown from "@/components/common/ui/Dropdown";
import Input from "@/components/common/ui/Input";
import Button from "@/components/common/ui/Button";
import { useState } from "react";

const today = new Date();
const currentMonth = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}`;

type FormValues = {
  state: string;
  city: string;
  country: string;
  user: string;
  monthRange: string;
};

export default function TargetForm() {
  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      state: "",
      city: "",
      country: "",
      user: "",
      monthRange: currentMonth
    },
  });

  const [showDatePicker, setShowDatePicker] = useState(false);

  const stateOptions = [
    { label: "--Select State--", value: "" },
    { label: "Maharashtra", value: "maharashtra" },
    { label: "Karnataka", value: "karnataka" },
  ];
  const cityOptions = [
    { label: "--Select City--", value: "" },
    { label: "Mumbai", value: "mumbai" },
    { label: "Pune", value: "pune" },
  ];
  const countryOptions = [
    { label: "--Select Country--", value: "" },
    { label: "India", value: "india" },
    { label: "USA", value: "usa" },
  ];
  const userOptions = [
    { label: "--Select User--", value: "" },
    { label: "User 1", value: "user1" },
    { label: "User 2", value: "user2" },
  ];

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <div className="bg-white rounded-lg p-6">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-3 gap-x-6 gap-y-4 items-end">
          {/* Row 1 */}
          <Controller
            name="state"
            control={control}
            render={({ field }) => (
              <Dropdown
                {...field}
                label="State:"
                placeholder="--Select State--"
                size="sm"
                options={stateOptions}
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
                placeholder="--Select City--"
                size="sm"
                options={cityOptions}
                onChange={val => field.onChange(val)}
              />
            )}
          />
          <Controller
            name="country"
            control={control}
            render={({ field }) => (
              <Dropdown
                {...field}
                label="Country:"
                placeholder="--Select Country--"
                size="sm"
                options={countryOptions}
                onChange={val => field.onChange(val)}
              />
            )}
          />

          {/* Row 2 */}
          <Controller
            name="user"
            control={control}
            render={({ field }) => (
              <Dropdown
                {...field}
                label="User:"
                placeholder="--Select User--"
                size="sm"
                options={userOptions}
                onChange={val => field.onChange(val)}
              />
            )}
          />

          {/* Date Range takes last two columns for spacing */}
          <div>
            <Controller
              name="monthRange"
              control={control}
              render={({ field }) => (
                  <Input
                    type="month"
                    {...field}
                    label="Select Month"
                    className="input input-bordered input-sm"
                    placeholder="Form month" // use your styling
                    onChange={e => field.onChange(e.target.value)}
                  />
              )}
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4 mt-4">
          <Button variant="outline" type="button" onClick={() => reset()}>
            Reset
          </Button>
          <Button type="submit" className="bg-[#445E94] text-white px-6">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
