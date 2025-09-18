// "use client";

// import React, { useState } from "react";
// import { useForm, Controller } from "react-hook-form";
// import Input from "@/components/common/ui/Input";
// import Dropdown from "@/components/common/ui/Dropdown";
// import Button from "@/components/common/ui/Button";
// import Table from "@/components/common/table/Table"; // ← your reusable table
// import getNewDistributorSchemeCol from "./getNewDistributorSchemeCol";

// export default function NewSchemeForm() {
//   const { control, handleSubmit, reset } = useForm({
//     defaultValues: {
//       schemeName: "",
//       startDate: "",
//       endDate: "",
//       terms: "",
//       description: "",
//       distributor: "",
//       schemeOn: "",
//       schemeOnValue: "",
//       discountType: "",
//       discountValue: "",
//     },
//   });

//   const [rows, setRows] = useState<any[]>([]);

//   // Dropdown options
//   const distributorOptions = [
//     { value: "dist1", label: "Distributor 1" },
//     { value: "dist2", label: "Distributor 2" },
//   ];

//   const schemeOnOptions = [
//     { value: "invoice", label: "Invoice Amount" },
//     { value: "product", label: "Product" },
//   ];

//   const discountTypeOptions = [
//     { value: "percentage", label: "Percentage" },
//     { value: "flat", label: "Flat Amount" },
//   ];

//   // Handle Form Submit → Add row to table
//   const onSubmit = (data: any) => {
//     const newRow = {
//       id: rows.length + 1, // unique row id
//       srNo: rows.length + 1,
//       opportunityName: data.schemeName,
//       schemeOn: data.schemeOn,
//       schemeOnValue: data.schemeOnValue,
//       discountType: data.discountType,
//       discountValue: data.discountValue,
//     };

//     setRows((prev) => [...prev, newRow]);
//     reset(); // clear form after adding
//   };

//   return (
//     <div className=" space-y-4">
//       {/* Form */}
//       <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white p-6 rounded-lg shadow-sm">
//         {/* Top Section */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           <Controller
//             name="schemeName"
//             control={control}
//             render={({ field }) => (
//               <Input {...field} label="Scheme Name" required placeholder="Scheme Name" />
//             )}
//           />

//           <Controller
//             name="startDate"
//             control={control}
//             render={({ field }) => (
//               <Input {...field} type="date" label="Start Date" required />
//             )}
//           />

//           <Controller
//             name="endDate"
//             control={control}
//             render={({ field }) => (
//               <Input {...field} type="date" label="End Date" required />
//             )}
//           />

//           <Controller
//             name="terms"
//             control={control}
//             render={({ field }) => (
//               <Input {...field} label="Terms And Condition" required placeholder="Enter Terms" />
//             )}
//           />

//           <Controller
//             name="description"
//             control={control}
//             render={({ field }) => (
//               <Input {...field} label="Description" placeholder="Enter Description" />
//             )}
//           />
//         </div>

//         {/* Bottom Section */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           <Controller
//             name="distributor"
//             control={control}
//             render={({ field }) => (
//               <Dropdown {...field} label="Distributor Name" placeholder="--Select Distributor--" options={distributorOptions} />
//             )}
//           />

//           <Controller
//             name="schemeOn"
//             control={control}
//             render={({ field }) => (
//               <Dropdown {...field} label="Scheme On" placeholder="--Select Scheme On--" options={schemeOnOptions} />
//             )}
//           />

//           <Controller
//             name="schemeOnValue"
//             control={control}
//             render={({ field }) => (
//               <Input {...field} label="Scheme On Value" placeholder="Scheme Value" />
//             )}
//           />

//           <Controller
//             name="discountType"
//             control={control}
//             render={({ field }) => (
//               <Dropdown {...field} label="Discount Type" placeholder="--Select Discount Type--" options={discountTypeOptions} />
//             )}
//           />

//           <Controller
//             name="discountValue"
//             control={control}
//             render={({ field }) => (
//               <Input {...field} label="Discount Value" placeholder="Enter Value" />
//             )}
//           />
//         </div>

//         {/* Buttons */}
//         <div className="flex justify-end gap-4 mt-6">
//           <Button type="button" variant="outline" onClick={() => reset()}>
//             Reset
//           </Button>
//           <Button type="submit">Add</Button>
//         </div>
//       </form>

//       {/* Table Section */}
//       {rows.length > 0 && (
//         <div className="space-y-4">
//           <div>
//             <Table
//               columns={getNewDistributorSchemeCol()}
//               rows={rows}
//               showPagination={true}
//             />
//           </div>
//           <div className="w-full flex justify-center">
//             <Button>Submit</Button>
//             <Button variant="outline">cancel</Button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
"use client";

import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Input from "@/components/common/ui/Input";
import Dropdown from "@/components/common/ui/Dropdown";
import Button from "@/components/common/ui/Button";
import Table from "@/components/common/table/Table";
import getNewDistributorSchemeCol from "./getNewDistributorSchemeCol";
import { useSchemeStore } from "@/store/useSchemesStore";
import { useRouter } from "next/navigation";
import DeleteNewDistributorModal from "./Modals/DeleteNewDistributorModal";

