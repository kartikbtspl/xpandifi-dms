// components/SalesOrderDetails.tsx
"use client";
import {
  FaUser,
  FaWarehouse,
  FaFileAlt,
  FaCalendarAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const SalesOrderDetails = () => {
  const items = [
    {
      label: "Bill to Party",
      value: "ABC Distribution Co.",
      icon: <FaUser className="text-blue-600" />,
    },
    {
      label: "Ship to Party",
      value: "Regional Warehouse - Mumbai",
      icon: <FaWarehouse className="text-blue-600" />,
    },
    {
      label: "Sales Order Number",
      value: "PO-202380401",
      icon: <FaFileAlt className="text-blue-600" />,
    },
    {
      label: "Sales Order Date",
      value: "Aug 4, 2023",
      icon: <FaCalendarAlt className="text-blue-600" />,
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-start space-x-3 bg-gray-50 p-4 rounded-md"
          >
            <div className="text-lg">{item.icon}</div>
            <div>
              <p className="text-sm text-gray-500">{item.label}</p>
              <p className="font-semibold">{item.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Shipping Address */}
      <div className="flex items-start space-x-3 bg-gray-50 p-4 rounded-md">
        <div className="text-lg text-blue-600">
          <FaMapMarkerAlt />
        </div>
        <div>
          <p className="text-sm text-gray-500">Shipping Address</p>
          <p className="font-medium">
            Building 42, Industrial Estate Andheri East, Mumbai - 400069 Maharashtra, India
          </p>
        </div>
      </div>
    </div>
  );
};

export default SalesOrderDetails;
