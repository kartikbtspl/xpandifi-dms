"use client";
import Table from "@/components/common/table/Table";
import Button from "@/components/common/ui/Button";
import { useEffect, useState } from "react";
import getActiveProductColumns from "./getActiveProductColumns";
import { useRouter } from "next/navigation";
import getPriceMasterColumns from "./getPriceMasterColumns"

export default function SegmentedControl() {
  const [activeTab, setActiveTab] = useState("archive");
  const [showArchive, setShowArchive] = useState(false); // toggle state
  const router = useRouter();

  const [products] = useState([
    {
      id: 1,
      srNo: '01',
      productName: "Agent Capsule",
      productCode: "AgentCapsule001",
      brand: "Indofil",
      category: "Agro Chemicals",
      subCategory: "Insecticides",
    },
    {
      id: 2,
      srNo: '02',
      productName: "Agent Capsule",
      productCode: "AgentCapsule001",
      brand: "Indofil",
      category: "Agro Chemicals",
      subCategory: "Insecticides",
    },
    {
      id: 3,
      srNo: '03',
      productName: "Agent Capsule",
      productCode: "AgentCapsule001",
      brand: "Indofil",
      category: "Agro Chemicals",
      subCategory: "Insecticides",
    },
  ]);

  const [archiveProducts] = useState([
    {
      id: 101,
      productName: "Old Capsule",
      productCode: "OldCapsule001",
      brand: "Indofil",
      category: "Agro Chemicals",
      subCategory: "Fungicides",
    },
  ]);

  const [priceMasterListData, setPriceMasterListData] = useState([
    {
      id: 1,
      srNo: "01",
      priceMasterId: "1111",
      productCode: "121373",
      pack: "TATA",
      packUnit: "2361681",
      mrp: "20rs",
      state: "MH",
      city: "Pune",
      createdDate: "04/10/2024",
      status: "Active"
    },
    {
      id: 2,
      srNo: "02",
      priceMasterId: "1111",
      productCode: "121373",
      pack: "TATA",
      packUnit: "2361681",
      mrp: "20rs",
      state: "MH",
      city: "Pune",
      createdDate: "04/10/2024",
      status: "Inactive"
    },
    {
      id: 3,
      srNo: "03",
      priceMasterId: "1111",
      productCode: "121373",
      pack: "TATA",
      packUnit: "2361681",
      mrp: "20rs",
      state: "MH",
      city: "Pune",
      createdDate: "04/10/2024",
      status: "Active"
    },
  ])

  const [loadingPriceMaster, setLoadingPriceMaster] = useState(false);

  const handleRefreshPriceMaster = () => {
    setLoadingPriceMaster(true);
    setTimeout(() => {
      setLoadingPriceMaster(false);
      setPriceMasterListData(priceMasterListData);
    }, 1000)
  };

  const handleRowClick = (row: any) => {
    router.push(`/oem/product-management/products/${row.id}`);
  };

  const columns = getActiveProductColumns(handleRowClick);
  const priceMasterColumns = getPriceMasterColumns();

  useEffect(() => {
    if (activeTab !== "archive") {
      setShowArchive(false);
    }
  }, [activeTab]);


  return (
    <div className="space-y-6">
      {/* Segmented Button Group */}
      <div className="flex bg-white rounded-full w-full p-1 shadow-sm">
        <button
          onClick={() => {
            setActiveTab("archive");
            setShowArchive(!showArchive); // toggle here
          }}
          className={`px-4 py-2 rounded-full text-sm font-medium transition ${activeTab === "archive"
              ? "bg-[#445E94] text-white shadow-sm"
              : "text-gray-600 hover:text-[#445E94]"
            }`}
        >
          {showArchive ? "Show Active Products" : "Show Archive Products"}
        </button>
        <button
          onClick={() => setActiveTab("price")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition ${activeTab === "price"
              ? "bg-[#445E94] text-white"
              : "text-gray-600 hover:text-[#445E94]"
            }`}
        >
          Show Price Master
        </button>
        <button
          onClick={() => setActiveTab("export")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition ${activeTab === "export"
              ? "bg-[#445E94] text-white"
              : "text-gray-600 hover:text-[#445E94]"
            }`}
        >
          Export Price Master
        </button>
      </div>

      {/* Active Tab Content */}
      {activeTab === "archive" && (
        <div className="bg-white rounded-2xl shadow-sm p-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">
              {showArchive ? "Archive Product List" : "Active Product List"}
            </h2>
            <div className="flex items-center gap-3">
              <Button className="" onClick={() => router.push('/oem/product-management/products/add-new-product')}><span className="text-xl">+</span>Add New Product</Button>
              <Button variant="outline">Import</Button>
              <Button variant="primary">Export</Button>
            </div>
          </div>
          <hr className="text-gray-200" />
          <Table
            columns={columns}
            rows={showArchive ? archiveProducts : products}
            showPagination={true}
            rowsPerPage={10}
          />
        </div>
      )}
      {
        activeTab === "price" && (
          <>

            <div className="bg-white rounded-2xl shadow-sm p-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-[#4B5565]">
                  Product Price Master List
                </h2>
                <div className="flex items-center gap-3">
                  <Button variant="outline">Import</Button>
                  <Button variant="primary">Export</Button>
                </div>
              </div>
              <hr className="text-gray-200" />
              <Table
                columns={priceMasterColumns}
                rows={priceMasterListData}
                showPagination={true}
                onRefresh={handleRefreshPriceMaster}
                loading={loadingPriceMaster}
                filterKey="priceMasterId"
                rowsPerPage={10}
              />
            </div>
          </>
        )
      }
    </div>
  );
}
