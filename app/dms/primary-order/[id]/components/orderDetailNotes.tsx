"use client"
import { useState } from "react"
import { FaBuilding, FaHashtag, FaCalendarAlt, FaUser } from "react-icons/fa";

export default function OrderDetailNotes(){

    const [orderDetailData, setOrderDetailData] = useState([
        {icon : <FaBuilding className="text-blue-600" />, title : "Distributor Name", value : "Teamspring"},
        {icon : <FaCalendarAlt className="text-blue-600" />, title : "Order Date", value : "Teamspring"},
        {icon : <FaHashtag className="text-blue-600" />, title : "Order Number", value : "Teamspring"},
        {icon : <FaUser className="text-blue-600" />, title : "Created by", value : "Teamspring"},
    ])

    return (
        <div className="p-6 bg-white rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Primary Order Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {orderDetailData.map((item, index) => (
          <div key={index} className="flex items-start bg-gray-50 p-4 rounded-lg">
            <div className="text-2xl mr-3">{item.icon}</div>
            <div>
              <p className="text-sm text-gray-500">{item.title}</p>
              <p className="font-semibold">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    )
}