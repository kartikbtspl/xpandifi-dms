// components/CustomerDocumentForm.tsx
"use client";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Dropdown from "@/components/common/ui/Dropdown";
import Button from "@/components/common/ui/Button";
import getCustomerWiseDocsCol from "./customerWiseDoscCOl";
import { FiTrash2 } from "react-icons/fi";
import Table from "@/components/common/table/Table";

type FormValues = {
  customerType: string;
  subType: string;
  document: string;
};

const CustomerDocumentForm: React.FC = () => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      customerType: "",
      subType: "",
      document: "",
    },
  });

  const customerTypeOptions = [
    { value: "retail", label: "Retail" },
    { value: "corporate", label: "Corporate" },
    { value: "premium", label: "Premium" },
  ];

  const subTypeOptions = [
    { value: "individual", label: "Individual" },
    { value: "organization", label: "Organization" },
  ];

  const documentOptions = [
    { value: "passport", label: "Passport" },
    { value: "aadhar", label: "Aadhar Card" },
    { value: "pan", label: "PAN Card" },
  ];

  const onSubmit = (data: FormValues) => {
    console.log("Customer Document Data:", data);
  };


  const [docsData, setDocsData] = useState([
      {
        id: 1,
        srNo: "1",
        customerType: "Confirmed",
        customerSubType: "Confirmed",
        documentName : 'Confirmed',
        isMandatory : 'False',
        action: <FiTrash2 size={20}/>
      },
      {
        id: 2,
        srNo: "2",
        customerType: "Confirmed",
        customerSubType: "Confirmed",
        documentName : 'Confirmed',
        isMandatory : 'False',
        action: <FiTrash2 size={20}/>
      },
    ])
  
    const customerWiseDocsColumns = getCustomerWiseDocsCol();
  
    const [loadingDocs, setLoadingDocs] = useState(false);
  
    const handleRefreshCustomerWiseDocs = () => {
      setLoadingDocs(true);
      setTimeout(() => {
        setLoadingDocs(false);
        setDocsData(docsData);
      }, 1000)};

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 lg:grid-cols-4 gap-4 items-end"
        >
          {/* Select Customer Type */}
          <Controller
            name="customerType"
            control={control}
            render={({ field, fieldState }) => (
              <Dropdown
                {...field}
                label="Select Customer Type"
                placeholder="Select Customer Type"
                options={customerTypeOptions}
                error={fieldState.error?.message}
              />
            )}
          />

          {/* Select Sub Type */}
          <Controller
            name="subType"
            control={control}
            render={({ field, fieldState }) => (
              <Dropdown
                {...field}
                label="Select Sub Type"
                placeholder="Select Sub Type"
                options={subTypeOptions}
                error={fieldState.error?.message}
              />
            )}
          />

          {/* Select Document */}
          <Controller
            name="document"
            control={control}
            render={({ field, fieldState }) => (
              <Dropdown
                {...field}
                label="Select Document"
                placeholder="Select Document"
                options={documentOptions}
                error={fieldState.error?.message}
              />
            )}
          />

          {/* Add Button */}
          <div className="flex justify-start lg:justify-end mb-1">
            <Button type="submit" rounded="full" className="px-6">
              + Add Customer Document
            </Button>
          </div>
        </form>
      </div>
      <div>
        <Table rows={docsData} columns={customerWiseDocsColumns}onRefresh={handleRefreshCustomerWiseDocs} loading={loadingDocs} rowsPerPage={2}/>
      </div>
    </div>
  );
};

export default CustomerDocumentForm;
