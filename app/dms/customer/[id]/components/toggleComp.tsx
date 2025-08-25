import { useState } from "react";
import {
  MdDateRange,
  MdLocalOffer,
  MdAccessTime,
  MdEmail,
  MdCall,
  MdLocationOn,
  MdBusiness,
  MdLocationCity,
} from "react-icons/md";
import Table from "../../../../../components/common/table/Table";
import getContactInfoColumn from "./contactInfoColumn";
import getDocumentColumn from "./documnetColumns";
import getTargetDetailsColumn from "./targetDetailsColumn";

export default function ToggleComp() {
  const [activeTab, setActiveTab] = useState("other");
  const [loadingContactInfo, setLoadingContactInfo] = useState(false);

  const [infoData, setInfoData] = useState([
    {
      id: 1,
      label: "Area",
      value: "Not specified",
      icon: <MdDateRange size={20} className="text-blue-600" />,
    },
    {
      id: 2,
      label: "Locations",
      value: "0",
      icon: <MdLocalOffer size={20} className="text-blue-600" />,
    },
    {
      id: 3,
      label: "Created Date",
      value: "01/08/2019",
      icon: <MdAccessTime size={20} className="text-blue-600" />,
    },
    {
      id: 4,
      label: "Updated Date",
      value: "19/04/2021",
      icon: <MdEmail size={20} className="text-blue-600" />,
    },
    {
      id: 5,
      label: "Created By",
      value: "Arup Naik",
      icon: <MdCall size={20} className="text-blue-600" />,
    },
    {
      id: 6,
      label: "Updated By",
      value: "Arup Naik",
      icon: <MdLocationOn size={20} className="text-blue-600" />,
    },
    {
      id: 7,
      label: "Firm Type",
      value: "0",
      icon: <MdEmail size={20} className="text-blue-600" />,
    },
    {
      id: 8,
      label: "Business Segment",
      value: "Not specified",
      icon: <MdBusiness size={20} className="text-blue-600" />,
    },
    {
      id: 9,
      label: "No of Locations",
      value: "0",
      icon: <MdLocationCity size={20} className="text-blue-600" />,
    },
    {
      id: 10,
      label: "Customer Information",
      value: "1231251258 Status: Customer Date Added: 0",
      icon: <MdLocationOn size={20} className="text-blue-600" />,
    },
  ]);

  const [contactInfoData, setContactInfoData] = useState([
    {
      id : 1,
      name : "John Smith",
      email: "johnsmith@gmail.com",
      mobileNumber : "232432423437",
      designation : "Developer"
    },
    {
      id : 2,
      name : "John Smith",
      email: "johnsmith@gmail.com",
      mobileNumber : "232432423437",
      designation : "Developer"
    },
    {
      id : 3,
      name : "John Smith",
      email: "johnsmith@gmail.com",
      mobileNumber : "232432423437",
      designation : "Developer"
    },
    {
      id : 4,
      name : "John Smith",
      email: "johnsmith@gmail.com",
      mobileNumber : "232432423437",
      designation : "Developer"
    },
  ])

  const [documentData, setDocumentData] = useState([
    {
      id : 1,
      srNo : '01',
      documentType : "PDF",
      document : "GST invoice for may month"
    },
    {
      id : 2,
      srNo : '02',
      documentType : "PDF",
      document : "GST invoice for may month"
    },
    {
      id : 3,
      srNo : '03',
      documentType : "PDF",
      document : "GST invoice for may month"
    },
  ])
 
  const contactColumn = getContactInfoColumn(); 
  
  const handleRefreshContacInfo = () => {
    setLoadingContactInfo(true);
    setTimeout(() => {
      setLoadingContactInfo(false)
      setContactInfoData(contactInfoData)
    }, 1000);
  };

  const [loadingDocument, setLoadingDocument] = useState(false);

  const documentColumn = getDocumentColumn();

  const handleRefreshDcuments = () => {
    setLoadingDocument(true);
    setTimeout(() => {
      setLoadingDocument(false)
      setDocumentData(documentData)
    }, 1000);
  };

  const [targetData, settargetData] = useState([
    {
      id: 1,
      srNo : '01',
      financialYear: "2024",
      month: "may",
      collection: "ABCD",
      volume : "100",
      revenue : "1,00,000",
      category : "electronic"
    },
    {
      id: 2,
      srNo : '02',
      financialYear: "2024",
      month: "may",
      collection: "ABCD",
      volume : "100",
      revenue : "1,00,000",
      category : "electronic"
    },
    {
      id: 3,
      srNo : '03',
      financialYear: "2024",
      month: "may",
      collection: "ABCD",
      volume : "100",
      revenue : "1,00,000",
      category : "electronic"
    },
    {
      id: 4,
      srNo : '04',
      financialYear: "2024",
      month: "may",
      collection: "ABCD",
      volume : "100",
      revenue : "1,00,000",
      category : "electronic"
    },
    {
      id: 5,
      srNo : '05',
      financialYear: "2024",
      month: "may",
      collection: "ABCD",
      volume : "100",
      revenue : "1,00,000",
      category : "electronic"
    },
    {
      id: 6,
      srNo : '06',
      financialYear: "2024",
      month: "may",
      collection: "ABCD",
      volume : "100",
      revenue : "1,00,000",
      category : "electronic"
    },
    {
      id: 7,
      srNo : '07',
      financialYear: "2024",
      month: "may",
      collection: "ABCD",
      volume : "100",
      revenue : "1,00,000",
      category : "electronic"
    },
    {
      id: 8,
      srNo : '08',
      financialYear: "2024",
      month: "may",
      collection: "ABCD",
      volume : "100",
      revenue : "1,00,000",
      category : "electronic"
    },
  ])

  const targetColumns = getTargetDetailsColumn();
  const [loadingTarget, setLoadingTarget] = useState(false);

  const handleRefreshTargets = () => {
    setLoadingTarget(true);
    setTimeout(() => {
      setLoadingTarget(false)
      settargetData(targetData)
    }, 1000);
  };

  return (
    <div className="bg-white p-3 rounded-xl shadow-md mt-8">
      {/* 🔹 Tabs Header */}
      <div className="flex w-full bg-[#F8FAFB] rounded-full overflow-hidden text-sm font-medium text-gray-600 mb-4 justify-between">
        <div
          className={`px-6 py-2 cursor-pointer w-[90%] text-center ${
            activeTab === "other"
              ? "border-2 bg-[#FFFFFF] rounded-full text-black shadow-sm"
              : "hover:text-black"
          }`}
          onClick={() => setActiveTab("other")}
        >
          Other Information
        </div>
        <div
          className={`px-6 py-2 cursor-pointer w-[90%] text-center ${
            activeTab === "contacts"
              ? "border-2 bg-[#FFFFFF] rounded-full text-black shadow-sm"
              : "hover:text-black"
          }`}
          onClick={() => setActiveTab("contacts")}
        >
          More Contacts
        </div>
        <div
          className={`px-6 py-2 cursor-pointer w-[90%] text-center ${
            activeTab === "documents"
              ? "border-2 bg-[#FFFFFF] rounded-full text-black shadow-sm"
              : "hover:text-black"
          }`}
          onClick={() => setActiveTab("documents")}
        >
          Documents
        </div>
        <div
          className={`px-6 py-2 cursor-pointer w-[90%] text-center ${
            activeTab === "targets"
              ? "border-2 bg-[#FFFFFF] rounded-full text-black shadow-sm"
              : "hover:text-black"
          }`}
          onClick={() => setActiveTab("targets")}
        >
          Customer Target Details
        </div>
      </div>

      {/* 🔹 Info Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {activeTab === "other" &&
          infoData.map((item) => (
            <div
              key={item.id}
              className={`bg-[#F8FAFB] rounded-lg p-4 flex items-start gap-3 
              ${
                activeTab === "other" && item.label === "Customer Information"
                  ? "col-span-full"
                  : ""
              }`}
            >
              {item.icon}
              <div>
                <p className="text-xs text-[#969BA0]">{item.label}</p>
                <p className="text-sm font-medium">{item.value}</p>
              </div>
            </div>
          ))}
          {
            activeTab === 'contacts' &&
            (
              <div className="col-span-full">
                <h1 className="text-xl font-semibold mb-4">Contact Information</h1>
                <Table
                  columns={contactColumn}
                  rows={contactInfoData}
                  loading={loadingContactInfo}
                  onRefresh={handleRefreshContacInfo}
                  showPagination={true}
                  rowsPerPage={4}
                />
              </div>
            )
          }
          {
            activeTab === 'documents' &&
            (
              <div className="col-span-full">
                <h1 className="text-xl font-semibold mb-4">Document Management</h1>
                <Table
                  columns={documentColumn}
                  rows={documentData}
                  loading={loadingDocument}
                  onRefresh={handleRefreshDcuments}
                  showPagination={true}
                  rowsPerPage={3}
                />
              </div>
            )
          }
          {
            activeTab === 'targets' &&
            (
              <div className="col-span-full">
                <h1 className="text-xl font-semibold mb-4">Target Performance</h1>
                <Table
                  columns={targetColumns}
                  rows={targetData}
                  loading={loadingTarget}
                  onRefresh={handleRefreshTargets}
                  showPagination={true}
                  rowsPerPage={4}
                />
              </div>
            )
          }
      </div>
    </div>
  );
}
