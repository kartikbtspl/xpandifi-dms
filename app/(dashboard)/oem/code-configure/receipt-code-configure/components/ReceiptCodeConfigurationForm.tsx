"use client";

import { useForm, Controller } from "react-hook-form";
import Input from "@/components/common/ui/Input";
import Button from "@/components/common/ui/Button";

type FormValues = {
  prefix: string;
  start: string;
  postfix: string;
  end: string;
};

export default function ReceiptCodeConfigurationForm() {
  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      prefix: "",
      start: "",
      postfix: "",
      end: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <div className="bg-white rounded-lg">
      <form onSubmit={handleSubmit(onSubmit)} >
        <div className="grid grid-cols-3 gap-3 w-full items-end">
        {/* Row 1 */}
        <Controller
          name="prefix"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              label="Prefix:"
              placeholder="Prefix"
              size="sm"
              className="text-gray-500"
            />
          )}
        />
        <Controller
          name="start"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              label="Start:"
              placeholder="--Start From--"
              size="sm"
              className="text-gray-500"
            />
          )}
        />
        {/* Row 2 */}
        <Controller
          name="postfix"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              label="Postfix:"
              placeholder="Postfix"
              size="sm"
              className="text-gray-500"
            />
          )}
        />
        <Controller
          name="end"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              label="End:"
              placeholder="--End Till--"
              size="sm"
              className="text-gray-500"
            />
          )}
        />
        </div>
        {/* Action Buttons */}
        <div className="col-span-2 flex justify-end gap-4 mt-4">
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
