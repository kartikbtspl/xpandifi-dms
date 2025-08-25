// components/modals/AssignRouteModal.tsx
"use client";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import Modal from "../../../../components/common/ui/Modal";
import Dropdown, {OptionType} from "../../../../components/common/ui/Dropdown";
import Button from "../../../../components/common/ui/Button";
import { useRouter } from "next/navigation";

type FormValues = {
  DistributorName: string;
  DistributerCode: string;
};

const distributorOptions: OptionType[] = [
  { value: "dist1", label: "Distributor 1" },
  { value: "dist2", label: "Distributor 2" },
];
const routeOptions: OptionType[] = [
  { value: "routeA", label: "Route A" },
  { value: "routeB", label: "Route B" },
];

interface AssignRouteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AddDistributer({
  isOpen,
  onClose,
}: AssignRouteModalProps) {
  const { control, handleSubmit, formState, reset } = useForm<FormValues>({
    defaultValues: { DistributorName: "", DistributerCode: "" },
  });

  const onSubmit = async (data: FormValues) => {
    // Submit assignment...
    await new Promise((r) => setTimeout(r, 1000));
    reset();
    onClose();
    router.push('/dms/update-profile/add-distributor/')
  };

  const router = useRouter();

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Add Distributor"
      size="lg"
      centered={true}
      footer={
        <div className="flex justify-end gap-4">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button
            onClick={
                handleSubmit(onSubmit)}
            loading={formState.isSubmitting}
            
          >
            Save
          </Button>
        </div>
      }
    >
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="DistributorName"
          control={control}
          rules={{ required: "Distributor name is required" }}
          render={({ field, fieldState }) => (
            <Dropdown
              {...field}
              label="Distributor Name *"
              placeholder="Select Distributor"
              options={distributorOptions}
              error={fieldState.error?.message}
              clearable
            />
          )}
        />
        <Controller
          name="DistributerCode"
          control={control}
          rules={{ required: "Code is required" }}
          render={({ field, fieldState }) => (
            <Dropdown
              {...field}
              label="Distributer Code *"
              placeholder="Select Route"
              options={routeOptions}
              error={fieldState.error?.message}
              clearable
            />
          )}
        />
      </form>
    </Modal>
  );
}
