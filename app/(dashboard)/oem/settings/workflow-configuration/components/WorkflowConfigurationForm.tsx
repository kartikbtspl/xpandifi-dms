"use client";
import { useForm, Controller } from "react-hook-form";
import Input from "@/components/common/ui/Input";
import Button from "@/components/common/ui/Button";
import Dropdown from "@/components/common/ui/Dropdown";

type Option = {
  label: string;
  value: string;
};

type FormValues = {
  workflowName: string;
  taskName: string;
  approvalType: string;
  objectName: string;
  editableLevels: string;
};

const workflowOptions: Option[] = [
  { label: "--Select Workflow Name--", value: "" },
  // ...add other workflow options here
];

const approvalOptions: Option[] = [
  { label: "--Select Approval Type--", value: "" },
  // ...add other approval types here
];

const objectOptions: Option[] = [
  { label: "--All--", value: "" },
  // ...add other object options here
];

export default function WorkflowConfigurationForm({ onSave }: { onSave: (data: FormValues) => void }) {
  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      workflowName: "",
      taskName: "",
      approvalType: "",
      objectName: "",
      editableLevels: "",
    },
  });

  return (
    <div className="bg-white rounded-lg p-6 w-full">
      <form onSubmit={handleSubmit(onSave)}>
        <div className="grid grid-cols-3 gap-x-6 gap-y-4">
          <Controller
            name="workflowName"
            control={control}
            render={({ field }) => (
              <Dropdown
                {...field}
                label="WorkFlow Name:"
                options={workflowOptions}
                size="sm"
                placeholder="--Select Workflow Name--"
                onChange={val => field.onChange(val)}
              />
            )}
          />
          <Controller
            name="taskName"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label="Task Name:"
                size="sm"
                placeholder="-"
              />
            )}
          />
          <Controller
            name="approvalType"
            control={control}
            render={({ field }) => (
              <Dropdown
                {...field}
                label="Approval Type:"
                options={approvalOptions}
                size="sm"
                placeholder="--Select Approval Type--"
                onChange={val => field.onChange(val)}
              />
            )}
          />
          <Controller
            name="objectName"
            control={control}
            render={({ field }) => (
              <Dropdown
                {...field}
                label="Object Name:"
                options={objectOptions}
                size="sm"
                placeholder="--All--"
                onChange={val => field.onChange(val)}
              />
            )}
          />
          <Controller
            name="editableLevels"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label="Editable Levels:"
                size="sm"
                placeholder=""
              />
            )}
          />
        </div>
        <div className="flex justify-end gap-4 mt-6">
          <Button variant="outline" type="button" onClick={() => reset()}>
            Reset
          </Button>
          <Button type="submit" className="bg-[#445E94] text-white px-8">
            Save
          </Button>
        </div>
      </form>
    </div>
  );
}
