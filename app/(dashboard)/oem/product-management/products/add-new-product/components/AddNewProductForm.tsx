// "use client";

// import React from "react";
// import { useForm, Controller } from "react-hook-form";
// import Input from "@/components/common/ui/Input";
// import Dropdown from "@/components/common/ui/Dropdown";
// import Button from "@/components/common/ui/Button";

// export default function AddNewProductForm() {
//   const { control, handleSubmit } = useForm({
//     defaultValues: {
//       productCode: "",
//       productName: "",
//       brand: "",
//       status: "active",
//       hsnCode: "",
//       barCode: "",
//       division: "",
//       materialGroup: "",
//       category: "",
//       subCategory: "",
//       details: "",
//       customField1: "",
//       customField2: "",
//       image: null,
//       umoSize: "",
//     },
//   });

//   const brandOptions = [
//     { value: "brandA", label: "Brand A" },
//     { value: "brandB", label: "Brand B" },
//   ];

//   const statusOptions = [
//     { value: "active", label: "Active" },
//     { value: "inactive", label: "Inactive" },
//   ];

//   const categoryOptions = [
//     { value: "cat1", label: "Category 1" },
//     { value: "cat2", label: "Category 2" },
//   ];

//   const subCategoryOptions = [
//     { value: "sub1", label: "Sub Category 1" },
//     { value: "sub2", label: "Sub Category 2" },
//   ];

//   const umoOptions = [
//     { value: "1", label: "1" },
//     { value: "2", label: "2" },
//   ];

//   const onSubmit = (data: any) => {
//     console.log("Form Submitted:", data);
//     reset();
//   };

//   return (
//     <div className="bg-white p-8 rounded-lg shadow-sm">
//       <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* Left Column */}
//           <div>
//             <Controller
//               name="productCode"
//               control={control}
//               render={({ field }) => (
//                 <Input {...field} label="Product Code" required placeholder="Enter Product Code" className="rounded-lg" />
//               )}
//             />
//           </div>
//           <div>
//             <Controller
//               name="category"
//               control={control}
//               render={({ field }) => (
//                 <Dropdown {...field} label="Category" required placeholder="-Select Category-" options={categoryOptions} className="rounded-lg" />
//               )}
//             />
//           </div>

//           <div>
//             <Controller
//               name="productName"
//               control={control}
//               render={({ field }) => (
//                 <Input {...field} label="Product Name" required placeholder="Enter Product Name" className="rounded-lg" />
//               )}
//             />
//           </div>
//           <div>
//             <Controller
//               name="subCategory"
//               control={control}
//               render={({ field }) => (
//                 <Dropdown {...field} label="Sub-Category" placeholder="-Select Sub-Category-" options={subCategoryOptions} className="rounded-lg" />
//               )}
//             />
//           </div>

//           <div>
//             <Controller
//               name="brand"
//               control={control}
//               render={({ field }) => (
//                 <Dropdown {...field} label="Brand" required placeholder="Select Brand" options={brandOptions} className="rounded-lg" />
//               )}
//             />
//           </div>
//           <div>
//             <Controller
//               name="details"
//               control={control}
//               render={({ field }) => (
//                 <Input {...field} label="Details" placeholder="Details" className="rounded-lg" />
//               )}
//             />
//           </div>

//           <div>
//             <Controller
//               name="status"
//               control={control}
//               render={({ field }) => (
//                 <Dropdown {...field} label="Status" required options={statusOptions} className="rounded-lg" />
//               )}
//             />
//           </div>
//           <div>
//             <Controller
//               name="customField1"
//               control={control}
//               render={({ field }) => (
//                 <Input {...field} label="Custom Field 1" placeholder="Custom Field 1" className="rounded-lg" />
//               )}
//             />
//           </div>

//           <div>
//             <Controller
//               name="hsnCode"
//               control={control}
//               render={({ field }) => (
//                 <Input {...field} label="HSN Code" placeholder="HSN Code" className="rounded-lg" />
//               )}
//             />
//           </div>
//           <div>
//             <Controller
//               name="customField2"
//               control={control}
//               render={({ field }) => (
//                 <Input {...field} label="Custom Field 2" placeholder="Custom Field 2" className="rounded-lg" />
//               )}
//             />
//           </div>

//           <div>
//             <Controller
//               name="barCode"
//               control={control}

//               render={({ field }) => (
//                 <Input {...field} label="Bar Code" placeholder="Bar Code" className="rounded-lg" />
//               )}
//             />
//           </div>
//           <div className="">
//             <Controller
//               name="image"
//               control={control}

//               render={({ field }) => (
//                 <div className="flex flex-col gap-2 ">
//                   <label className="w-32 text-sm font-medium text-gray-700">
//                     Image
//                   </label>
//                   <input type="file" className="py-2 border rounded-lg w-1/3 bg-gray-500 text-white px-4" />
//                 </div>
//               )}
//             />

//           </div>

//           <div>
//             <Controller
//               name="division"
//               control={control}
//               render={({ field }) => (
//                 <Input {...field} label="Division" placeholder="Division" className="rounded-lg" />
//               )}
//             />
//           </div>
//           <div>
//             <Controller
//               name="umoSize"
//               control={control}
//               render={({ field }) => (
//                 <Dropdown {...field} label="UMO Size" required options={umoOptions} className="rounded-lg" />
//               )}
//             />
//           </div>

