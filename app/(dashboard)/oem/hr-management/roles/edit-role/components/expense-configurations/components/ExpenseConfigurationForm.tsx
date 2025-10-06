"use client";

import { useForm, Controller } from "react-hook-form";
import Input from "@/components/common/ui/Input";
import Button from "@/components/common/ui/Button";
import Dropdown from "@/components/common/ui/Dropdown";

type FormValues = {
  expenseCode: string;
  expenseType: string;
  cityType: string;
  expenseName: string;
  maxAllowedAmount: string;
  isDefault: string;
  isFixed: string;
  isDistance: string;
  modeOfTravel: string;
};

interface ExpenseConfigurationFormProps {
  onAddExpenseConfig: (data: any) => void;
}

const yesNoOptions = [
  { label: "Yes", value: "Yes" },
  { label: "No", value: "No" }
];

const cityTypeOptions = [
  { label: "--City Type--", value: "" },
  { label: "Metropolitan", value: "Metropolitan" },
  { label: "Urban", value: "Urban" },
  { label: "Rural", value: "Rural" }
];

const modeTravelOptions = [
  { label: "--Select Mode Of Travel--", value: "" },
  { label: "Air", value: "Air" },
  { label: "Rail", value: "Rail" },
  { label: "Road", value: "Road" },
  { label: "Ship", value: "Ship" }
];

export default function ExpenseConfigurationForm({ onAddExpenseConfig }: ExpenseConfigurationFormProps) {
  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      expenseCode: "",
      expenseType: "",
      cityType: "",
      expenseName: "",
      maxAllowedAmount: "",
      isDefault: "",
      isFixed: "No",
      isDistance: "No",
      modeOfTravel: "",
    }
  });

  const onSubmit = (data: FormValues) => {
    onAddExpenseConfig(data);
    reset();
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-3 gap-6 items-end">
        <Controller
          name="expenseCode"
          control={control}
          render={({ field }) => (
            <Input {...field} label="Expense Code:" size="sm" className="text-gray-500" />
          )}
        />
        <Controller
          name="expenseType"
          control={control}
          render={({ field }) => (
            <Input {...field} label="Expense Type:" size="sm" className="text-gray-500" />
          )}
        />
        <Controller
          name="cityType"
          control={control}
          render={({ field }) => (
            <Dropdown
              {...field}
              label="City Type:"
              options={cityTypeOptions}
              size="sm"
              className="text-gray-500"
              placeholder="--City Type--"
              onChange={val => field.onChange(val)}
            />
          )}
        />
        <Controller
          name="expenseName"
          control={control}
          render={({ field }) => (
            <Input {...field} label="Expense Name:" size="sm" className="text-gray-500" />
          )}
        />
        <Controller
          name="maxAllowedAmount"
          control={control}
          render={({ field }) => (
            <Input {...field} label="Max Allowed Amount:" size="sm" className="text-gray-500" />
          )}
        />
        <Controller
          name="isDefault"
          control={control}
          render={({ field }) => (
            <Input {...field} label="Is Default:" size="sm" className="text-gray-500" />
          )}
        />
        <Controller
          name="isFixed"
          control={control}
          render={({ field }) => (
            <Dropdown
              {...field}
              label="Is Fixed:"
              options={yesNoOptions}
              size="sm"
              className="text-gray-500"
              onChange={val => field.onChange(val)}
            />
          )}
        />
        <Controller
          name="isDistance"
          control={control}
          render={({ field }) => (
            <Dropdown
              {...field}
              label="Is Distance:"
              options={yesNoOptions}
              size="sm"
              className="text-gray-500"
              onChange={val => field.onChange(val)}
            />
          )}
        />
        <Controller
          name="modeOfTravel"
          control={control}
          render={({ field }) => (
            <Dropdown
              {...field}
              label="Mode Of Travel:"
              placeholder="--Select Mode Of Travel--"
              options={modeTravelOptions}
              size="sm"
              className="text-gray-500"
              onChange={val => field.onChange(val)}
            />
          )}
        />
        <div className="col-span-3 flex gap-3 justify-end mt-4">
          <Button variant="outline" type="button" onClick={() => reset()}>
            Reset
          </Button>
          <Button type="submit">
            Add
          </Button>
        </div>
      </form>
    </div>
  );
}
