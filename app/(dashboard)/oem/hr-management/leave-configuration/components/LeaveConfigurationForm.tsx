"use client";

import { useForm, Controller } from "react-hook-form";
import Dropdown from "@/components/common/ui/Dropdown";
import Button from "@/components/common/ui/Button";

type FormValues = {
  role: string;
  leaveType: string;
};

interface LeaveConfigurationFormProps {
  onFilter: (filters: FormValues) => void;
}

export default function LeaveConfigurationForm({ onFilter }: LeaveConfigurationFormProps) {
  const roleOptions = [
    { value: "admin", label: "Admin" },
    { value: "manager", label: "Manager" },
    { value: "employee", label: "Employee" },
    { value: "intern", label: "Intern" },
  ];

  const leaveTypeOptions = [
    { value: "casual", label: "Casual Leave" },
    { value: "sick", label: "Sick Leave" },
    { value: "earned", label: "Earned Leave" },
    { value: "unpaid", label: "Unpaid Leave" },
  ];

  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      role: "",
      leaveType: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    onFilter(data); // send filters up
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Role + Leave Type Dropdowns */}
        <div className="flex w-3/4 gap-6">
          <div className="flex-1">
            <Controller
              name="role"
              control={control}
              render={({ field }) => (
                <Dropdown
                  {...field}
                  label="Role"
                  placeholder="--Select Role--"
                  options={roleOptions}
                  size="sm"
                  className="w-full text-gray-500"
                  onChange={(val) => field.onChange(val)}
                />
              )}
            />
          </div>

          <div className="flex-1">
            <Controller
              name="leaveType"
              control={control}
              render={({ field }) => (
                <Dropdown
                  {...field}
                  label="Leave Type"
                  placeholder="--Select Leave Type--"
                  options={leaveTypeOptions}
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
              onFilter({ role: "", leaveType: "" });
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
