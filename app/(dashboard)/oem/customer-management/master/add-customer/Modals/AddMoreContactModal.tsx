"use client";
import React, { useState } from "react";
import Modal from "@/components/common/ui/Modal";
import Button from "@/components/common/ui/Button";

interface AddMoreContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (data: {
    customerName: string;
    email: string;
    mobile: string;
    designation: string;
  }) => void;
}

const AddMoreContactModal: React.FC<AddMoreContactModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  const [formData, setFormData] = useState({
    customerName: "",
    email: "",
    mobile: "",
    designation: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const footer = (
    <div className="flex justify-center gap-4">
      <Button
        variant="outline"
        onClick={onClose}
        className="px-8 rounded-full"
      >
        Cancel
      </Button>
      <Button
        variant="primary"
        onClick={() => onConfirm(formData)}
        className="px-8 rounded-full"
        disabled={
          !formData.customerName ||
          !formData.email ||
          !formData.mobile ||
          !formData.designation
        }
      >
        Add
      </Button>
    </div>
  );

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Add More Contact"
      size="md"
      footer={footer}
      centered
    >
      <div className="space-y-4">
        {/* Customer Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Customer Name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="customerName"
            placeholder="Customer Name"
            value={formData.customerName}
            onChange={handleChange}
            className="block w-full rounded-full border border-gray-300 px-4 py-2 text-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            className="block w-full rounded-full border border-gray-300 px-4 py-2 text-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        {/* Mobile Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Mobile Number<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="mobile"
            placeholder="Enter Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
            className="block w-full rounded-full border border-gray-300 px-4 py-2 text-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        {/* Designation */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Designation<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="designation"
            placeholder="Enter Designation"
            value={formData.designation}
            onChange={handleChange}
            className="block w-full rounded-full border border-gray-300 px-4 py-2 text-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
      </div>
    </Modal>
  );
};

export default AddMoreContactModal;
