"use client";
import { useForm, Controller } from "react-hook-form";
import Input from "@/components/common/ui/Input";
import Button from "@/components/common/ui/Button";

type FormValues = {
  retryAttempt: string;
  isLocationRequired: boolean;
};

export default function RetryAttemptForm() {
  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      retryAttempt: "",
      isLocationRequired: false,
    },
  });

  return (
    <div className="bg-white rounded-lg p-6 w-full">
      <form >
        <div className="mb-8 w-1/3">
          <Controller
            name="retryAttempt"
            control={control}
            render={({ field }) => (
              <Input {...field} label="Retry Attempt*" size="sm" required />
            )}
          />
        </div>
        <div className="flex items-center justify-end gap-4 mt-0">
          <Controller
            name="isLocationRequired"
            control={control}
            render={({ field }) => (
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={field.value}
                  onChange={e => field.onChange(e.target.checked)}
                  onBlur={field.onBlur}
                  name={field.name}
                  ref={field.ref}
                />
                Is Location required
              </label>
            )}
          />
          <Button variant="outline" type="button" onClick={() => reset()}>
            Cancel
          </Button>
          <Button type="submit" className="bg-[#445E94] text-white px-8">
            Save
          </Button>
        </div>
      </form>
    </div>
  );
}
