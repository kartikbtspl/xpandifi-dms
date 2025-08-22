"use client"; // For app router. Remove if using pages directory.

import { useForm } from "react-hook-form";
import Button from "../../../../components/common/ui/Button";
import Input from "../../../../components/common/ui/Input";

type FilterInputs = {
  distributor: string;
  customers: string;
};

export default function SearchDistributers() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FilterInputs>();

  const onSubmit = (data: FilterInputs) => {
    console.log("Submitted filters:", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-6 rounded-lg flex items-end gap-4 shadow-sm w-full pr-60"
    >
      {/* Type Field (previously Distributor) */}
      <div className="flex flex-col w-1/2">
        <label
          htmlFor="distributor"
          className="text-sm font-medium text-gray-700 mb-1"
        >
          Type
        </label>
        <Input
          id="distributor"
          type="text"
          {...register("distributor")}
          placeholder="All"
          className="border border-gray-300 rounded-full px-4 py-2 w-64 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Search Invoice Number Field (previously Customers) */}
      <div className="flex flex-col w-3/4">
        <label
          htmlFor="customers"
          className="text-sm font-medium text-gray-700 mb-1"
        >
          Search Invoice Number
        </label>
        <Input
          id="customers"
          type="text"
          {...register("customers")}
          placeholder="Invoice No / SalesOrder / Customer"
          className="border border-gray-300 rounded-full px-4 py-2 w- text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Button + Reset */}
      <div className="flex w-80 justify-between text-center items-center h-12">
        <Button className="h-12">Search</Button>
        <p className="text-[#6F83B1] underline">Reset Filters</p>
      </div>
    </form>
  );
}
