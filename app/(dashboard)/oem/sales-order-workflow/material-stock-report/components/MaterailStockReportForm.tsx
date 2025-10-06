"use client";

import { useForm, Controller } from "react-hook-form";
import Input from "@/components/common/ui/Input";
import Button from "@/components/common/ui/Button";
import Dropdown from "@/components/common/ui/Dropdown";

type FormValues = {
  user: string;
  plant: string;
};

export default function MaterailStockReportForm() {


  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      user: "",
      plant: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted:", data); // shows object in console
  };

  const userOptions = [
    { label: "User 1", value: "user_1" },
    { label: "User 2", value: "user_2" },
    { label: "User 3", value: "user_3" },
  ];

  const plantOptions = [
    { label: "Plant 1", value: "Plant_1" },
    { label: "Plant 2", value: "Plant_2" },
    { label: "Plant 3", value: "Plant_3" },
  ];


  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-2 gap-6 items-end"
      >
        {/* Country */}
        <Controller
          name="user"
          control={control}
          render={({ field }) => (
            <Dropdown
              {...field}
              label="User"
              placeholder="--select user--"
              size="sm"
              options={userOptions}
              className="text-gray-500"
              onChange={(val) => field.onChange(val)}
            />
          )}
        />

        {/* User */}
        <Controller
          name="plant"
          control={control}
          render={({ field }) => (
            <Dropdown
              {...field}
              label="Plant"
              placeholder="--select plant--"
              size="sm"
              required
              options={plantOptions}
              className="text-gray-500"
              onChange={(val) => field.onChange(val)}
            />
          )}
        />

        {/* Buttons */}
        <div className="col-span-2 flex gap-3 justify-end mt-4">
          <Button variant="outline"  onClick={() => reset()}>Reset</Button>
          <Button type="submit">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
