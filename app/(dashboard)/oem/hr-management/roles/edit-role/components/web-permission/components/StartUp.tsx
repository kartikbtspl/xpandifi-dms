import React, { useState, useEffect } from 'react';

const customerReports: string[] = [
  "Customer Master",
  "Planned Visit Report",
  "Beat Plan Report",
  "Manage Complaint Type",
  "Visit Deviation Report",
  "Visit Report",
  "Beat Report List",
  "Customer Configuration",
];
const locationReports: string[] = [
  "Tracking Report(map)",
  "User Last Location Report",
  "Tracking Report(list)",
  "Team Last Location Report",
  "Slot Wise Location Report",
];
const hrReports: string[] = [
  "Users",
  "Roles",
  "Add Leave Type",
  "Leave Balance Report",
  "User Activity Log",
  "Company Location",
  "Attendance Report",
  "Monthly Attendance",
  "Holiday List",
  "User Wise Leaves",
  "Leave Approval Report",
  "Attendance Summary",
];
const systemReports: string[] = [
  "Distributor",
  "Route",
  "Renewal Request",
  "Manage Acount",
  "Email Setup",
  "WorkFlow Configuration",
  "Profiles",
];

function StartUp() {
  const [showCustomer, setShowCustomer] = useState<boolean>(false);
  const [showLocation, setShowLocation] = useState<boolean>(false);
  const [showHr, setShowHr] = useState<boolean>(false);
  const [showSystem, setShowSystem] = useState<boolean>(false);

  const [selectedCustomerReports, setSelectedCustomerReports] = useState<string[]>([]);
  const [selectedLocationReports, setSelectedLocationReports] = useState<string[]>([]);
  const [selectedHrReports, setSelectedHrReports] = useState<string[]>([]);
  const [selectedSystemReports, setSelectedSystemReports] = useState<string[]>([]);

  const [customerChecked, setCustomerChecked] = useState<boolean>(false);
  const [locationChecked, setLocationChecked] = useState<boolean>(false);
  const [hrChecked, setHrChecked] = useState<boolean>(false);
  const [systemChecked, setSystemChecked] = useState<boolean>(false);

  const sectionContainerClass = "flex flex-wrap items-center gap-4 mb-2";

  const handleCustomerToggle = () => setShowCustomer(prev => !prev);
  const handleLocationToggle = () => setShowLocation(prev => !prev);
  const handleHrToggle = () => setShowHr(prev => !prev);
  const handleSystemToggle = () => setShowSystem(prev => !prev);

  const handleCustomerCheckbox = () => {
    if (!customerChecked) {
      setSelectedCustomerReports([...customerReports]);
      setShowCustomer(true);
    } else {
      setSelectedCustomerReports([]);
    }
    setCustomerChecked(!customerChecked);
  };

  const handleLocationCheckbox = () => {
    if (!locationChecked) {
      setSelectedLocationReports([...locationReports]);
      setShowLocation(true);
    } else {
      setSelectedLocationReports([]);
    }
    setLocationChecked(!locationChecked);
  };

  const handleHrCheckbox = () => {
    if (!hrChecked) {
      setSelectedHrReports([...hrReports]);
      setShowHr(true);
    } else {
      setSelectedHrReports([]);
    }
    setHrChecked(!hrChecked);
  };

  const handleSystemCheckbox = () => {
    if (!systemChecked) {
      setSelectedSystemReports([...systemReports]);
      setShowSystem(true);
    } else {
      setSelectedSystemReports([]);
    }
    setSystemChecked(!systemChecked);
  };

  const handleCustomerReportCheck = (report: string) => {
    setSelectedCustomerReports(prev =>
      prev.includes(report) ? prev.filter(r => r !== report) : [...prev, report]
    );
  };

  const handleLocationReportCheck = (report: string) => {
    setSelectedLocationReports(prev =>
      prev.includes(report) ? prev.filter(r => r !== report) : [...prev, report]
    );
  };

  const handleHrReportCheck = (report: string) => {
    setSelectedHrReports(prev =>
      prev.includes(report) ? prev.filter(r => r !== report) : [...prev, report]
    );
  };

  const handleSystemReportCheck = (report: string) => {
    setSelectedSystemReports(prev =>
      prev.includes(report) ? prev.filter(r => r !== report) : [...prev, report]
    );
  };

  useEffect(() => {
    setCustomerChecked(selectedCustomerReports.length === customerReports.length);
  }, [selectedCustomerReports]);

  useEffect(() => {
    setLocationChecked(selectedLocationReports.length === locationReports.length);
  }, [selectedLocationReports]);

  useEffect(() => {
    setHrChecked(selectedHrReports.length === hrReports.length);
  }, [selectedHrReports]);

  useEffect(() => {
    setSystemChecked(selectedSystemReports.length === systemReports.length);
  }, [selectedSystemReports]);

  const cellBorders = "border-gray-200 border-r";

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 max-w-full overflow-x-auto">
      {/* Customer Section */}
      <div className={sectionContainerClass}>
        <input
          type="checkbox"
          id="customer"
          checked={customerChecked}
          onChange={handleCustomerCheckbox}
          className="flex-shrink-0"
        />
        <button
          className="cursor-pointer text-left whitespace-nowrap"
          onClick={handleCustomerToggle}
        >
          Customer
        </button>
      </div>
      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${
          showCustomer ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 mb-6 table-auto">
            <thead>
              <tr className="border-b border-gray-200">
                <th className={`text-center p-2 w-1/10 ${cellBorders}`}>Select</th>
                <th className="text-left p-2">Name</th>
              </tr>
            </thead>
            <tbody>
              {customerReports.map((report) => (
                <tr key={report} className="border-t border-gray-200">
                  <td className={`${cellBorders} text-center p-2`}>
                    <input
                      type="checkbox"
                      checked={selectedCustomerReports.includes(report)}
                      onChange={() => handleCustomerReportCheck(report)}
                    />
                  </td>
                  <td className="p-2 whitespace-normal">{report}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Location Section */}
      <div className={sectionContainerClass}>
        <input
          type="checkbox"
          id="location"
          checked={locationChecked}
          onChange={handleLocationCheckbox}
          className="flex-shrink-0"
        />
        <button
          className="cursor-pointer text-left whitespace-nowrap"
          onClick={handleLocationToggle}
        >
          Location
        </button>
      </div>
      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${
          showLocation ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 table-auto mb-6">
            <thead>
              <tr className="border-b border-gray-200">
                <th className={`text-center p-2 w-1/10 ${cellBorders}`}>Select</th>
                <th className="text-left p-2">Name</th>
              </tr>
            </thead>
            <tbody>
              {locationReports.map((report) => (
                <tr key={report} className="border-t border-gray-200">
                  <td className={`${cellBorders} text-center p-2`}>
                    <input
                      type="checkbox"
                      checked={selectedLocationReports.includes(report)}
                      onChange={() => handleLocationReportCheck(report)}
                    />
                  </td>
                  <td className="p-2 whitespace-normal">{report}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* HR Section */}
      <div className={sectionContainerClass}>
        <input
          type="checkbox"
          id="hr"
          checked={hrChecked}
          onChange={handleHrCheckbox}
          className="flex-shrink-0"
        />
        <button
          className="cursor-pointer text-left whitespace-nowrap"
          onClick={handleHrToggle}
        >
          HR
        </button>
      </div>
      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${
          showHr ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 table-auto mb-6">
            <thead>
              <tr className="border-b border-gray-200">
                <th className={`text-center p-2 w-1/10 ${cellBorders}`}>Select</th>
                <th className="text-left p-2">Name</th>
              </tr>
            </thead>
            <tbody>
              {hrReports.map((report) => (
                <tr key={report} className="border-t border-gray-200">
                  <td className={`${cellBorders} text-center p-2`}>
                    <input
                      type="checkbox"
                      checked={selectedHrReports.includes(report)}
                      onChange={() => handleHrReportCheck(report)}
                    />
                  </td>
                  <td className="p-2 whitespace-normal">{report}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* System Section */}
      <div className={sectionContainerClass}>
        <input
          type="checkbox"
          id="system"
          checked={systemChecked}
          onChange={handleSystemCheckbox}
          className="flex-shrink-0"
        />
        <button
          className="cursor-pointer text-left whitespace-nowrap"
          onClick={handleSystemToggle}
        >
          System
        </button>
      </div>
      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${
          showSystem ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 table-auto">
            <thead>
              <tr className="border-b border-gray-200">
                <th className={`text-center p-2 w-1/10 ${cellBorders}`}>Select</th>
                <th className="text-left p-2">Name</th>
              </tr>
            </thead>
            <tbody>
              {systemReports.map((report) => (
                <tr key={report} className="border-t border-gray-200">
                  <td className={`${cellBorders} text-center p-2`}>
                    <input
                      type="checkbox"
                      checked={selectedSystemReports.includes(report)}
                      onChange={() => handleSystemReportCheck(report)}
                    />
                  </td>
                  <td className="p-2 whitespace-normal">{report}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default StartUp;
