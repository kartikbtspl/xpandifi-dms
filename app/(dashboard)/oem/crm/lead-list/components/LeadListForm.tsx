"use client";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import Input from "@/components/common/ui/Input";
import Button from "@/components/common/ui/Button";
import Dropdown from "@/components/common/ui/Dropdown";
import { useRouter } from "next/navigation";

interface FormInputs {
  name: string;
  dateRange: string;
  leadType: string;
  createdBy: string;
  leadIndustry: string;
  assignedTo: string;
  productApplication: string;
  leadStatus : string;
}

const LeadListForm: React.FC = () => {
  const { handleSubmit, control, reset } = useForm<FormInputs>({
    defaultValues: {
      name: "",
      dateRange: "",
      leadType: "",
      createdBy: "",
      leadIndustry: "",
      assignedTo: "",
      productApplication:"",
      leadStatus:"",
    },
  });

  const statusOptions = [
    { value: "zone1", label: "Zone 1" },
    { value: "zone2", label: "Zone 2" },
    { value: "zone3", label: "Zone 3" },
  ];

  const router = useRouter();

  const onSubmit = (data: FormInputs) => {
    console.log("✅ Submitted Data:", data);
  };

  const handleReset = () => {
    reset({
      name: "",
      dateRange: "",
      leadType: "",
      createdBy: "",
      leadIndustry: "",
      assignedTo: "",
      productApplication:"",
      leadStatus:""
    });
  };

  return (
    <>
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <div className="mb-4 flex justify-end">
          <Button onClick={() => router.push('/oem/crm/lead-list/add-new-lead')}><span className="text-xl">+</span>Add New Lead</Button>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* Email */}
          <div className="grid grid-cols-4 gap-6 w-full">
            <div>
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    label="Lead Name:"
                    placeholder="Search here"
                    size="sm"
                  />
                )}
              />
            </div>

            {/* Prefix */}
            <div>
              <Controller
                name="dateRange"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="date"
                    label="Date Range:"
                    placeholder="Select Date"
                    size="sm"
                  />
                )}
              />
            </div>

            {/* Postfix */}
            <div>
              <Controller
                name="leadType"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    label="Created By:"
                    placeholder="Enter Lead Type"
                    size="sm"
                  />
                )}
              />
            </div>

            {/* Start */}
            <div>
              <Controller
                name="createdBy"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    label="Created By:"
                    placeholder="Enter username"
                    size="sm"
                  />
                )}
              />
            </div>

            <div>
              <Controller
                name="leadIndustry"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    label="Lead Industry:"
                    placeholder="Enter Lead Industry"
                    size="sm"
                  />
                )}
              />
            </div>

            {/* End */}
            <div>
              <Controller
                name="assignedTo"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    label="Assigned To:"
                    placeholder="Enter user name"
                    size="sm"
                  />
                )}
              />
            </div>
            <div>
              <Controller
                name="productApplication"
                control={control}
                render={({ field }) => (
                  <Dropdown
                    {...field}
                    options={statusOptions}
                    label="Product Application:"
                    placeholder="--Select product application--"
                    size="sm"
                  />
                )}
              />
            </div>
            <div>
              <Controller
                name="leadStatus"
                control={control}
                render={({ field }) => (
                  <Dropdown
                    {...field}
                    options={statusOptions}
                    label="Lead Status:"
                    placeholder="--Select status--"
                    size="sm"
                  />
                )}
              />
            </div>
          </div>
          <div className="flex justify-end mt-6 gap-4">
            <Button variant="outline">Reset</Button>
            <Button type="submit" >
              Submit
            </Button>
          </div>
        </form>

        {/* Buttons */}
      </div>
    </>
  );
};

export default LeadListForm;
