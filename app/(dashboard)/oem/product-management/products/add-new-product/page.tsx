"use client"
import React, { useState } from 'react'
import AddNewProductForm from './components/AddNewProductForm'
import Breadcrumb from '@/components/common/ui/BreadCrumb'
import ProductForm from "./components/ProductForm"
import getNewProductCol from './components/getNewProductCol'
import Table from '@/components/common/table/Table'

function AddNewProduct() {

  const [newProductData, setNewProductData] = useState([]);

  const [loadingNewProducts,setLoadingNewProducts] = useState(false);
  const NewProductColumns = getNewProductCol();

  const handleRefreshNewProduct = () => {
        setLoadingNewProducts(true);
        setTimeout(() => {
          setLoadingNewProducts(false);
          setNewProductData(newProductData);
        }, 1000)
      };

  return (
    <div className='space-y-4'>
      <Breadcrumb
              crumbs={[
                { label: "Home", href: "/oem" },
                { label: "Product Management", href: "/oem/product-management" },
                { label: "Products", href: "/oem/product-management/products/add-new-product" },
              ]}
      />
      <h1 className="text-3xl font-bold mb-4 text-[#5D6F9E]">Product</h1>
      <AddNewProductForm />
      <ProductForm />
      <Table rows={newProductData} columns={NewProductColumns} onRefresh={handleRefreshNewProduct} loading={loadingNewProducts} filterKey='' showPagination />
    </div>
  )
}

export default AddNewProduct