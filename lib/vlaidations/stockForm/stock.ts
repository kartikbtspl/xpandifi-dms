import { z } from "zod"

export const grnFormSchema = z.object({
  grnNumber: z.string().min(1, "GRN Number is required"),
  distributor: z.string().min(1, "Distributor is required"),
  distributorLocation: z.string().min(1, "Location is required"),
  purchasedOrderReference: z.string().optional(),
  invoiceNumber: z.string().optional(),
  invoiceDate: z.string().optional(),
  grnDate: z.string().optional(),
  remarks: z.string().optional(),
  invoiceImage: z
    .any()
    .optional()
    .refine((f) => !f || (f.size <= 10 * 1024 * 1024 && f.type.startsWith("image/")), {
      message: "Image must be JPG/PNG under 10MB",
    }),
})

export type GrnFormData = z.infer<typeof grnFormSchema>
