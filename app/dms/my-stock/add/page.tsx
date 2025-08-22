"use client"
import React, { useState } from 'react'
import { GRNDetailsForm } from './components/GRNDetailsForm'
import { GrnFormData } from '../../../../lib/validations/stock'
import { Header } from './components/FormHeader'
import AddProductForm from './components/AddProductForm'
import Table from '../../../../components/common/table/Table'
import { useRouter } from 'next/navigation'
import getProductColumns from './components/getProductColumns'
import Button from '../../../../components/common/ui/Button'

const page = () => {
  const router = useRouter();

  const [products, setProducts] = useState([
    {
      id: 1,
      productId: 10461,
      productCode: 16752,
      quantity: 56,
      productName: "Tractor",
      pack: "Tractor-piece",
      expiryDate: "22 June, 2025",
    },
    {
      id: 2,
      productId: 10462,
      productCode: 16753,
      quantity: 75,
      productName: "Tractor",
      pack: "Tractor-piece",
      expiryDate: "15 July, 2025",
    },
    {
      id: 3,
      productId: 10463,
      productCode: 16754,
      quantity: 120,
      productName: "Tractor",
      pack: "Tractor-piece",
      expiryDate: "01 Aug, 2025",
    },
  ]);

  const [loading, setLoading] = useState(false);

  const handleRemove = (id: number) => {
    setProducts((prev) => prev.filter((row) => row.id !== id));
  };

  const columns = getProductColumns(
    (row) => router.push(`/dms/product/${row.id}`),
    handleRemove
  );

  const handleRefresh = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  };
     const handleFormSubmit = (data: GrnFormData) => console.log(data)
     const handleAddProduct = (data: any) => console.log(data)
  return (
     <div className="min-h-screen">
      <Header />
      <GRNDetailsForm onSubmit={handleFormSubmit} />
      <div className='mt-8'>
      <AddProductForm  onAdd={handleAddProduct}/>
      </div>
       <div className="mt-6">
        <Table
          columns={columns}
          rows={products}
          onRowClick={(row) => router.push(`/dms/product/${row.id}`)}
          onRefresh={handleRefresh}
          loading={loading}
          showPagination={true}
          rowsPerPage={10}
        />
      </div>
      {/* Footer Buttons */}
      <div className="flex justify-end gap-4 mt-6">
        <Button
          variant="primary"
        >
          Save GRN Entry
        </Button>
        <Button
          variant="ghost"
          color="error"
          className="text-red-500"
        >
          Cancel
        </Button>
      </div>
    </div>
  )
}

export default page
