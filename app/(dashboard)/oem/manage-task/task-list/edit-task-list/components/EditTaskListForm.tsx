"use client";
import { useForm, Controller } from "react-hook-form";
import Input from "@/components/common/ui/Input";
import Button from "@/components/common/ui/Button";
import { FaSearch } from "react-icons/fa";

type FormValues = {
  taskId: string;
  taskType: string;
  taskStatus: string;
  taskDetails: string;
  taskDate: string;
};

export default function EditTaskListForm() {
  const { control } = useForm<FormValues>({
    defaultValues: {
      taskId: "",
      taskType: "",
      taskStatus: "",
      taskDetails: "",
      taskDate: ""
    },
  });

  return (
    <div className="bg-white rounded-lg p-6">
      <form>
        <div className="grid grid-cols-3 gap-x-6 gap-y-4 items-end">
          <Controller name="taskId" control={control} render={({ field }) => (
            <Input {...field} label="Task ID:" placeholder="" size="sm" startIcon={<FaSearch />} />
          )}/>
          <Controller name="taskType" control={control} render={({ field }) => (
            <Input {...field} label="Task Type:" placeholder="" size="sm" />
          )}/>
          <Controller name="taskStatus" control={control} render={({ field }) => (
            <Input {...field} label="Task Status:" placeholder="" size="sm" />
          )}/>
          <Controller name="taskDetails" control={control} render={({ field }) => (
            <Input {...field} label="Task Details:" placeholder="" size="sm" />
          )}/>
          <Controller name="taskDate" control={control} render={({ field }) => (
            <Input {...field} label="Task Date:" placeholder="" size="sm" />
          )}/>
        </div>
        <div className="flex gap-3 justify-end">
          <Button variant="outline">Cancel</Button>
          <Button>Save</Button>
        </div>
      </form>
    </div>
  );
}
