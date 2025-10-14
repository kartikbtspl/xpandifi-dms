"use client";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import Button from "@/components/common/ui/Button";
import Input from "@/components/common/ui/Input";
import Table from "@/components/common/table/Table";
import getStoreTypeCol from "./storeTypeCol";

interface SegmentForm {
  segmentType: string;
}

export default function BusinessSegment() {
  const { handleSubmit, control, reset } = useForm<SegmentForm>({
    defaultValues: {
      segmentType: "",
    },
  });

  const [segmentData, setSegmentData] = React.useState([
    { id: 1, srNo: "1", segmentType: "Sole proprietorship", action: "" },
    { id: 2, srNo: "2", segmentType: "Public Limited Company(PLC)", action: "" },
  ]);
  const segmentTypeCols = getStoreTypeCol();
  const [loadingSegment, setLoadingSegment] = React.useState(false);

  const onSubmit = (data: SegmentForm) => {
    if (!data.segmentType.trim()) {
      alert("Please enter a segment name.");
      return;
    }
    const newEntry = {
      id: segmentData.length + 1,
      srNo: String(segmentData.length + 1),
      segmentType: data.segmentType,
      action: "",
    };
    setSegmentData((prev) => [...prev, newEntry]);
    reset();
  };

  const handleBusinessSegment = () => {
    setLoadingSegment(true);
    setTimeout(() => {
      setLoadingSegment(false);
      setSegmentData((prev) => [...prev]);
    }, 1000);
  };

  return (
    <div className="space-y-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 p-6 bg-white rounded-lg shadow-sm"
      >
        <div className="grid grid-cols-3 gap-4">
          <Controller
            name="segmentType"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label="Segment Name"
                placeholder="Segment Name"
                size="sm"
              />
            )}
          />
        </div>
        <div className="flex justify-end gap-3">
          <Button type="submit" className="bg-[#445E94]">
            + Add Segment Name
          </Button>
          <Button type="button" variant="outline" onClick={() => reset()}>
            Reset
          </Button>
        </div>
      </form>

      <Table
        rows={segmentData}
        columns={segmentTypeCols}
        onRefresh={handleBusinessSegment}
        loading={loadingSegment}
        filterKey="segmentType"
        rowsPerPage={2}
      />
    </div>
  );
}
