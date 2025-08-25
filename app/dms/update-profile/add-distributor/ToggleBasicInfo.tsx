import { useState } from "react";
import { Textarea } from "../../../../components/common/ui/Textarea";
import Input from "../../../../components/common/ui/Input";
import Button from "../../../../components/common/ui/Button";
import { useRouter } from "next/navigation";
import { FaChevronDown } from "react-icons/fa";

export default function ToggleBasicInfo() {
  const [activeTab, setActiveTab] = useState("basic");
  const router = useRouter();

  return (
    <div className="bg-white p-6 rounded-xl shadow-md mt-8">
      {/* 🔹 Tabs Header */}
      <div className="flex w-full bg-[#F8FAFB] rounded-full overflow-hidden text-sm font-medium text-gray-600 mb-4 justify-between">
        <div
          className={`px-6 py-2 cursor-pointer w-[90%] text-center ${
            activeTab === "basic"
              ? "border-2 bg-[#FFFFFF] rounded-full text-black shadow-sm"
              : "hover:text-black"
          }`}
          onClick={() => setActiveTab("basic")}
        >
          Basic Info
        </div>
        <div
          className={`px-6 py-2 cursor-pointer w-[90%] text-center ${
            activeTab === "location"
              ? "border-2 bg-[#FFFFFF] rounded-full text-black shadow-sm"
              : "hover:text-black"
          }`}
          onClick={() => setActiveTab("location")}
        >
          Location
        </div>
        <div
          className={`px-6 py-2 cursor-pointer w-[90%] text-center ${
            activeTab === "additional"
              ? "border-2 bg-[#FFFFFF] rounded-full text-black shadow-sm"
              : "hover:text-black"
          }`}
          onClick={() => setActiveTab("additional")}
        >
          Additional
        </div>
      </div>

      {/* 🔹 Info Cards Grid */}
      <div className="flex flex-col gap-8">
        {activeTab === "basic" && (
          <>
            <div className="space-y-3">
              <div className="flex justify-between">
                <div className="w-[42%]">
                  <label htmlFor="">Distributer Name</label>
                  <Input
                    className="rounded-lg"
                    placeholder="Enter distributer name"
                  />
                </div>
                <div className="w-[42%]">
                  <label htmlFor="">Distributer Name</label>
                  <Input
                    className="rounded-lg"
                    placeholder="Enter distributer name"
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <div className="w-[42%]">
                  <label htmlFor="">Email</label>
                  <Input className="rounded-lg" placeholder="Enter email" />
                </div>
                <div className="w-[42%]">
                  <label htmlFor="">Mobile Number</label>
                  <Input
                    className="rounded-lg"
                    placeholder="Enter mobile number"
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <div className="w-[42%]">
                  <label htmlFor="">Phone Number</label>
                  <Input
                    className="rounded-lg"
                    placeholder="Enter phone number"
                  />
                </div>
                <div className="w-[42%]">
                  <label htmlFor="">GST Number</label>
                  <Input
                    className="rounded-lg"
                    placeholder="Enter GST number"
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <div className="w-[42%]">
                  <label htmlFor="">Description</label>
                  <Textarea
                    className="rounded-lg"
                    placeholder="Enter description"
                  />
                </div>
                <div className="w-[42%]">
                  <label htmlFor="">Address</label>
                  <Textarea
                    className="rounded-lg"
                    placeholder="Enter Address"
                  />
                </div>
              </div>
            </div>
          </>
        )}
        {activeTab === "location" && (
          <>
            <div className="space-y-3">
              <div className="flex justify-between">
                <div className="w-[42%]">
                  <label htmlFor="">Distributer Name</label>
                  <Input
                    className="rounded-lg"
                    placeholder="Enter distributer name"
                    endIcon={<FaChevronDown className="w-5 h-3" />}
                  />
                </div>
                <div className="w-[42%]">
                  <label htmlFor="">Distributer Name</label>
                  <Input
                    className="rounded-lg"
                    placeholder="Enter distributer name"
                    endIcon={<FaChevronDown className="w-5 h-3" />}
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <div className="w-[42%]">
                  <label htmlFor="">Email</label>
                  <Input
                    className="rounded-lg"
                    placeholder="Enter email"
                    endIcon={<FaChevronDown className="w-5 h-3" />}
                  />
                </div>
                <div className="w-[42%]">
                  <label htmlFor="">Mobile Number</label>
                  <Input
                    className="rounded-lg"
                    placeholder="Enter mobile number"
                    endIcon={<FaChevronDown className="w-5 h-3" />}
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <div className="w-[42%]">
                  <label htmlFor="">Phone Number</label>
                  <Input
                    className="rounded-lg"
                    placeholder="Enter phone number"
                    endIcon={<FaChevronDown className="w-5 h-3" />}
                  />
                </div>
                <div className="w-[42%]">
                  <label htmlFor="">GST Number</label>
                  <Input
                    className="rounded-lg"
                    placeholder="Enter GST number"
                    endIcon={<FaChevronDown className="w-5 h-3" />}
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <div className="w-[42%]">
                  <label htmlFor="">Description</label>
                  <Input
                    className="rounded-lg"
                    placeholder="Enter description"
                    endIcon={<FaChevronDown className="w-5 h-3" />}
                  />
                </div>
              </div>
            </div>
          </>
        )}
        {activeTab === "additional" && (
          <>
            <div className="space-y-3">
              <div className="flex justify-between">
                <div className="w-[42%]">
                  <label className="flex" htmlFor="">Customer Field 1 <p className="text-[#969BA0]">(Optional)</p></label>
                  <Input
                    className="rounded-lg"
                    placeholder="Enter customer field 1"
                    endIcon={<FaChevronDown className="w-5 h-3" />}
                  />
                </div>
                <div className="w-[42%]">
                  <label className="flex" htmlFor="">Customer Field 2 <p className="text-[#969BA0]">(Optional)</p></label>
                  <Input
                    className="rounded-lg"
                    placeholder="Enter customer field 2"
                    endIcon={<FaChevronDown className="w-5 h-3" />}
                  />
                </div>
              </div>
              <div className="w-[42%]">
                <label className="flex" htmlFor="">Terms and Condition <p className="text-[#969BA0]">(Optional)</p></label>
                <Textarea className="rounded-lg" placeholder="Enter terms and condition" />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
