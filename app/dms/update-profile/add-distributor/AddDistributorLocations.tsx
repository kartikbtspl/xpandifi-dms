"use client";
import { useState } from "react";
import Input from "../../../../components/common/ui/Input";
import { FaChevronDown } from "react-icons/fa";
import getDistributorLocationColumns from "./distributorLocationColumn";
import Table from "../../../../components/common/table/Table";

export default function AddDistributorLocation() {
  const [locationColumnData, setLocationColumnData] = useState([
    {
      id: 1,
    },
  ]);
  const [loadingLocationColumn, setLoadingLocationColumn] = useState(false);
  const locationColumn = getDistributorLocationColumns();

  const handleDistributorLocationRefresh = () => {
    setLoadingLocationColumn(true);
    setTimeout(() => setLoadingLocationColumn(false), 1000);
  };
  return (
    <div className="bg-white p-3 rounded-xl shadow-md space-y-6">
      {/* Row 1 */}
      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="locationName">Location Name</label>
          <Input
            id="locationName"
            className="rounded-lg"
            placeholder="Enter location"
            endIcon={<FaChevronDown className="w-5 h-3" />}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="officeLocation">Office Location</label>
          <Input
            id="officeLocation"
            className="rounded-lg"
            placeholder="Enter office location"
            endIcon={<FaChevronDown className="w-5 h-3" />}
          />
        </div>
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="locationCode">Location Code</label>
          <Input
            id="locationCode"
            className="rounded-lg"
            placeholder="Enter location code"
            endIcon={<FaChevronDown className="w-5 h-3" />}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="address">Address</label>
          <Input
            id="address"
            className="rounded-lg"
            placeholder="Enter address"
            endIcon={<FaChevronDown className="w-5 h-3" />}
          />
        </div>
      </div>

      {/* Row 3 - Lat/Long */}
      <div className="space-y-2">
        <label>Lat-Long</label>
        <div className="flex gap-4">
          <Input className="rounded-lg text-center w-1/2" placeholder="Lat" />
          <Input className="rounded-lg text-center w-1/2" placeholder="Long" />
        </div>
      </div>

      {/* Table */}
      <div className="space-y-3">
        <h1 className="text-2xl font-semibold">Distributor Location List</h1>
        <Table
          columns={locationColumn}
          rows={locationColumnData}
          onRefresh={handleDistributorLocationRefresh}
          loading={loadingLocationColumn}
        />
      </div>
    </div>
  );
}
