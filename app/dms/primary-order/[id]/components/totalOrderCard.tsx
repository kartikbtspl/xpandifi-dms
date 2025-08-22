// components/TotalOrderCard.tsx
"use client";
import { FaRupeeSign, FaChartLine } from "react-icons/fa";

const TotalOrderCard = () => {
  return (
    <div className="flex justify-between items-center bg-blue-50 border border-blue-200 rounded-xl p-6 w-full max-w-8xl mx-auto">
      {/* Left Section */}
      <div className="flex items-start space-x-4">
        <div className="bg-blue-100 text-blue-600 p-3 rounded-full text-2xl">
          <FaRupeeSign />
        </div>
        <div>
          <p className="text-sm text-gray-600 font-medium">Total Order Amount</p>
          <p className="text-2xl font-bold mt-1">₹2,45,67,890</p>
          <p className="text-xs text-gray-400 mt-1">6 items</p>
        </div>
      </div>

      {/* Right Tag */}
      <div className="flex items-center bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
        <FaChartLine className="mr-2" />
        Order Total
      </div>
    </div>
  );
};

export default TotalOrderCard;
