// pages/customer/[id].tsx
"use client";
import { useParams } from "next/navigation";
import SearchFilters from "../components/SearchFilters";
import CustomerCoverageDashboard from "../components/CustomerCoverageDashboard";
import Button from "../../../../components/common/ui/Button";
import { useState } from "react";
import { title } from "process";
import StickyNotesData from "./components/Sticky";
import {FaStore, FaTag, FaUserCheck, FaEnvelope, FaPhone, FaMapMarkerAlt} from "react-icons/fa";
import BarChartCard from "./components/chartcard";
import ToggleComp from "./components/toggleComp";
import Cards from "./components/cards";
import {FaChartLine,FaShoppingCart,FaFileInvoice,FaExclamationTriangle,FaMoneyCheckAlt,} from "react-icons/fa";
import Table from "../../../../components/common/table/Table";
import getStockColumns from "./components/getStockDetails"
// import other detail components (SalesOrdersChart, InfoCards, StockTable, etc.)

export default function CustomerDetail() {
  const { id } = useParams();

  const [stickyData, setStickyData] = useState([
  {icon : <FaStore className="text-blue-500" />, title : "Store type", status : 'C'},
  {icon : <FaTag className="text-blue-500" />, title : "Type", status : 'Class Type'},
  {icon : <FaUserCheck className="text-blue-500" />, title : "Customer type", status : 'Confirmed'},
  {icon : <FaEnvelope className="text-blue-500" />, title : "Email", status : 'Not Provided'},
  {icon : <FaPhone className="text-blue-500" />, title : "Mobile", status : '999999999'},
  {icon : <FaMapMarkerAlt className="text-blue-500" />, title : "Route", status : 'Chinchwad'},
  {icon : <FaMapMarkerAlt className="text-blue-500" />, title : "Address", status : 'At and Railway station road, Doctor number 53, Sector number 27,Pradhikaran, Nigdi,Pune-chinchwad,Maharashtra, India'},
  
  ])
  // fetch customer detail by id…

  const [stockData, setStockData] = useState([
    {
      id : 1,
      srNo : "01",
      productName : "simple product A",
      pack : "10 x 1",
      openingStock : '100',
      consumedStock : "25",
      closingStock : "75",
      status : "In stock"
    },
    {
      id : 2,
      srNo : "02",
      productName : "simple product B",
      pack : "10 x 1",
      openingStock : '100',
      consumedStock : "25",
      closingStock : "75",
      status : "In stock"
    },
    {
      id : 3,
      srNo : "03",
      productName : "simple product C",
      pack : "10 x 1",
      openingStock : '100',
      consumedStock : "25",
      closingStock : "75",
      status : "In stock"
    },
    {
      id : 4,
      srNo : "04",
      productName : "simple product D",
      pack : "10 x 1",
      openingStock : '100',
      consumedStock : "25",
      closingStock : "75",
      status : "In stock"
    },
    {
      id : 5,
      srNo : "05",
      productName : "simple product A",
      pack : "10 x 1",
      openingStock : '100',
      consumedStock : "25",
      closingStock : "75",
      status : "In stock"
    },
    {
      id : 6,
      srNo : "06",
      productName : "simple product B",
      pack : "10 x 1",
      openingStock : '100',
      consumedStock : "25",
      closingStock : "75",
      status : "In stock"
    },
    {
      id : 7,
      srNo : "07",
      productName : "simple product C",
      pack : "10 x 1",
      openingStock : '100',
      consumedStock : "25",
      closingStock : "75",
      status : "In stock"
    },
    {
      id : 8,
      srNo : "08",
      productName : "simple product D",
      pack : "10 x 1",
      openingStock : '100',
      consumedStock : "25",
      closingStock : "75",
      status : "In stock"
    }
  ])

  const stockColumns = getStockColumns();

  const salesOrdersData = [
  { name: "Jan", value: 80000 },
  { name: "Feb", value: 15000 },
  { name: "Mar", value: 140000 },
  { name: "Apr", value: 65000 },
  { name: "May", value: 100000 },
  { name: "Jun", value: 65000 },
];

const salesVisitData = [
  { name: "Jan", value: 80000 },
  { name: "Feb", value: 15000 },
  { name: "Mar", value: 140000 },
  { name: "Apr", value: 65000 },
  { name: "May", value: 100000 },
  { name: "Jun", value: 65000 },
];

const summaryData = [
    {
      title: "Visits",
      icon: <FaChartLine />,
      mtd: "11,00,000",
      ytd: "15,000",
    },
    {
      title: "Orders",
      icon: <FaShoppingCart />,
      mtd: "11,00,000",
      ytd: "15,000",
    },
    {
      title: "Invoices",
      icon: <FaFileInvoice />,
      mtd: "11,00,000",
      ytd: "15,000",
    },
    {
      title: "Complaints",
      icon: <FaExclamationTriangle />,
      mtd: "11,00,000",
      ytd: "15,000",
    },
    {
      title: "Invoice Payments",
      icon: <FaMoneyCheckAlt />,
      mtd: "11,00,000",
      ytd: "15,000",
    },
  ];

  const [loadingStock, setLoadingStock] = useState(false);

  const handleRefreshStock = () => {
    setLoadingStock(true);
    setTimeout(() => {
      setLoadingStock(false)
      setStockData(stockData)
    }, 1000);
  };

  return (
    <div className="space-y-6">
      <button
        onClick={() => history.back()}
        className="text-blue-600 hover:underline"
      >
        ← Back
      </button>

      <div className="bg-white p-8 rounded-lg shadow-sm">
        <div className="flex justify-between mb-4 items-center">
          <div className="flex w-[20%] justify-between">
            <div className="w-16 h-16 bg-transparent bg-indigo-100 rounded-full flex items-center justify-center text-sky-800 font-bold" >
              BE
            </div>
            <div className="flex flex-col">
              <h1 className=" font-bold">Bajaj Enterprises</h1>
              <p>Customer Id: #12345</p>
            </div>
          </div>
          <div>
            <Button variant= "outline">view graph</Button>
          </div>
        </div>
        <div className="flex flex-wrap justify-between h-[40vh]">
        {
          stickyData.map((data, index) => (
            <StickyNotesData key={index} fullWidth={data.title === 'Address'}>
              <div className="flex items-center gap-2 w-full">
                <div className="mr-3 text-lg">{data.icon}</div>
                <div>
                  <p className="text-sm text-gray-500">{data.title}</p>
                  <p className="font-medium">{data.status}</p>
                </div>
              </div>
            </StickyNotesData>
          ))
        }
        </div>
      </div>
      <div className=" bg-gray-100 w-full">
        <div className="w-full flex flex-wrap justify-between ">
          <BarChartCard title="Sales Orders" data={salesOrdersData} barColor="#64748B" />
          <BarChartCard title="Sales Visit" data={salesVisitData} barColor="#16A34A" />
        </div>
      </div>
      
      <ToggleComp />

      <div className="">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {summaryData.map((item, index) => (
          <Cards key={index} title={item.title} icon={item.icon} mtd={item.mtd} ytd={item.ytd} />
        ))}
      </div>
    </div>

    <h1 className="font-bold text-2xl">Stock statements</h1>
    <Table columns={stockColumns} rows={stockData} showPagination={true} rowsPerPage={4} loading={loadingStock} onRefresh={handleRefreshStock}  />

      {/* <SearchFilters />
      <CustomerCoverageDashboard /> */}

      {/* Render sales orders & visits charts, info cards, target details, stock statement */}
    </div>
  );
}
