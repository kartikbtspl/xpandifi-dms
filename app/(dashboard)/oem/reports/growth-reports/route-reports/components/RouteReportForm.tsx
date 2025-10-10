"use client";

import { useForm, Controller } from "react-hook-form";
import Dropdown from "@/components/common/ui/Dropdown";
import Button from "@/components/common/ui/Button";

type FormValues = {
  graph: string;
  distributor: string;
  route: string;
};

export default function RouteReportForm() {
  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      graph: "Daily Route Graph",
      distributor: "",
      route: "",
    },
  });

  const graphOptions = [
    { label: "Daily Route Graph", value: "Daily Route Graph" },
    { label: "Monthly Route Graph", value: "Monthly Route Graph" },
    { label: "Yearly Route Graph", value: "Yearly Route Graph" },
  ];

  const distributorOptions = [
    { label: "--Select Distributor--", value: "" },
    { label: "Distributor 1", value: "distributor1" },
    { label: "Distributor 2", value: "distributor2" },
  ];

  const routeOptions = [
    { label: "--Select Route--", value: "" },
    { label: "Route 1", value: "route1" },
    { label: "Route 2", value: "route2" },
  ];

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <div className="bg-white rounded-lg p-6">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-3 gap-x-6 gap-y-4 items-end">
          {/* Graph Dropdown */}
          <Controller
            name="graph"
            control={control}
            render={({ field }) => (
              <Dropdown
                {...field}
                label="Graph"
                placeholder="Daily Route Graph"
                size="sm"
                options={graphOptions}
                onChange={val => field.onChange(val)}
              />
            )}
          />
          {/* Distributor Dropdown */}
          <Controller
            name="distributor"
            control={control}
            render={({ field }) => (
              <Dropdown
                {...field}
                label="Distributor:"
                placeholder="--Select Distributor--"
                size="sm"
                options={distributorOptions}
                onChange={val => field.onChange(val)}
              />
            )}
          />
          {/* Route Dropdown */}
          <Controller
            name="route"
            control={control}
            render={({ field }) => (
              <Dropdown
                {...field}
                label="Route:"
                placeholder="--Select Route--"
                size="sm"
                options={routeOptions}
                onChange={val => field.onChange(val)}
              />
            )}
          />
        </div>
        {/* Buttons */}
        <div className="flex justify-end gap-4 mt-4">
          <Button variant="outline" type="button" onClick={() => reset()}>
            Reset
          </Button>
          <Button type="submit" className="bg-[#445E94] text-white px-6">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