//           <div>
//             <Controller
//               name="materialGroup"
//               control={control}
//               render={({ field }) => (
//                 <Input {...field} label="Material Group" placeholder="Material Group" className="rounded-lg" />
//               )}
//             />
//           </div>
//         </div>

//         {/* Action Buttons */}
//         <div className="flex justify-center gap-4 mt-6">
//           <Button variant="outline">Cancel</Button>
//           <Button type="submit" className="px-7">Save</Button>
//         </div>
//       </form>
//     </div>
//   );
// }
"use client";

import React from "react";
import { useForm, Controller } from "react-hook-form";
import Input from "@/components/common/ui/Input";
import Dropdown from "@/components/common/ui/Dropdown";
import Button from "@/components/common/ui/Button";

export default function AddNewProductForm() {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      productCode: "",
      productName: "",
      brand: "",
      status: "active",
      hsnCode: "",
      barCode: "",
      division: "",
      materialGroup: "",
      category: "",
      subCategory: "",
      details: "",
      customField1: "",
      customField2: "",
      image: null,
      umoSize: "",
    },
  });

  const brandOptions = [
    { value: "brandA", label: "Brand A" },
    { value: "brandB", label: "Brand B" },
  ];

  const statusOptions = [
    { value: "active", label: "Active" },
    { value: "inactive", label: "Inactive" },
  ];

  const categoryOptions = [
    { value: "cat1", label: "Category 1" },
    { value: "cat2", label: "Category 2" },
  ];

  const subCategoryOptions = [
    { value: "sub1", label: "Sub Category 1" },
    { value: "sub2", label: "Sub Category 2" },
  ];

  const umoOptions = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
  ];

  const onSubmit = (data: any) => {
    console.log("Form Submitted:", data);

    // ✅ Reset form after submit
    reset();
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-sm">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div>
            <Controller
              name="productCode"
              control={control}
              render={({ field }) => (
                <Input {...field} label="Product Code" required placeholder="Enter Product Code" className="rounded-lg" />
              )}
            />
          </div>
          <div>
            <Controller
              name="category"
              control={control}
              render={({ field }) => (
                <Dropdown {...field} label="Category" required placeholder="-Select Category-" options={categoryOptions} className="rounded-lg" />
              )}
            />
          </div>

          <div>
            <Controller
              name="productName"
              control={control}
              render={({ field }) => (
                <Input {...field} label="Product Name" required placeholder="Enter Product Name" className="rounded-lg" />
              )}
            />
          </div>
          <div>
            <Controller
              name="subCategory"
              control={control}
              render={({ field }) => (
                <Dropdown {...field} label="Sub-Category" placeholder="-Select Sub-Category-" options={subCategoryOptions} className="rounded-lg" />
              )}
            />
          </div>

          <div>
            <Controller
              name="brand"
              control={control}
              render={({ field }) => (
                <Dropdown {...field} label="Brand" required placeholder="Select Brand" options={brandOptions} className="rounded-lg" />
              )}
            />
          </div>
          <div>
            <Controller
              name="details"
              control={control}
              render={({ field }) => (
                <Input {...field} label="Details" placeholder="Details" className="rounded-lg" />
              )}
            />
          </div>

          <div>
            <Controller
              name="status"
              control={control}
              render={({ field }) => (
                <Dropdown {...field} label="Status" required options={statusOptions} className="rounded-lg" />
              )}
            />
          </div>
          <div>
            <Controller
              name="customField1"
              control={control}
              render={({ field }) => (
                <Input {...field} label="Custom Field 1" placeholder="Custom Field 1" className="rounded-lg" />
              )}
            />
          </div>

          <div>
            <Controller
              name="hsnCode"
              control={control}
              render={({ field }) => (
                <Input {...field} label="HSN Code" placeholder="HSN Code" className="rounded-lg" />
              )}
            />
          </div>
          <div>
            <Controller
              name="customField2"
              control={control}
              render={({ field }) => (
                <Input {...field} label="Custom Field 2" placeholder="Custom Field 2" className="rounded-lg" />
              )}
            />
          </div>

          <div>
            <Controller
              name="barCode"
              control={control}
              render={({ field }) => (
                <Input {...field} label="Bar Code" placeholder="Bar Code" className="rounded-lg" />
              )}
            />
          </div>
          <div className="">
            <Controller
              name="image"
              control={control}

              render={({ field }) => (
                <div className="flex flex-col gap-2 ">
                  <label className="w-32 text-sm font-medium text-gray-700">
                    Image
                  </label>
                  <input type="file" className="py-2 border rounded-lg w-1/3 bg-gray-500 text-white px-4" />
                </div>
              )}
            />
          </div>

          <div>
            <Controller
              name="division"
              control={control}
              render={({ field }) => (
                <Input {...field} label="Division" placeholder="Division" className="rounded-lg" />
              )}
            />
          </div>
          <div>
            <Controller
              name="umoSize"
              control={control}
              render={({ field }) => (
                <Dropdown {...field} label="UMO Size" required options={umoOptions} className="rounded-lg" />
              )}
            />
          </div>

          <div>
            <Controller
              name="materialGroup"
              control={control}
              render={({ field }) => (
                <Input {...field} label="Material Group" placeholder="Material Group" className="rounded-lg" />
              )}
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4 mt-6">
          <Button variant="outline" type="button" onClick={() => reset()}>
            Cancel
          </Button>
          <Button type="submit" className="px-7">
            Save
          </Button>
        </div>
      </form>
    </div>
  );
}
