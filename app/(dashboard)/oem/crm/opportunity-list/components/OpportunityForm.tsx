"use client";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import Input from "@/components/common/ui/Input";
import Button from "@/components/common/ui/Button";
import DetailsTable from "./DetailsTable";
import Dropdown from "@/components/common/ui/Dropdown";
import { useRouter } from "next/navigation";

interface FormInputs {
  name: string;
  closeDate: string;
  createdBy: string;
  stageName: string;
  assignedTo: string;
  status: string;
}

const OpportunityForm: React.FC = () => {
  const { handleSubmit, control, reset } = useForm<FormInputs>({
    defaultValues: {
      name: "",
      closeDate: "",
      createdBy: "",
      stageName: "",
      assignedTo: "",
      status: "",
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
      closeDate: "",
      createdBy: "",
      stageName: "",
      assignedTo: "",
      status: "",
    });
  };

  return (
    <>
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <div className="mb-4 flex justify-end">
          <Button onClick={() => router.push('/oem/crm/opportunity-list/add-opportunity')}><span className="text-xl">+</span>Add New Lead</Button>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* Email */}
          <div className="grid grid-cols-3 gap-6 w-full">
            <div>
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    label="Opportunity Name:"
                    placeholder="Search Name"
                    size="sm"
                  />
                )}
              />
            </div>

            {/* Prefix */}
            <div>
              <Controller
                name="closeDate"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="date"
                    label="Expected Close Date:"
                    placeholder="Select Date"
                    size="sm"
                  />
                )}
              />
            </div>

            {/* Postfix */}
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

            {/* Start */}
            <div>
              <Controller
                name="stageName"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    label="Stage Name:"
                    placeholder="Enter stage name"
                    size="sm"
                  />
                )}
              />
            </div>

            <div>
              <Controller
                name="assignedTo"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    label="Assigned To:"
                    placeholder="Enter username"
                    size="sm"
                  />
                )}
              />
            </div>

            {/* End */}
            <div>
              <Controller
                name="status"
                control={control}
                render={({ field }) => (
                  <Dropdown
                    {...field}
                    options={statusOptions}
                    label="Opportunity Status:"
                    placeholder="--Select Status--"
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
      <DetailsTable />
    </>
  );
};

export default OpportunityForm;
