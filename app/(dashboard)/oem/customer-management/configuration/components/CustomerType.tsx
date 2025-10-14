"use client";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import Button from "@/components/common/ui/Button";
import Input from "@/components/common/ui/Input";
import Table from "@/components/common/table/Table";
import getCustomerTypeCol from "./customerTypeCol";

interface CustomerTypeForm {
  mainType: string;
  subType: string;
}

export default function CustomerType() {
  const { control, handleSubmit, reset, getValues } = useForm<CustomerTypeForm>({
    defaultValues: { mainType: "", subType: "" },
  });

  const [typeData, setTypeData] = React.useState([
    {
      id: 1,
      srNo: "1",
      customerType: "Confirmed",
      customerSubType: "Confirmed",
      action: "",
    },
    {
      id: 2,
      srNo: "2",
      customerType: "Potential",
      customerSubType: "Lead",
      action: "",
    },
  ]);

  const [loadingType, setLoadingType] = React.useState(false);
  const customerTypeColumns = getCustomerTypeCol();

  // Add New Customer Type
  const onSubmit = (data: CustomerTypeForm) => {
    if (!data.mainType.trim() || !data.subType.trim()) {
      alert("Please fill both type fields");
      return;
    }

    const newEntry = {
      id: typeData.length + 1,
      srNo: String(typeData.length + 1),
      customerType: data.mainType,
      customerSubType: data.subType,
      action: "",
    };

    setTypeData((prev) => [...prev, newEntry]);
    reset();
  };

  // Refresh Simulation
  const handleRefreshCustomerType = () => {
    setLoadingType(true);
    setTimeout(() => {
      setLoadingType(false);
      setTypeData((prev) => [...prev]);
    }, 1000);
  };

  return (
    <div className="space-y-4 ">
      {/* Form Section */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 bg-white p-6 rounded-lg shadow-sm"
      >
        <div className="grid grid-cols-3 gap-4">
          <Controller
            name="mainType"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label="Main Type:"
                placeholder="Customer type"
                size="sm"
              />
            )}
          />
          <Controller
            name="subType"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label="Sub Type:"
                placeholder="Customer sub type"
                size="sm"
              />
            )}
          />
        </div>

        <div className="flex justify-end gap-3">
          <Button type="submit" className="bg-[#445E94]">
            + Add Customer Type
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={() => reset()}
          >
            Reset
          </Button>
        </div>
      </form>

      {/* Table Section */}
      <div>
        <Table
          rows={typeData}
          columns={customerTypeColumns}
          onRefresh={handleRefreshCustomerType}
          loading={loadingType}
          filterKey="customerType"
          rowsPerPage={3}
        />
      </div>
    </div>
  );
}
