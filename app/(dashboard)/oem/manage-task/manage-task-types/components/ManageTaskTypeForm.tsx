"use client";
import { useForm, Controller } from "react-hook-form";
import Input from "@/components/common/ui/Input";
import Button from "@/components/common/ui/Button";

type FormValues = {
  addNewTaskType: string;
};

export default function ManageTaskTypeForm({ onAddTaskType }: { onAddTaskType: (newTask: { taskTypeName: string }) => void }) {
  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      addNewTaskType: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    if (data.addNewTaskType.trim()) {
      onAddTaskType({ taskTypeName: data.addNewTaskType.trim() });
      reset();
    }
  };

  return (
    <div className="bg-white rounded-lg p-6">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-3 gap-x-6 gap-y-4 items-end">
          <Controller
            name="addNewTaskType"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label="Add New Task Type:"
                placeholder="add task"
                size="sm"
                onChange={val => field.onChange(val)}
              />
            )}
          />
        </div>
        <div className="flex justify-end gap-4 mt-4">
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
