"use client";

import { useForm, Controller } from "react-hook-form";
import Input from "@/components/common/ui/Input";
import Dropdown from "@/components/common/ui/Dropdown";
import Button from "@/components/common/ui/Button";
import { FaRegCalendarAlt } from "react-icons/fa";
import { useState } from "react";

type FormValues = {
  grnNumber: string;
  remarks: string;
  companyLocation: string;
  image: File | null;
  purchaseOrderRef: string;
  invoiceDate: string;
  invoiceNumber: string;
  grnDate: string;
  productCode: string;
  quantity: string;
  productName: string;
  pack: string;
  expiryDate: string;
};

export default function PrimaryGNRListForm() {
  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      grnNumber: "",
      remarks: "",
      companyLocation: "",
      image: null,
      purchaseOrderRef: "",
      invoiceDate: "",
      invoiceNumber: "",
      grnDate: "",
      productCode: "",
      quantity: "",
      productName: "",
      pack: "",
      expiryDate: "",
    },
  });

  const [showDatePicker, setShowDatePicker] = useState(false);

  // Mock options
  const locationOptions = [
    { label: "--Select Location--", value: "" },
    { label: "Mumbai", value: "mumbai" },
    { label: "Pune", value: "pune" },
  ];

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <div className="bg-white rounded-lg">
      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-3 gap-3 w-full">
        
        {/* Row 1 */}
        <Controller
          name="grnNumber"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Input
              {...field}
              label="GRN Number"
              required
              placeholder="Product Code/Name"
              size="sm"
              className="text-gray-500"
            />
          )}
        />
        <Controller
          name="remarks"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              label="Remarks"
              placeholder="Remark"
              size="sm"
              onChange={val => field.onChange(val)}
            />
          )}
        />
        <Controller
          name="companyLocation"
          control={control}
          render={({ field }) => (
            <Dropdown
              {...field}
              label="Company Location:"
              placeholder="--Select Location--"
              size="sm"
              options={locationOptions}
              onChange={val => field.onChange(val)}
            />
          )}
        />

        {/* fourth field in row 1 remains empty for layout alignment */}
        <div />

        {/* Row 2 */}
        <Controller
          name="image"
          control={control}
          render={({ field }) => (
            <div className="flex flex-col">
              <label className="mb-1 text-sm font-medium text-gray-700">Image</label>
              <input
                type="file"
                onChange={e => field.onChange(e.target.files ? e.target.files[0] : null)}
                className="block w-full border border-gray-300 rounded-full p-2"
              />
            </div>
          )}
        />
        <Controller
          name="purchaseOrderRef"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              label="Purchased Order Reference No:"
              placeholder="Reference Number"
              size="sm"
              className="text-gray-500"
            />
          )}
        />
        <Controller
          name="invoiceDate"
          control={control}
          render={({ field }) => (
            <Dropdown
              {...field}
              label="Invoice Date:"
              placeholder="--Select Location--"
              size="sm"
              options={locationOptions}
              onChange={val => field.onChange(val)}
            />
          )}
        />
        <div />

        {/* Row 3 */}
        <Controller
          name="invoiceNumber"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              label="Invoice Number:"
              placeholder="Product Code/Name"
              size="sm"
              className="text-gray-500"
            />
          )}
        />
        <Controller
          name="grnDate"
          control={control}
          render={({ field }) => (
            <Dropdown
              {...field}
              label="GRN Date"
              placeholder="--Select Location--"
              size="sm"
              options={locationOptions}
              onChange={val => field.onChange(val)}
            />
          )}
        />
        <Controller
          name="productCode"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Input
              {...field}
              label="Product Code:"
              required
              placeholder="Enter Product Code"
              size="sm"
              className="text-gray-500"
            />
          )}
        />
        <div />

        {/* Row 4 */}
        <Controller
          name="quantity"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Input
              {...field}
              label="Quantity"
              placeholder="Enter"
              size="sm"
              className="text-gray-500"
            />
          )}
        />
        <Controller
          name="productName"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Input
              {...field}
              label="Product Name"
              required
              placeholder="Enter Product Name"
              size="sm"
              className="text-gray-500"
            />
          )}
        />
        <Controller
          name="pack"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Input
              {...field}
              label="Pack"
              required
              placeholder=""
              size="sm"
              className="text-gray-500"
            />
          )}
        />
        <div />

        {/* Row 5 - Expiry Date alone */}
        <div>
          <label className="mb-1 text-sm font-medium text-gray-700">Expiry Date:</label>
          <div className="relative">
            <FaRegCalendarAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
            <Controller
              name="expiryDate"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder=""
                  size="sm"
                  className="pl-10 text-gray-500"
                  type="date"
                />
              )}
            />
          </div>
        </div>
        {/* Filler divs to fill rest of columns on this row */}
        <div />
        <div />
        <div />

        {/* Action Buttons */}
        <div className="col-span-4 flex justify-end gap-4 mt-4">
          <Button variant="outline" type="button" onClick={() => reset()}>
            Reset
          </Button>
          <Button type="submit" className="bg-[#445E94] text-white px-6">
            Add
          </Button>
        </div>
      </form>
    </div>
  );
}
