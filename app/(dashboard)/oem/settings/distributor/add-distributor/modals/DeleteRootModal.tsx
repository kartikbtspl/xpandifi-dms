// components/modals/AssignRouteModal.tsx
"use client";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import Modal from "@/components/common/ui/Modal";
import Dropdown, { OptionType } from "@/components/common/ui/Dropdown";
import  Button  from "@/components/common/ui/Button";

type FormValues = {
  distributor: string;
  route: string;
};

const distributorOptions: OptionType[] = [
  { value: "dist1", label: "Distributor 1" },
  { value: "dist2", label: "Distributor 2" },
];
const routeOptions: OptionType[] = [
  { value: "routeA", label: "Route A" },
  { value: "routeB", label: "Route B" },
];

interface DeleteRootModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DeleteRootModal({
  isOpen,
  onClose,
}: DeleteRootModalProps) {
  const { control, handleSubmit, formState, reset } = useForm<FormValues>({
    defaultValues: { distributor: "", route: "" },
  });

  const onSubmit = async (data: FormValues) => {
    // Submit assignment...
    await new Promise((r) => setTimeout(r, 1000));
    reset();
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Do You Want To Delete This Route"
      size="lg"
      centered={true}
      footer={
        <div className="flex justify-end gap-4">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button
            onClick={handleSubmit(onSubmit)}
            loading={formState.isSubmitting}
          >
            Save
          </Button>
        </div>
      }
    >
      <div></div>
    </Modal>
  );
}
