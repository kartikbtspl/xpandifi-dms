"use client";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import Input from "@/components/common/ui/Input";
import Button from "@/components/common/ui/Button";
import Dropdown from "@/components/common/ui/Dropdown";
// import Checkbox from "@/components/common/ui/";

interface ProductFormInputs {
  itemCode: string;
  pack: string;
  packUnit: string;
  mrp: string;
  rate: string;
  tax: string;
  msp: string;
  country: string;
  city: string;
  piecePack: string;
  pieceUnit: string;
  pieceQty: string;
  pieceWeightUnit: string;
  pieceWeight: string;
  pieceMrp: string;
  state: string;
  role: string;
  isValuePack: boolean;
}

const unitOptions = [
  { value: "gm-kg", label: "Gm-kg" },
  { value: "ltr", label: "Litre" },
];

const taxOptions = [
  { value: "gst0", label: "GST0-0" },
  { value: "gst5", label: "GST5-5" },
];

const countryOptions = [
  { value: "india", label: "India" },
  { value: "us", label: "United States" },
];
const roleOptions = [
  { value: "all", label: "All" },
  { value: "sales", label: "Sales Manager" },
  { value: "report", label: "Reporting Manager" },
  { value: "system", label: "System Admin" },
  { value: "trial", label: "Trial Role" },
  { value: "test", label: "Test c" },
  { value: "digital", label: "Digital Marketing" },
  { value: "finance", label: "Finance" },
  { value: "hr", label: "HR Talent Pool" },
  { value: "salesman", label: "Sales Man" },
  { value: "distributor", label: "Distributor" },
  { value: "house", label: "House Keeping" },
  { value: "super", label: "Supervisor house" },
  { value: "abc", label: "abc" },
  { value: "team", label: "Team Lead Manager" },
  { value: "service", label: "Service Manager" },
  { value: "lead", label: "Team Lead Manager" },
]

const ProductForm: React.FC = () => {
  const { handleSubmit, control, reset } = useForm<ProductFormInputs>({
    defaultValues: {
      itemCode: "",
      pack: "",
      packUnit: "",
      mrp: "",
      rate: "",
      tax: "",
      msp: "",
      country: "",
      city: "",
      piecePack: "",
      pieceUnit: "",
      pieceQty: "",
      pieceWeightUnit: "",
      pieceWeight: "",
      pieceMrp: "",
      state: "",
      role: "",
      isValuePack: false,
    },
  });

  const onSubmit = (data: ProductFormInputs) => {
    console.log("✅ Submitted:", data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-xl shadow-sm space-y-4">
      <div className="grid grid-cols-8 gap-4">
        <div>
          <Controller
            name="itemCode"
            control={control}
            render={({ field }) => (
              <Input {...field} label="Item Code*" placeholder="Item Code" size="sm" />
            )}
          />
        </div>

        <div>
          <Controller
            name="pack"
            control={control}
            render={({ field }) => (
              <Input {...field} label="Pack*" placeholder="Pack" size="sm" />
            )}
          />
        </div>

        <div>
          <Controller
            name="packUnit"
            control={control}
            render={({ field }) => (
              <Dropdown {...field} options={unitOptions} label="Pack Unit*" placeholder="Gm-kg" size="sm" />
            )}
          />
        </div>

        <div>
          <Controller
            name="mrp"
            control={control}
            render={({ field }) => (
              <Input {...field} label="MRP" placeholder="Price" size="sm" />
            )}
          />
        </div>

        <div>
          <Controller
            name="rate"
            control={control}
            render={({ field }) => (
              <Input {...field} label="Rate" placeholder="Rate" size="sm" />
            )}
          />
        </div>

        <div>
          <Controller
            name="tax"
            control={control}
            render={({ field }) => (
              <Dropdown {...field} options={taxOptions} label="Tax" placeholder="GST0-0" size="sm" />
            )}
          />
        </div>

        <div>
          <Controller
            name="msp"
            control={control}
            render={({ field }) => (
              <Input {...field} label="MSP" placeholder="MSP" size="sm" />
            )}
          />
        </div>

        <div>
          <Controller
            name="country"
            control={control}
            render={({ field }) => (
              <Dropdown {...field} options={countryOptions} label="Country" placeholder="Select" size="sm" />
            )}
          />
        </div>

        <div>
          <Controller
            name="city"
            control={control}
            render={({ field }) => (
              <Input {...field} label="City" placeholder="Item Code" size="sm" />
            )}
          />
        </div>

        <div>
          <Controller
            name="piecePack"
            control={control}
            render={({ field }) => (
              <Input {...field} label="Piece Pack" placeholder="Pack" size="sm" />
            )}
          />
        </div>

        <div>
          <Controller
            name="pieceUnit"
            control={control}
            render={({ field }) => (
              <Dropdown {...field} options={unitOptions} label="Piece Unit*" placeholder="Gm-kg" size="sm" />
            )}
          />
        </div>

        <div>
          <Controller
            name="pieceQty"
            control={control}
            render={({ field }) => (
              <Input {...field} label="Piece Qty" placeholder="Price" size="sm" />
            )}
          />
        </div>

        <div>
          <Controller
            name="pieceWeightUnit"
            control={control}
            render={({ field }) => (
              <Input {...field} label="Piece Weight Unit" placeholder="Rate" size="sm" />
            )}
          />
        </div>

        <div>
          <Controller
            name="pieceWeight"
            control={control}
            render={({ field }) => (
              <Dropdown {...field} options={taxOptions} label="Piece Weight*" placeholder="GST0-0" size="sm" />
            )}
          />
        </div>

        <div>
          <Controller
            name="pieceMrp"
            control={control}
            render={({ field }) => (
              <Input {...field} label="Piece MRP*" placeholder="MSP" size="sm" />
            )}
          />
        </div>

        <div>
          <Controller
            name="state"
            control={control}
            render={({ field }) => (
              <Input {...field} label="State" placeholder="MSP" size="sm" />
            )}
          />
        </div>

        <div className="w-2/1">
          <Controller
            name="role"
            control={control}
            render={({ field }) => (
              <Dropdown options={roleOptions} {...field} label="Role" placeholder="All sales managing" size="sm" className="overflow-y-hidden" />
            )}
          />
        </div>
      </div>


      {/* Value Pack Checkbox */}
      <div className="flex w-full justify-end space-x-2">
        <Controller
          name="isValuePack"
          control={control}
          render={({ field }) => (
            <label className="inline-flex items-center space-x-2 text-sm cursor-pointer">
              <input
                type="checkbox"
                checked={field.value}
                onChange={e => field.onChange(e.target.checked)}
                className="form-checkbox h-4 w-4 text-blue-600 border-gray-300 rounded"
              />
              <span>Is Value Pack</span>
            </label>
          )}
        />
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-4 mt-4">
        <Button type="button" variant="outline" onClick={() => reset()}>Reset</Button>
        <Button type="submit" onClick={() => reset()}>Save</Button>
      </div>
    </form>
  );
};

export default ProductForm;
