import { useState } from "react";
import { Textarea } from "../../../../components/common/ui/Textarea";
import Input from "../../../../components/common/ui/Input";
import Button from "../../../../components/common/ui/Button";
import { useRouter } from "next/navigation";

export default function ToggleDistributers() {
  const [activeTab, setActiveTab] = useState("personal");
  const router = useRouter();


  return (
    <div className="bg-white p-6 rounded-xl shadow-md mt-8">
      {/* 🔹 Tabs Header */}
      <div className="flex w-full bg-[#F8FAFB] rounded-full overflow-hidden text-sm font-medium text-gray-600 mb-4 justify-between">
        <div
          className={`px-6 py-2 cursor-pointer w-[90%] text-center ${
            activeTab === "personal"
              ? "border-2 bg-[#FFFFFF] rounded-full text-black shadow-sm"
              : "hover:text-black"
          }`}
          onClick={() => setActiveTab("personal")}
        >
          Personal Info
        </div>
        <div
          className={`px-6 py-2 cursor-pointer w-[90%] text-center ${
            activeTab === "customers"
              ? "border-2 bg-[#FFFFFF] rounded-full text-black shadow-sm"
              : "hover:text-black"
          }`}
          onClick={() => setActiveTab("customers")}
        >
          Customers
        </div>
        <div
          className={`px-6 py-2 cursor-pointer w-[90%] text-center ${
            activeTab === "product"
              ? "border-2 bg-[#FFFFFF] rounded-full text-black shadow-sm"
              : "hover:text-black"
          }`}
          onClick={() => setActiveTab("product")}
        >
          Products
        </div>
      </div>

      {/* 🔹 Info Cards Grid */}
      <div className="flex flex-col gap-8">
        {activeTab === "personal" && (
          <>
            <div className="flex justify-between">
              <div className="w-[48%] space-y-4">
                <div>
                  <label htmlFor="">Email</label>
                  <Input placeholder="Enter email address" className="rounded-lg" />
                </div>
                <div>
                  <label htmlFor="">Name</label>
                  <Input placeholder="Enter Name" className="rounded-lg" />
                </div>
              </div>
              <div className="w-[48%]">
                <label htmlFor="">Description</label>
                <Textarea placeholder="Enter description" className="rounded-lg" />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="w-[48%]">
                <div>
                  <label htmlFor="">Distributer code</label>
                  <Input placeholder="Enter code" className="rounded-lg" />
                </div>
              </div>
              <div className="w-[48%]">
                <label htmlFor="">Address</label>
                <Textarea placeholder="Enter address" className="rounded-lg" />
              </div>
            </div>
          </>
        )}
        {activeTab === "customers" && (
          <>
            <div className="flex flex-col gap-4">
              <div className="flex flex-row justify-between">
                <div className="w-[48%]">
                  <label htmlFor="">Country</label>
                  <Input placeholder="Enter country" className="rounded-lg" />
                </div>
                <div className="w-[48%]">
                  <label htmlFor="">Status</label>
                  <Input placeholder="Enter status" className="rounded-lg" />
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <div className="w-[48%]">
                  <label htmlFor="">State</label>
                  <Input placeholder="Enter state" className="rounded-lg" />
                </div>
                <div className="w-[48%]">
                  <label htmlFor="">Mobile Number</label>
                  <Input placeholder="Enter Mobile" className="rounded-lg" />
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <div className="w-[48%]">
                  <label htmlFor="">City</label>
                  <Input placeholder="Enter city" className="rounded-lg" />
                </div>
                <div className="w-[48%]">
                  <label htmlFor="">Phone Number</label>
                  <Input placeholder="Enter phone" className="rounded-lg" />
                </div>
              </div>
            </div>
          </>
        )}
        {activeTab === "product" && (
          <>
            <div className="flex justify-between">
              <div className="w-[48%] space-y-4">
                <div>
                  <label htmlFor="">GST number</label>
                  <Input placeholder="Enter GST number" className="rounded-lg" />
                </div>
                <div>
                  <label htmlFor="">Customer Field 1</label>
                  <Input placeholder="Enter customer Field 1" className="rounded-lg" />
                </div>
              </div>
              <div className="w-[48%]">
                <label htmlFor="">Terms and Condition</label>
                <Textarea placeholder="Enter terms and conditions" className="rounded-lg" />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="w-[48%]">
                <div>
                  <label htmlFor="">Customer Field 2</label>
                  <Input placeholder="Enter customer Field 2" className="rounded-lg" />
                </div>
              </div>
              <div className="w-[48%]">
                <label htmlFor="">Custome discount %</label>
                <Textarea placeholder="Enter custome discount %" className="rounded-lg" />
              </div>
            </div>
          </>
        )}
        <div>
          <hr />
        </div>
        <div className="flex w-full  justify-end space-x-2">
          <Button>Save</Button>
          <Button variant="outline" className="text-[#E06371] border-[#E06371]">
            Cancel
          </Button>
          <Button className="bg-[#19182F]" onClick={() => router.push('/dms/update-profile/send-credentials/')}>Send Credentials</Button>
        </div>
      </div>
    </div>
  );
}
