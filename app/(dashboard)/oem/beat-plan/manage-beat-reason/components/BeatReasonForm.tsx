"use client";

import { useForm, Controller } from "react-hook-form";
import Input from "@/components/common/ui/Input";
import Button from "@/components/common/ui/Button";
import { useBeatPlanReasonStore } from "@/store/beatPlanReasonStore"; // adjust path

type FormValues = {
  reason: string;
  reasonDetailsRequired: boolean;
};

export default function ReasonForm() {
  const { control, handleSubmit, reset, getValues } = useForm<FormValues>({
    defaultValues: {
      reason: "",
      reasonDetailsRequired: false,
    },
  });

  const addReason = useBeatPlanReasonStore((state) => state.addReason);

  const onSubmit = (data: FormValues) => {
    addReason({
      beatPlanReason: data.reason,
      details: data.reasonDetailsRequired ? "Yes" : "No",
    });
    reset();
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-6">
        <h1 className="text-xl font-semibold text-[#445E94]">
          Beat Plan Reason
        </h1>

        <div className="w-1/2 flex flex-col gap-3">
          {/* Reason Input */}
          <Controller
            name="reason"
            control={control}
            rules={{ required: "Reason is required" }}
            render={({ field }) => (
              <Input
                {...field}
                label="Reason"
                placeholder="Beat Plan Reason"
                size="sm"
                required
              />
            )}
          />

          {/* Checkbox */}
          <Controller
            name="reasonDetailsRequired"
            control={control}
            render={({ field }) => (
              <label className="flex items-center gap-2 text-sm text-gray-700">
                <input
                  type="checkbox"
                  checked={field.value}
                  onChange={(e) => field.onChange(e.target.checked)}
                  className="h-4 w-4 cursor-pointer"
                />
                Reason details Required
              </label>
            )}
          />
        </div>

        <div className="flex justify-end">
          <Button type="submit" className="h-[38px]">
            + Add Reason
          </Button>
        </div>
      </form>
    </div>
  );
}
