// schemas/customerSchema.ts
import { z } from "zod";

export const customerFormSchema = z.object({
  customerName: z.string().min(1, "Customer name is required"),
  code: z.string().min(1, "Code is required"),
  email: z.string().min(1, "Email is required").email("Invalid email"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .regex(/^[0-9]+$/, "Phone number must contain only digits"),
  fax: z.string().min(1, "Fax number is required"),
  customerAccount: z.string().min(1, "Customer account is required"),
  status: z.enum(["active", "archive"], {
    required_error: "Status is required",
  }),
  route: z.string().min(1, "Route is required"),
  gst: z.string().min(1, "GST number is required"),
  country: z.string().min(1, "Country is required"),
  zone: z.string().min(1, "Zone is required"),
  state: z.string().min(1, "State is required"),
  district: z.string().min(1, "District is required"),
  city: z.string().min(1, "City is required"),
  distributor: z.string().min(1, "Distributor is required"),
  storeType: z.string().min(1, "Store type is required"),
  pincode: z
    .string()
    .min(1, "Pincode is required")
    .regex(/^[0-9]{6}$/, "Pincode must be 6 digits"),
  classType: z.string().min(1, "Class type is required"),
  billingAddress: z.string().min(1, "Billing address is required"),
  address: z.string().min(1, "Address is required"),
  firmType: z.string().min(1, "Firm type is required"),
  businessSegment: z.string().min(1, "Business segment is required"),
  locations: z.string().min(1, "Locations are required"),
  noOfLocations: z
    .coerce.number()
    .min(1, "Number of locations is required")
    .refine((val) => val > 0, "Must be greater than 0"),
  latLong: z.string().min(1, "Lat-Long is required"),
  area: z.string().min(1, "Area is required"),
  customerType: z.string().min(1, "Customer type is required"),
  customerSubType: z.string().min(1, "Customer sub type is required"),
});

export type CustomerFormData = z.infer<typeof customerFormSchema>;
