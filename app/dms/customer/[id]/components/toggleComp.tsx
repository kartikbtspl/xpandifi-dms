import { useState } from "react";
import {MdDateRange,MdLocalOffer,MdAccessTime,MdEmail,MdCall,MdLocationOn,MdBusiness,MdLocationCity,} from "react-icons/md";

export default function ToggleComp(){

    const [activeTab, setActiveTab] = useState("other");

    const [infoData, setInfoData] = useState([
    { id: 1, label: "Area", value: "Not specified", icon: <MdDateRange size={20} className="text-blue-600" /> },
    { id: 2, label: "Locations", value: "0", icon: <MdLocalOffer size={20} className="text-blue-600" /> },
    { id: 3, label: "Created Date", value: "01/08/2019", icon: <MdAccessTime size={20} className="text-blue-600" /> },
    { id: 4, label: "Updated Date", value: "19/04/2021", icon: <MdEmail size={20} className="text-blue-600" /> },
    { id: 5, label: "Created By", value: "Arup Naik", icon: <MdCall size={20} className="text-blue-600" /> },
    { id: 6, label: "Updated By", value: "Arup Naik", icon: <MdLocationOn size={20} className="text-blue-600" /> },
    { id: 7, label: "Firm Type", value: "0", icon: <MdEmail size={20} className="text-blue-600" /> },
    { id: 8, label: "Business Segment", value: "Not specified", icon: <MdBusiness size={20} className="text-blue-600" /> },
    { id: 9, label: "No of Locations", value: "0", icon: <MdLocationCity size={20} className="text-blue-600" /> },
  ]);

  const [customerInfo, setCustomerInfo] = useState({
    label: "Customer Information",
    value: "1231251258 Status: Customer Date Added: 0",
    icon: <MdLocationOn size={20} className="text-blue-600" />,
  });

    return (
        <div className="bg-white p-6 rounded-xl shadow-md mt-8">
      {/* 🔹 Tabs Header */}
      <div className="flex w-full bg-gray-100 rounded-full overflow-hidden text-sm font-medium text-gray-600 mb-6 justify-between">
        <div
          className={`px-6 py-2 cursor-pointer w-[90%] text-center ${
            activeTab === "other" ? "border-2 rounded-full text-black shadow-sm" : "hover:text-black"
          }`}
          onClick={() => setActiveTab("other")}
        >
          Other Information
        </div>
        <div
          className={`px-6 py-2 cursor-pointer w-[90%] text-center ${
            activeTab === "contacts" ? "border-2 rounded-full text-black shadow-sm" : "hover:text-black"
          }`}
          onClick={() => setActiveTab("contacts")}
        >
          More Contacts
        </div>
        <div
          className={`px-6 py-2 cursor-pointer w-[90%] text-center ${
            activeTab === "documents" ? "border-2 rounded-full text-black shadow-sm" : "hover:text-black"
          }`}
          onClick={() => setActiveTab("documents")}
        >
          Documents
        </div>
        <div
          className={`px-6 py-2 cursor-pointer w-[90%] text-center ${
            activeTab === "targets" ? "border-2 rounded-full text-black shadow-sm" : "hover:text-black"
          }`}
          onClick={() => setActiveTab("targets")}
        >
          Customer Target Details
        </div>
      </div>

      {/* 🔹 Info Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {activeTab==='other' && infoData.map((item) => (
          <div
            key={item.id}
            className="bg-gray-50 rounded-lg p-4 flex items-start gap-3"
          >
            {item.icon}
            <div>
              <p className="text-xs text-gray-500">{item.label}</p>
              <p className="text-sm font-medium">{item.value}</p>
            </div>
          </div>
        ))}

        {/* 🔹 Full-width Customer Info Row */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-3 bg-gray-50 rounded-lg p-4 flex items-start gap-3 mt-2">
          {customerInfo.icon}
          <div>
            <p className="text-xs text-gray-500">{customerInfo.label}</p>
            <p className="text-sm font-medium">{customerInfo.value}</p>
          </div>
        </div>
      </div>
    </div>
    )
}