"use client"

import React from "react"
import { useForm, Controller } from "react-hook-form"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import Input from "../../../../../components/common/ui/Input"
import Dropdown from "../../../../../components/common/ui/Dropdown"
import { DatePicker } from "../../../../../components/common/ui/DatePicker"
import Button from "../../../../../components/common/ui/Button"

const packOptions = [
  { value: "", label: "Select pack" },
  { value: "piece", label: "Piece" },
  { value: "box", label: "Box" },
  { value: "kg", label: "KG" },
]

const addProductSchema = z.object({
  productCode: z.string().min(1, "Required"),
  quantity: z
    .number()
    .min(1, "Must be at least 1"),
  productName: z.string().min(1, "Required"),
  pack: z.string().min(1, "Required"),
  expiryDate: z.string().min(1, "Required"),
})

type AddProductForm = z.infer<typeof addProductSchema>

export default function AddProductForm({
  onAdd,
}: {
  onAdd: (data: AddProductForm) => void
}) {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AddProductForm>({
    resolver: zodResolver(addProductSchema),
    defaultValues: {
      productCode: "",
      quantity: 0,
      productName: "",
      pack: "",
      expiryDate: "",
    },
  })

  return (
    <form
      onSubmit={handleSubmit((data) => {
        onAdd(data)
        reset()
      })}
      className="bg-white rounded-2xl p-6 shadow grid grid-cols-1 lg:grid-cols-[2fr_1fr_2fr_1fr_2fr_auto] gap-4 items-end"
    >
      <Controller
        name="productCode"
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            label="Product Code*"
            placeholder="Search product code"
            error={errors.productCode?.message}
          />
        )}
      />

      <Controller
        name="quantity"
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            type="number"
            label="Quantity*"
            placeholder="0"
            error={errors.quantity?.message}
          />
        )}
      />

      <Controller
        name="productName"
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            label="Product Name*"
            placeholder="Enter Name"
            error={errors.productName?.message}
          />
        )}
      />

      <Controller
        name="pack"
        control={control}
        render={({ field }) => (
          <Dropdown
            {...field}
            label="Pack*"
            options={packOptions}
            error={errors.pack?.message}
          />
        )}
      />

      <Controller
        name="expiryDate"
        control={control}
        render={({ field }) => (
          <DatePicker
            selected={field.value ? new Date(field.value) : null}
            onChange={(date) =>
              field.onChange(date ? date.toISOString().substr(0, 10) : "")
            }
            label="Expiry Date"
            error={errors.expiryDate?.message}
          />
        )}
      />

      <Button type="submit" className="h-12">
        Add
      </Button>
    </form>
  )
}
