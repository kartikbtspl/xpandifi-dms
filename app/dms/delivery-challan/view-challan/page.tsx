"use client";
import StickyNotesData from "../../customer/[id]/components/Sticky";
import { useState } from "react";
import {
  FaTag,
  FaUserCheck,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaBuilding,
} from "react-icons/fa";
import Button from "../../../../components/common/ui/Button";
import TotalOrderCard from "../../primary-order/[id]/components/TotalOrderCard";
import getChallanItemListColumn from "./challanItemListColumn";
import Table from "../../../../components/common/table/Table";

export default function ViewDetailsChallan() {
  const [challanDetailsData, setChallanDetailsData] = useState([
    {
      icon: <FaBuilding className="text-blue-500" />,
      title: "Store type",
      status: "C",
    },
    {
      icon: <FaTag className="text-blue-500" />,
      title: "Type",
      status: "Class Type",
    },
    {
      icon: <FaUserCheck className="text-blue-500" />,
      title: "Customer type",
      status: "Confirmed",
    },
    {
      icon: <FaEnvelope className="text-blue-500" />,
      title: "Email",
      status: "Not Provided",
    },
    {
      icon: <FaPhone className="text-blue-500" />,
      title: "Mobile",
      status: "999999999",
    },
    {
      icon: <FaMapMarkerAlt className="text-blue-500" />,
      title: "Route",
      status: "Chinchwad",
    },
    {
      icon: <FaMapMarkerAlt className="text-blue-500" />,
      title: "Address",
      status:
        "At and Railway station road, Doctor number 53, Sector number 27,Pradhikaran, Nigdi,Pune-chinchwad,Maharashtra, India",
    },
  ]);

  const [challanItemListData, setChallanItemListData] = useState([
    {
      id: 1,
      srNo: "01",
      product: "Agent Capsule",
      rate: "2000",
      tax: "2000",
      qty: "100",
      msp: "20000.0",
      subTotal: "20000.0",
      discount: "30.0",
      total: "14000",
    },
    {
      id: 2,
      srNo: "01",
      product: "Agent Capsule",
      rate: "2000",
      tax: "2000",
      qty: "100",
      msp: "20000.0",
      subTotal: "20000.0",
      discount: "30.0",
      total: "14000",
    },
    {
      id: 3,
      srNo: "01",
      product: "Kgent Capsule",
      rate: "2000",
      tax: "2000",
      qty: "100",
      msp: "20000.0",
      subTotal: "20000.0",
      discount: "30.0",
      total: "14000",
    },
    {
      id: 4,
      srNo: "01",
      product: "Agent Capsule",
      rate: "2000",
      tax: "2000",
      qty: "100",
      msp: "20000.0",
      subTotal: "20000.0",
      discount: "30.0",
      total: "14000",
    },
    {
      id: 5,
      srNo: "01",
      product: "Agent Capsule",
      rate: "2000",
      tax: "2000",
      qty: "100",
      msp: "20000.0",
      subTotal: "20000.0",
      discount: "30.0",
      total: "14000",
    },
    {
      id: 6,
      srNo: "01",
      product: "Agent Capsule",
      rate: "2000",
      tax: "2000",
      qty: "100",
      msp: "20000.0",
      subTotal: "20000.0",
      discount: "30.0",
      total: "14000",
    },
    {
      id: 7,
      srNo: "01",
      product: "Agent Capsule",
      rate: "2000",
      tax: "2000",
      qty: "100",
      msp: "20000.0",
      subTotal: "20000.0",
      discount: "30.0",
      total: "14000",
    },
  ]);

  const [loadingChallanItemList, setLoadingChallanItemList] = useState(false);
  const challanItemColumn = getChallanItemListColumn();

  const handleChallanItemListRefresh = () => {
    setLoadingChallanItemList(true);
    setTimeout(() => setLoadingChallanItemList(false), 1000);
  };

  return (
    <div className="space-y-4">
        <div>
            <Button variant="outline" onClick={() => history.back()}> Back</Button>
        </div>
      <div className="bg-white p-3 rounded-lg shadow-sm">
        <div className="mb-2">
          <h1 className="font-semibold text-2xl">Challan Details</h1>
        </div>
        <div className="flex flex-wrap justify-between h-[40vh]">
          {challanDetailsData.map((data, index) => (
            <StickyNotesData key={index} fullWidth={data.title === "Address"}>
              <div className="flex items-center gap-2 w-full">
                <div className="mr-3 text-lg">{data.icon}</div>
                <div>
                  <p className="text-sm text-gray-500">{data.title}</p>
                  <p className="font-medium">{data.status}</p>
                </div>
              </div>
            </StickyNotesData>
          ))}
        </div>
      </div>
      <div>
          <TotalOrderCard />
      </div>
      <div>
          <Table columns={challanItemColumn} rows={challanItemListData} onRefresh={handleChallanItemListRefresh} rowsPerPage={4}  />
      </div>
    </div>
  );
}
