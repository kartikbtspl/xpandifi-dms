"use client"
import Breadcrumb from "@/components/common/ui/BreadCrumb";
import SearchDistributors from "./components/SearchDistributors";
import Button from "@/components/common/ui/Button";
import { useState } from "react";
import getDistributorCol from "./components/distributorCol";
import Table from "@/components/common/table/Table";
import AddDistributorModal from "./Modal/AddDistributorModal";


export default function AddMoreContacts() {

  const [distributorData, setDistributorData] = useState([
    {
      id: 1,
      srNo: '1',
      distributorName: "Distributor 1",
      distributorCode: "D001",
      action: "",
    },
    {
      id: 2,
      srNo: '2',
      distributorName: "Distrubutor 2",
      distributorCode: "D002",
      action: "",
    },
  ])

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [savedModalData, setSavedModalData] = useState<{ distributorName: string; distributorCode: string }[]>([]);

  const distributorColumns = getDistributorCol();

  const [loadingDistributorData, setLoadingDistributorData] = useState(false);

  const handleRefreshStoretype = () => {
    setLoadingDistributorData(true);
    setTimeout(() => {
      setLoadingDistributorData(false);
      setDistributorData(distributorData);
    }, 1000)
  };


  const handleAddDistributor = (newDist: { distributorName: string; distributorCode: string }) => {
    const updated = [...savedModalData, newDist];
    setSavedModalData(updated);

    console.log("✅ Saved from Modal:", newDist);
    // console.log("📌 All Saved Entries:", updated);
  };

  return (
    <div className="space-y-6">
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/dashboard" },
          { label: "Customer Management", href: "/customer-management" },
          { label: "Customer Master", href: "/customer-management/master" },
        ]}
      />
      <h1 className="text-3xl font-semibold text-[#5D6F9E]">Customer Master</h1>
      <SearchDistributors />
      <div className="flex justify-end">
        <Button className="px-6" onClick={() => setIsModalOpen(true)}><span className="text-xl mr-2">+</span>Add Distributor</Button>
      </div>
      <Table rows={distributorData} columns={distributorColumns} onRefresh={handleRefreshStoretype} loading={loadingDistributorData} filterKey='distributorName' rowsPerPage={2} />
      <AddDistributorModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleAddDistributor}
      />
    </div>
  )
}