export default function NewSchemeForm() {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      schemeName: "",
      startDate: "",
      endDate: "",
      terms: "",
      description: "",
      distributor: "",
      schemeOn: "",
      schemeOnValue: "",
      discountType: "",
      discountValue: "",
    },
  });
  const { deleteScheme } = useSchemeStore();

  const distributorOptions = [
    { value: "dist1", label: "Distributor 1" },
    { value: "dist2", label: "Distributor 2" },
  ];

  const schemeOnOptions = [
    { value: "invoice", label: "Invoice Amount" },
    { value: "product", label: "Product" },
  ];

  const discountTypeOptions = [
    { value: "percentage", label: "Percentage" },
    { value: "flat", label: "Flat Amount" },
  ];

  const [rows, setRows] = useState<any[]>([]);
  const addScheme = useSchemeStore((state) => state.addScheme);
  const router = useRouter();

  const onSubmit = (data: any) => {
    const newRow = {
      id: rows.length + 1,
      srNo: rows.length + 1,
      opportunityName: data.schemeName,
      schemeOn: data.schemeOn,
      schemeOnValue: data.schemeOnValue,
      discountType: data.discountType,
      discountValue: data.discountValue,
      startDate: data.startDate,
      endDate: data.endDate,
      schemeName: data.schemeName,
    };

    setRows((prev) => [...prev, newRow]);
    reset();
  };

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<any>(null);

  const handleDeleteClick = (row: any) => {
    setSelectedRow(row);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    if (selectedRow) {
      // remove the selected row from local state
      setRows((prevRows) => prevRows.filter((row) => row.id !== selectedRow.id));

      // optional: if you really want to delete from global store too
      deleteScheme(selectedRow.id);

      setIsDeleteModalOpen(false);
      setSelectedRow(null);
    }
  };

  const handleFinalSubmit = () => {
    if (rows.length === 0) return;

    const { schemeName, startDate, endDate } = rows[0];
    addScheme({ schemeName, startDate, endDate });
    router.push("/oem/schemes/distributor-scheme");
  };

  return (
    <div className="space-y-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 bg-white p-6 rounded-lg shadow-sm"
      >
        {/* Inputs same as before... */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Controller
            name="schemeName"
            control={control}
            render={({ field }) => (
              <Input {...field} label="Scheme Name" required placeholder="Scheme Name" />
            )}
          />

          <Controller
            name="startDate"
            control={control}
            render={({ field }) => (
              <Input {...field} type="date" label="Start Date" required />
            )}
          />

          <Controller
            name="endDate"
            control={control}
            render={({ field }) => (
              <Input {...field} type="date" label="End Date" required />
            )}
          />

          <Controller
            name="terms"
            control={control}
            render={({ field }) => (
              <Input {...field} label="Terms And Condition" required placeholder="Enter Terms" />
            )}
          />

          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <Input {...field} label="Description" placeholder="Enter Description" />
            )}
          />
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Controller
            name="distributor"
            control={control}
            render={({ field }) => (
              <Dropdown {...field} label="Distributor Name" placeholder="--Select Distributor--" options={distributorOptions} />
            )}
          />

          <Controller
            name="schemeOn"
            control={control}
            render={({ field }) => (
              <Dropdown {...field} label="Scheme On" placeholder="--Select Scheme On--" options={schemeOnOptions} />
            )}
          />

          <Controller
            name="schemeOnValue"
            control={control}
            render={({ field }) => (
              <Input {...field} label="Scheme On Value" placeholder="Scheme Value" />
            )}
          />

          <Controller
            name="discountType"
            control={control}
            render={({ field }) => (
              <Dropdown {...field} label="Discount Type" placeholder="--Select Discount Type--" options={discountTypeOptions} />
            )}
          />

          <Controller
            name="discountValue"
            control={control}
            render={({ field }) => (
              <Input {...field} label="Discount Value" placeholder="Enter Value" />
            )}
          />
        </div>

        <div className="flex justify-end gap-4 mt-6">
          <Button type="button" variant="outline" onClick={() => reset()}>
            Reset
          </Button>
          <Button type="submit">Add</Button>
        </div>
      </form>

      <div className="space-y-4">
        <Table
          columns={getNewDistributorSchemeCol(handleDeleteClick)}
          rows={rows}
          showPagination
        />

        <div className="w-full flex justify-center gap-4">
          <Button onClick={handleFinalSubmit}>Submit</Button>
          <Button
            variant="outline"
            onClick={() => {
              reset();
              setRows([]);
              router.push("/oem/schemes/distributor-scheme");
            }}
          >
            Cancel
          </Button>
        </div>
      </div>
      <DeleteNewDistributorModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={confirmDelete}
      />
    </div>
  );
}
