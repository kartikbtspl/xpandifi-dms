"use client";

import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Modal from "@/components/common/ui/Modal";
import Input from "@/components/common/ui/Input";
import Button from "@/components/common/ui/Button";

type FormValues = {
  taxName: string;
  taxCode: string;
  percentage: number;
};

interface AddTaxModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (newTax: FormValues) => void;
}

const AddTaxModal: React.FC<AddTaxModalProps> = ({ isOpen, onClose, onAdd }) => {
  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      taxName: "",
      taxCode: "",
      percentage: 0,
    },
  });

  const onSubmit = (data: FormValues) => {
    onAdd(data);   // send data to parent
    reset();
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Add New Tax"
      size="md"
      footer={null}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Code */}
        <Controller
          name="taxCode"
          control={control}
          rules={{ required: "Code is required" }}
          render={({ field }) => (
            <Input {...field} label="Tax Code" required placeholder="Code" />
          )}
        />

        {/* Name */}
        <Controller
          name="taxName"
          control={control}
          rules={{ required: "Name is required" }}
          render={({ field }) => (
            <Input {...field} label="Tax Name" required placeholder="Name" />
          )}
        />

        {/* Percentage */}
        <Controller
          name="percentage"
          control={control}
          rules={{ required: "Percentage is required" }}
          render={({ field }) => (
            <Input
              {...field}
              type="number"
              label="Percentage"
              required
              placeholder="Percentage"
            />
          )}
        />

        {/* Buttons */}
        <div className="flex justify-end gap-3 pt-4">
          <Button variant="outline" type="button" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit">Add</Button>
        </div>
      </form>
    </Modal>
  );
};

export default AddTaxModal;
