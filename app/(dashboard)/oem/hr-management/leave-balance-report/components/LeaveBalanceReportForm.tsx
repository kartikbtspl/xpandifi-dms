"use client";
import { useForm, Controller } from "react-hook-form";
import Dropdown from "@/components/common/ui/Dropdown";
import Button from "@/components/common/ui/Button";

type FormValues = {
  user: string;
  year: string;
};

interface LeaveBalanceReportFormProps {
  onFilter: (filters: FormValues) => void;
}

export default function LeaveBalanceReportForm({ onFilter }: LeaveBalanceReportFormProps) {
  const userOptions = [
    { value: "Ajinkya", label: "Ajinkya Darkase" },
    { value: "Neha", label: "Neha Sharma" },
    { value: "Rohit", label: "Rohit Patil" },
    { value: "Priya", label: "Priya Kulkarni" },
    { value: "Vikram", label: "Vikram Joshi" },
  ];

  const yearOptions = [
    { value: "2023", label: "2023" },
    { value: "2024", label: "2024" },
    { value: "2025", label: "2025" },
  ];

  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      user: "",
      year: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    onFilter(data); // send filters up
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* User + Year Dropdowns */}
        <div className="flex w-3/4 gap-6">
          <div className="flex-1">
            <Controller
              name="user"
              control={control}
              render={({ field }) => (
                <Dropdown
                  {...field}
                  label="User"
                  placeholder="--Select User--"
                  options={userOptions}
                  size="sm"
                  className="w-full text-gray-500"
                  onChange={(val) => field.onChange(val)}
                />
              )}
            />
          </div>

          <div className="flex-1">
            <Controller
              name="year"
              control={control}
              render={({ field }) => (
                <Dropdown
                  {...field}
                  label="Year"
                  placeholder="--Select Year--"
                  options={yearOptions}
                  size="sm"
                  className="w-full text-gray-500"
                  onChange={(val) => field.onChange(val)}
                />
              )}
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 justify-end mt-6">
          <Button
            type="button"
            variant="outline"
            onClick={() => {
              reset();
              onFilter({ user: "", year: "" });
            }}
          >
            Reset
          </Button>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
}
