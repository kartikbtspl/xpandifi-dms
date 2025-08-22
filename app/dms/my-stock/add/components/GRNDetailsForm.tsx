"use client"
import React from "react"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { grnFormSchema, GrnFormData } from "../../../../../lib/validations/stock"
import Input from "../../../../../components/common/ui/Input"
import Dropdown from "../../../../../components/common/ui/Dropdown"
import { DatePicker } from "../../../../../components/common/ui/DatePicker"
import { Textarea } from "../../../../../components/common/ui/Textarea"
import { Upload } from "../../../../../components/common/ui/Upload"
import Button from "../../../../../components/common/ui/Button"

const distributorOpts = [
  { value: "", label: "Select distributor" },
  { value: "teamspring", label: "Teamspring" },
]
const locationOpts = [
  { value: "", label: "Select location" },
  { value: "warehouse1", label: "Warehouse 1" },
]

export function GRNDetailsForm({ onSubmit }: { onSubmit: (data: GrnFormData) => void }) {
  const {
    control,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<GrnFormData>({
    resolver: zodResolver(grnFormSchema),
    defaultValues: {
      grnNumber: "",
      distributor: "",
      distributorLocation: "",
      purchasedOrderReference: "",
      invoiceNumber: "",
      invoiceDate: "",
      grnDate: "",
      remarks: "",
      invoiceImage: null,
    },
  })

  const file = watch("invoiceImage")

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="bg-white rounded-2xl p-6 shadow mb-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          <Controller
            name="grnNumber"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label="GRN Number*"
                placeholder="w18u18291u2"
                error={errors.grnNumber?.message}
              />
            )}
          />

          <Controller
            name="distributor"
            control={control}
            render={({ field }) => (
              <Dropdown
                {...field}
                label="Distributor*"
                options={distributorOpts}
                error={errors.distributor?.message}
              />
            )}
          />

          <Controller
            name="distributorLocation"
            control={control}
            render={({ field }) => (
              <Dropdown
                {...field}
                label="Distributor Location*"
                options={locationOpts}
                error={errors.distributorLocation?.message}
              />
            )}
          />

          <Controller
            name="purchasedOrderReference"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label="Purchased Order Reference Number"
                placeholder="Reference Number"
                error={errors.purchasedOrderReference?.message}
              />
            )}
          />

          <Controller
            name="invoiceNumber"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label="Invoice Number"
                placeholder="Invoice Number"
                error={errors.invoiceNumber?.message}
              />
            )}
          />
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <Controller
            name="remarks"
            control={control}
            render={({ field }) => (
              <Textarea
                {...field}
                label="Remarks"
                placeholder="Enter remarks"
                rows={4}
                error={errors.remarks?.message}
              />
            )}
          />

          <Controller
            name="invoiceImage"
            control={control}
            render={({ field }) => (
              <Upload
                label="Upload Invoice Image"
                file={file}
                onFileChange={field.onChange}
                // error={errors.invoiceImage?.message}
              />
            )}
          />

          {/* Invoice Date & GRN Date in one row */}
          <div className="grid grid-cols-2 gap-6">
            <Controller
              name="invoiceDate"
              control={control}
              render={({ field }) => (
                <DatePicker
                  {...field}
                  selected={field.value ? new Date(field.value) : null}
                  label="Invoice Date"
                  error={errors.invoiceDate?.message}
                />
              )}
            />
            <Controller
              name="grnDate"
              control={control}
              render={({ field }) => (
                <DatePicker
                  {...field}
                  selected={field.value ? new Date(field.value) : null}
                  label="GRN Date"
                  error={errors.grnDate?.message}
                />
              )}
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-4">
        <Button variant="outline" onClick={() => reset()}>
          Reset
        </Button>
        <Button type="submit">Submit</Button>
      </div>
    </form>
  )
}



