// components/stock/StockFilters.tsx
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { FiSearch } from "react-icons/fi";
import Input from "../../../../components/common/ui/Input";
import Dropdown, {
  OptionType,
} from "../../../../components/common/ui/Dropdown";
import Button from "../../../../components/common/ui/Button";

const locationOptions: OptionType[] = [
  { value: "", label: "Search location" },
  { value: "warehouse1", label: "Warehouse 1" },
  { value: "warehouse2", label: "Warehouse 2" },
  { value: "store1", label: "Store 1" },
];

const criteriaOptions: OptionType[] = [
  { value: "", label: "Select criteria" },
  { value: "low-stock", label: "Low Stock" },
  { value: "out-of-stock", label: "Out of Stock" },
  { value: "overstocked", label: "Overstocked" },
];

const distributorOptions: OptionType[] = [
  { value: "", label: "Search distributor" },
  { value: "teamspring", label: "Teamspring" },
  { value: "distributor2", label: "Distributor 2" },
];

const categoryOptions: OptionType[] = [
  { value: "", label: "Select product category" },
  { value: "beverage", label: "Beverage" },
  { value: "snacks", label: "Snacks" },
  { value: "dairy", label: "Dairy" },
];

interface FormData {
  productName: string;
  location: string;
  criteria: string;
  distributor: string;
  productCategory: string;
}

export const StockFilters: React.FC = () => {
  const { control, handleSubmit, reset, watch } = useForm<FormData>({
    defaultValues: {
      productName: "",
      location: "",
      criteria: "",
      distributor: "",
      productCategory: "",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log("Filters:", data);
  };

  const handleReset = () => {
    reset();
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* First Row - 3 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 mb-6">
          <div>
            <label className="block mb-3 text-sm font-medium text-gray-700">
              Product Name
            </label>
            <Controller
              name="productName"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="search product by name"
                  startIcon={<FiSearch className="w-4 h-4 text-gray-400" />}
                  className="h-12"
                />
              )}
            />
          </div>

          <div>
            <label className="block mb-3 text-sm font-medium text-gray-700">
              Locations
            </label>
            <Controller
              name="location"
              control={control}
              render={({ field }) => (
                <Dropdown
                  {...field}
                  options={locationOptions}
                  placeholder="Search location"
                  className="h-12"
                />
              )}
            />
          </div>

          <div>
            <label className="block mb-3 text-sm font-medium text-gray-700">
              Criteria
            </label>
            <Controller
              name="criteria"
              control={control}
              render={({ field }) => (
                <Dropdown
                  {...field}
                  options={criteriaOptions}
                  placeholder="Select criteria"
                  className="h-12"
                />
              )}
            />
          </div>
        </div>

        {/* Second Row - matching first row widths */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 items-end">
          <div>
            <label className="block mb-3 text-sm font-medium text-gray-700">
              Distributor
            </label>
            <Controller
              name="distributor"
              control={control}
              render={({ field }) => (
                <Dropdown
                  {...field}
                  options={distributorOptions}
                  placeholder="Search distributor"
                  className="h-12"
                />
              )}
            />
          </div>

          <div>
            <label className="block mb-3 text-sm font-medium text-gray-700">
              Product Category
            </label>
            <Controller
              name="productCategory"
              control={control}
              render={({ field }) => (
                <Dropdown
                  {...field}
                  options={categoryOptions}
                  placeholder="Select product category"
                  className="h-12"
                />
              )}
            />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-8">
            <Button
              type="submit"
            >
              Submit
            </Button>
            <Button
              type="button"
              variant="ghost"
              onClick={handleReset}
              className="text-red-500"
            >
              Reset
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};
