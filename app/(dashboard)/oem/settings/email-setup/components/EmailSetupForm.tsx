"use client";
import { useForm, Controller } from "react-hook-form";
import Input from "@/components/common/ui/Input";
import Button from "@/components/common/ui/Button";

type FormValues = {
  fromEmail: string;
  fromPassword: string;
  smtp: string;
  pricingApprovalEmail: string;
  salesOrderApprovalEmail: string;
  smtpServer: string;
};

export default function EmailSetupForm({
  onSave,
  onReset,
  onUpdate,
}: {
  onSave: (data: FormValues) => void;
  onReset?: () => void;
  onUpdate?: () => void;
}) {
  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      fromEmail: "",
      fromPassword: "",
      smtp: "",
      pricingApprovalEmail: "",
      salesOrderApprovalEmail: "",
      smtpServer: "",
    },
  });

  const handleReset = () => {
    reset();
    if (onReset) onReset();
  };

  return (
    <div className="bg-white rounded-lg p-6 w-full">
      <form onSubmit={handleSubmit(onSave)}>
        <div className="grid grid-cols-3 gap-x-6 gap-y-6">
          <Controller
            name="fromEmail"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label="From Email"
                required
                size="sm"
                placeholder="Enter email"
              />
            )}
          />
          <Controller
            name="fromPassword"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label="From Password"
                required
                size="sm"
                placeholder="Enter password"
                type="password"
              />
            )}
          />
          <Controller
            name="smtp"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label="SMTP"
                required
                size="sm"
                placeholder="Enter SMTP"
              />
            )}
          />
          <Controller
            name="pricingApprovalEmail"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label="Pricing Approval Email"
                required
                size="sm"
                placeholder="Enter email"
              />
            )}
          />
          <Controller
            name="salesOrderApprovalEmail"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label="Sales Order Approval Email"
                required
                size="sm"
                placeholder="Enter email"
              />
            )}
          />
          <Controller
            name="smtpServer"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label="SMTP Server"
                required
                size="sm"
                placeholder="Enter SMTP Server"
              />
            )}
          />
        </div>
        <div className="flex justify-end gap-4 mt-6">
          <Button variant="outline" type="button" onClick={handleReset}>
            Reset
          </Button>
          <Button variant="outline" type="button" onClick={onUpdate}>
            Update
          </Button>
          <Button type="submit" className="bg-[#445E94] text-white px-8">
            Save
          </Button>
        </div>
      </form>
    </div>
  );
}