// "use client"
// import React from "react"
// import { useForm, Controller } from "react-hook-form"
// import { zodResolver } from "@hookform/resolvers/zod"
// import { grnFormSchema, GrnFormData } from "../../../../../lib/validations/stock"
// import  Input  from "../../../../../components/common/ui/Input"
// import  Dropdown  from "../../../../../components/common/ui/Dropdown"
// import { DatePicker } from "../../.././../../components/common/ui/DatePicker"
// import  {Textarea}  from "../../../../../components/common/ui/Textarea"
// import { Upload } from "../../.././../../components/common/ui/Upload"
// import  Button  from "../../.././../../components/common/ui/Button"

// const distributorOpts = [
//   { value: "", label: "Select distributor" },
//   { value: "teamspring", label: "Teamspring" },
// ]
// const locationOpts = [
//   { value: "", label: "Select location" },
//   { value: "warehouse1", label: "Warehouse 1" },
// ]

// export function GRNDetailsForm({ onSubmit }: { onSubmit: (data: GrnFormData) => void }) {
//   const {
//     control,
//     handleSubmit,
//     reset,
//     watch,
//     formState: { errors },
//   } = useForm<GrnFormData>({
//     resolver: zodResolver(grnFormSchema),
//     defaultValues: {
//       grnNumber: "",
//       distributor: "",
//       distributorLocation: "",
//       purchasedOrderReference: "",
//       invoiceNumber: "",
//       invoiceDate: "",
//       grnDate: "",
//       remarks: "",
//       invoiceImage: null,
//     },
//   })

//   const file = watch("invoiceImage")

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <div className="bg-white rounded-2xl p-6 shadow mb-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
//         <Controller
//           name="grnNumber"
//           control={control}
//           render={({ field }) => (
//             <Input
//               {...field}
//               label="GRN Number*"
//               placeholder="w18u18291u2"
//               error={errors.grnNumber?.message}
//             />
//           )}
//         />

//         <Controller
//           name="remarks"
//           control={control}
//           render={({ field }) => (
//             <Textarea
//               {...field}
//               label="Remarks"
//               placeholder="Enter remarks"
//               error={errors.remarks?.message}
//             />
//           )}
//         />

//         <Controller
//           name="distributor"
//           control={control}
//           render={({ field }) => (
//             <Dropdown
//               {...field}
//               label="Distributor*"
//               options={distributorOpts}
//               error={errors.distributor?.message}
//             />
//           )}
//         />

//         <Controller
//           name="invoiceImage"
//           control={control}
//           render={({ field }) => (
//             <Upload
//               label="Upload Invoice Image"
//               file={file}
//               onFileChange={field.onChange}
//               error={errors.invoiceImage?.message}
//             />
//           )}
//         />

//         <Controller
//           name="distributorLocation"
//           control={control}
//           render={({ field }) => (
//             <Dropdown
//               {...field}
//               label="Distributor Location*"
//               options={locationOpts}
//               error={errors.distributorLocation?.message}
//             />
//           )}
//         />

//         <Controller
//           name="invoiceDate"
//           control={control}
//           render={({ field }) => (
//             <DatePicker
//               {...field}
//               label="Invoice Date"
//               error={errors.invoiceDate?.message}
//             />
//           )}
//         />

//         <Controller
//           name="purchasedOrderReference"
//           control={control}
//           render={({ field }) => (
//             <Input
//               {...field}
//               label="Purchased Order Reference Number"
//               placeholder="Reference Number"
//               error={errors.purchasedOrderReference?.message}
//             />
//           )}
//         />

//         <Controller
//           name="grnDate"
//           control={control}
//           render={({ field }) => (
//             <DatePicker
//               {...field}
//               label="GRN Date"
//               error={errors.grnDate?.message}
//             />
//           )}
//         />

//         <Controller
//           name="invoiceNumber"
//           control={control}
//           render={({ field }) => (
//             <Input
//               {...field}
//               label="Invoice Number"
//               placeholder="Invoice Number"
//               error={errors.invoiceNumber?.message}
//             />
//           )}
//         />
//       </div>

//       <div className="flex justify-end gap-4">
//         <Button variant="outline" onClick={() => reset()}>
//           Reset
//         </Button>
//         <Button type="submit">Submit</Button>
//       </div>
//     </form>
//   )
// }
