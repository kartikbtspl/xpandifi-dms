"use client";
import SalesOrderDetails from "./components/SalesOrderDetails";
import Button from "../../../../components/common/ui/Button";
import Input from "../../../../components/common/ui/Input";
import { FaSearch, FaTruck } from "react-icons/fa";
import { useState } from "react";
import Table from "../../../../components/common/table/Table";
import getOrderListColumns from "./components/orderListColumn";

export default function AddProducts() {
  const [loadingOrderList, setLoadingOrderList] = useState(false);
  const [activeTab, setActiveTab] = useState("All");

  const [listColumnData, setListColumnData] = useState([
    {
      id: 1,
      srNo: "01",
      productName: "Mineral Water",
      sku: "MW-1001",
      hsnCode: "HSN001001",
      rate: 12.5,
      taxPercentage: 18,
      quantity: 0,
      category: "Beverage", // ✅ added category
      amount: "₹300.00",
      tax: "₹54.00",
      total: "₹354.00",
    },
    {
      id: 2,
      srNo: "02",
      productName: "Green Paint",
      sku: "GP-2001",
      hsnCode: "HSN002001",
      rate: 40,
      taxPercentage: 18,
      quantity: 0,
      category: "Green Color", // ✅ added category
      amount: "₹400.00",
      tax: "₹72.00",
      total: "₹472.00",
    },
    {
      id: 3,
      srNo: "03",
      productName: "Agro Fertilizer",
      sku: "AF-3147",
      hsnCode: "HSN003147",
      rate: 100,
      taxPercentage: 18,
      quantity: 0,
      category: "Agro Chemicals", // ✅ added category
      amount: "₹1000.00",
      tax: "₹180.00",
      total: "₹1180.00",
    },
    {
      id: 4,
      srNo: "04",
      productName: "Agro Fertilizer",
      sku: "AF-3147",
      hsnCode: "HSN003147",
      rate: 100,
      taxPercentage: 18,
      quantity: 0,
      category: "Agro Chemicals", // ✅ added category
      amount: "₹1000.00",
      tax: "₹180.00",
      total: "₹1180.00",
    },
    {
      id: 5,
      srNo: "05",
      productName: "Agro Fertilizer",
      sku: "AF-3147",
      hsnCode: "HSN003147",
      rate: 100,
      taxPercentage: 18,
      quantity: 0,
      category: "Agro Chemicals", // ✅ added category
      amount: "₹1000.00",
      tax: "₹180.00",
      total: "₹1180.00",
    },
    {
      id: 6,
      srNo: "06",
      productName: "Agro Fertilizer",
      sku: "AF-3147",
      hsnCode: "HSN003147",
      rate: 100,
      taxPercentage: 18,
      quantity: 0,
      category: "Agro Chemicals", // ✅ added category
      amount: "₹1000.00",
      tax: "₹180.00",
      total: "₹1180.00",
    },
    {
      id: 7,
      srNo: "07",
      productName: "Agro Fertilizer",
      sku: "AF-3147",
      hsnCode: "HSN003147",
      rate: 100,
      taxPercentage: 18,
      quantity: 0,
      category: "Agro Chemicals", // ✅ added category
      amount: "₹1000.00",
      tax: "₹180.00",
      total: "₹1180.00",
    },
    {
      id: 8,
      srNo: "08",
      productName: "Agro Fertilizer",
      sku: "AF-3147",
      hsnCode: "HSN003147",
      rate: 100,
      taxPercentage: 18,
      quantity: 0,
      category: "Agro Chemicals", // ✅ added category
      amount: "₹1000.00",
      tax: "₹180.00",
      total: "₹1180.00",
    },
  ]);

  const getListColumns = getOrderListColumns();

  const handleOrderListRefresh = () => {
    setLoadingOrderList(true);
    setTimeout(() => setLoadingOrderList(false), 1000);
  };

  // ✅ Filter rows based on activeTab
  const filteredData =
    activeTab === "All"
      ? listColumnData
      : listColumnData.filter((row) => row.category === activeTab);

  return (
    <div className="flex flex-wrap flex-col w-full justify-between">
      <div className="mb-4">
        <Button variant="outline" onClick={() => history.back()}>
          {" "}
          &lt; Back{" "}
        </Button>
      </div>

      <div className="mb-4">
        <SalesOrderDetails />
      </div>

      {/* Tabs */}

      <div className="flex items-center bg-white p-3 rounded-lg shadow-sm gap-4 mb-4 h-14">
        <h1 className="text-xl font-semibold">Primary Order List</h1>
      </div>
      <div className="flex gap-6 pb-2 p-2 mb-4">
        {["All", "Beverage", "Green Color", "3147", "Agro Chemicals"].map(
          (tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 text-sm text-[#718EBF] font-medium ${
                activeTab === tab
                  ? "border-b-2 border-blue-500 text-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab}
            </button>
          )
        )}
      </div>
      {/* ✅ Condition below Primary Order */}
      {activeTab === "Beverage" && (
        <div className="mt-3 bg-yellow-50 border border-yellow-200 text-yellow-700 text-sm p-3 mb-4 rounded-md">
          Showing Beverage products only
        </div>
      )}
      {activeTab === "Green Color" && (
        <div className="mt-3 bg-green-50 border border-green-200 text-green-700 text-sm p-3 mb-4 rounded-md">
          green color category selected
        </div>
      )}
      {activeTab === "3147" && (
        <div className="mt-3 bg-green-50 border border-green-200 text-green-700 text-sm p-3 mb-4 rounded-md">
          3147 category selected
        </div>
      )}
      {activeTab === "Agro Chemicals" && (
        <div className="mt-3 bg-green-50 border border-green-200 text-green-700 text-sm p-3 mb-4 rounded-md">
          Agro Chemicals category selected
        </div>
      )}

      {activeTab === "All" && (
        <div className="mb-4">
          <Table
            columns={getListColumns}
            loading={loadingOrderList}
            onRefresh={handleOrderListRefresh}
            showPagination={true}
            rowsPerPage={4}
            rows={filteredData} // ✅ now filters by tab
            filterKey="srNo"
          />
        </div>
      )}

      {/* Table */}

      {/* Bottom Summary Sections */}
      <div className="flex flex-col md:flex-row gap-6 w-full ">
        {/* Left Section - Order Summary */}
        <div className="bg-white rounded-lg shadow p-3 w-full md:w-[60%]">
          <h2 className="text-base font-semibold mb-4">Order Summary</h2>
          <div className="space-y-2 text-sm text-gray-700">
            <div className="flex justify-between">
              <span>Total Products:</span>
              <span>4 items</span>
            </div>
            <hr />
            <div className="flex justify-between">
              <span>Total Quantity:</span>
              <span>110 units</span>
            </div>
            <div className="flex justify-between">
              <span>Discount %:</span>
              <span>5%</span>
            </div>
            <div className="flex justify-between">
              <span>Discount Value:</span>
              <span>₹81.05</span>
            </div>
            <div className="flex justify-between">
              <span>Payment Terms:</span>
              <span>Net 30 Days</span>
            </div>
          </div>

          {/* Tax Summary Box */}
          <div className="mt-4 border rounded-lg bg-[#F6F6F6] p-4 text-sm">
            <h3 className="font-medium mb-3">Tax Summary</h3>
            <div className="flex justify-between mb-2">
              <span>Subtotal (Taxable Value):</span>
              <span>₹1620.90</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Total CGST (9%):</span>
              <span>₹145.88</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Total SGST (9%):</span>
              <span>₹145.88</span>
            </div>
            <hr />
            <div className="flex justify-between font-medium">
              <span>Total Tax Amount:</span>
              <span>₹291.76</span>
            </div>
          </div>

          <div className="mt-4 flex justify-between items-center text-base font-semibold">
            <span>Grand Total:</span>
            <div className="flex flex-col flex-wrap">
              <span className="text-blue-600 text-lg ml-auto">₹1912.6</span>
              <p className="text-xs text-gray-500">(Inclusive of all taxes)</p>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-md px-4 py-2 text-[#E4EDFF] text-sm">
            <div className="flex items-center text-sm text-gray-600 mt-2">
              <FaTruck className="text-blue-600 mr-2" size={18} />
              Item will be shipped in next 10 days
            </div>
          </div>
        </div>

        {/* Right Section - Order Note */}
        <div className="bg-white rounded-lg shadow p-3 w-full md:w-[40%] h-[40%]">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Order Note <span className="text-gray-400">(Optional)</span>
          </label>
          <textarea
            placeholder="Add any special instructions or notes for this order"
            rows={6}
            className="w-full border outline-none rounded-lg p-2 text-sm  "
          />
        </div>
      </div>
      <div className="flex justify-end gap-3 bg-[#FFFFFF] h-14 items-center">
        <Button
          rounded="full"
          className="bg-[#3B5998]  text-white px-6 py-2 hover:bg-[#334d84]"
        >
          Submit
        </Button>

        <Button
          rounded="full"
          variant="outline"
          className="border border-[#E06371] text-[#E06371] px-6 py-2 hover:bg-[#ffe5e8]"
        >
          Reset
        </Button>
      </div>
    </div>
  );
}
