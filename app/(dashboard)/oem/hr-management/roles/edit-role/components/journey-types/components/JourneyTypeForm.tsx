"use client";
import { useForm, Controller } from "react-hook-form";
import Button from "@/components/common/ui/Button";
import Input from "@/components/common/ui/Input";

type FormValues = {
  expense: string;
  journeyName: string;
  callTargets: number;
};

interface AddJourneyTypeFormProps {
  onAddJourneyType: (data: FormValues) => void;
}

export default function JourneyTypeForm({ onAddJourneyType }: AddJourneyTypeFormProps) {
  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: { expense: "", journeyName: "", callTargets: 0 },
  });

  const onSubmit = (data: FormValues) => {
    onAddJourneyType(data);
    reset();
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Controller
            name="expense"
            control={control}
            render={({ field }) => (
              <div className="flex flex-col w-full">
                <Input {...field} placeholder="" label="Expense" />
              </div>
            )}
          />
          <Controller
            name="journeyName"
            control={control}
            render={({ field }) => (
              <div className="flex flex-col w-full">
                <Input {...field} placeholder="" label="Journey Name" />
              </div>
            )}
          />
          <Controller
            name="callTargets"
            control={control}
            render={({ field }) => (
              <div className="flex flex-col w-full">
                <Input
                  label="Call Targets"
                  value={field.value?.toString() || ""}
                  onChange={e => field.onChange(Number(e.target.value))}
                />
              </div>
            )}
          />
        </div>

        <div className="flex justify-end items-center gap-4 mt-6">
          <Button type="button" variant="outline" onClick={() => reset()}>
            Reset
          </Button>
          <Button type="submit">Add</Button>
        </div>
      </form>
    </div>
  );
}
