"use client";

import { useForm, Controller } from "react-hook-form";
import Input from "@/components/common/ui/Input";
import Button from "@/components/common/ui/Button";
import Dropdown from "@/components/common/ui/Dropdown";

type FormValues = {
  leaveName: string;
  leaveAcronym: string;
  isPaidLeaves: string;
};

interface AddLeaveTypeFormProps {
  onAddLeaveType: (data: any) => void;
}

export default function AddLeaveTypeForm({ onAddLeaveType }: AddLeaveTypeFormProps) {
  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      leaveName: "",
      leaveAcronym: "",
      isPaidLeaves: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    onAddLeaveType({
      leaveTypeName: data.leaveName,
      acronym: data.leaveAcronym,
      isPaidLeave: data.isPaidLeaves,
    });
    reset(); // clear form after submit
  };

  const leaveOptions = [
    { label: "Paid", value: "paid" },
    { label: "Unpaid", value: "unpaid" },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-3 gap-6 items-end"
      >
        <Controller
          name="leaveName"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              label="Leave Name"
              size="sm"
              className="text-gray-500"
            />
          )}
        />

        <Controller
          name="leaveAcronym"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              label="Leave Acronym"
              size="sm"
              className="text-gray-500"
            />
          )}
        />

        <Controller
          name="isPaidLeaves"
          control={control}
          render={({ field }) => (
            <Dropdown
              {...field}
              label="Is Paid Leave"
              placeholder="--select--"
              options={leaveOptions}
              size="sm"
              required
              className="text-gray-500"
              onChange={(val) => field.onChange(val)}
            />
          )}
        />

        <div className="col-span-3 flex gap-3 justify-end mt-4">
          <Button variant="outline" type="button" onClick={() => reset()}>
            Reset
          </Button>
          <Button type="submit">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
