"use client";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import Input from "@/components/common/ui/Input";
import Button from "@/components/common/ui/Button";

interface FormInputs {
  email: string;
  prefix: string;
  postfix: string;
  start: string;
  end: string;
}

const EmailIdRange: React.FC = () => {
  const { handleSubmit, control, reset } = useForm<FormInputs>({
    defaultValues: {
      email: "",
      prefix: "",
      postfix: "",
      start: "",
      end: "",
    },
  });

  const onSubmit = (data: FormInputs) => {
    console.log("✅ Submitted Data:", data);
  };

  const handleReset = () => {
    reset({
      email: "",
      prefix: "",
      postfix: "",
      start: "",
      end: "",
    });
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-3 gap-6 w-full"
      >
        {/* Email */}
        <div>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label="Email:"
                placeholder="Enter Email"
                size="sm"
              />
            )}
          />
        </div>

        {/* Prefix */}
        <div>
          <Controller
            name="prefix"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label="Prefix:"
                placeholder="Prefix"
                size="sm"
              />
            )}
          />
        </div>

        {/* Postfix */}
        <div>
          <Controller
            name="postfix"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label="Postfix:"
                placeholder="Postfix"
                size="sm"
              />
            )}
          />
        </div>

        {/* Start */}
        <div>
          <Controller
            name="start"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label="Start:"
                placeholder="--Start From--"
                size="sm"
              />
            )}
          />
        </div>

        {/* End */}
        <div>
          <Controller
            name="end"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label="End:"
                placeholder="--End Till--"
                size="sm"
              />
            )}
          />
        </div>
      </form>

      {/* Buttons */}
      <div className="flex justify-end mt-6">
        <Button type="submit" size="sm">
          Submit
        </Button>
      </div>
    </div>
  );
};

export default EmailIdRange;
