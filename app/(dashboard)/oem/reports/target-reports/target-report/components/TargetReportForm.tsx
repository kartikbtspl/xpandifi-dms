"use client";

import { useForm, Controller } from "react-hook-form";
import Input from "@/components/common/ui/Input";
import Button from "@/components/common/ui/Button";

const today = new Date();
const currentMonth = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}`;

type FormValues = {
  monthRange: string;
};

export default function TargetReportForm() {
  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      monthRange: currentMonth
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <div className="bg-white rounded-lg p-6">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-3 gap-x-6 gap-y-4 items-end">
          {/* Row 1 */}
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
