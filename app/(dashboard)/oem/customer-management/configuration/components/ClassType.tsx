"use client";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import Button from '@/components/common/ui/Button';
import Input from '@/components/common/ui/Input';
import Table from '@/components/common/table/Table';
import getClassTypeCol from "./typeCol";

interface ClassTypeForm {
  type: string;
  frequency: string;
  sequence: string;
}

export default function ClassType() {
  const { handleSubmit, control, reset } = useForm<ClassTypeForm>({
    defaultValues: {
      type: "",
      frequency: "",
      sequence: "",
    },
  });

  const [classTypeData, setClassTypeData] = React.useState([
    { id: 1, srNo: "1", type: "Confirmed", sequence: "1", frequency: "1", action: "" },
    { id: 2, srNo: "2", type: "Potential", sequence: "2", frequency: "2", action: "" }
  ]);

  const classTypeColumns = getClassTypeCol();
  const [loadingClassType, setLoadingClassType] = React.useState(false);

  const onSubmit = (data: ClassTypeForm) => {
    if (!data.type.trim() || !data.sequence.trim() || !data.frequency.trim()) {
      alert("Please fill all fields.");
      return;
    }
    const newEntry = {
      id: classTypeData.length + 1,
      srNo: String(classTypeData.length + 1),
      type: data.type,
      frequency: data.frequency,
      sequence: data.sequence,
      action: ""
    };
    setClassTypeData(prev => [...prev, newEntry]);
    reset();
  };

  const handleRefreshClassType = () => {
    setLoadingClassType(true);
    setTimeout(() => {
      setLoadingClassType(false);
      setClassTypeData(prev => [...prev]);
    }, 1000);
  };

  return (
    <div className='space-y-6'>
      <form
        onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 p-6 bg-white rounded-lg shadow-sm"
      >
        <div className='grid grid-cols-3 gap-4'>
          <Controller
            name="type"
            control={control}
            render={({ field }) => (
              <Input {...field} label="Type" placeholder="Class Type Name" size='sm' />
            )}
          />
          <Controller
            name="frequency"
            control={control}
            render={({ field }) => (
              <Input {...field} label="Frequency" placeholder="1" size='sm' />
            )}
          />
          <Controller
            name="sequence"
            control={control}
            render={({ field }) => (
              <Input {...field} label="Sequence" placeholder="1" size='sm' />
            )}
          />
        </div>
        <div className="flex justify-end gap-3">
          <Button type="submit" className="bg-[#445E94]">+ Add Class Type</Button>
          <Button type="button" variant="outline" onClick={() => reset()}>Reset</Button>
        </div>
      </form>

      <Table
        rows={classTypeData}
        columns={classTypeColumns}
        onRefresh={handleRefreshClassType}
        loading={loadingClassType}
        filterKey='type'
        rowsPerPage={2}
      />
    </div>
  );
}
