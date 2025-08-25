"use client";
import Input from "../../../../components/common/ui/Input";
import { FaChevronDown } from "react-icons/fa";

export default function AddDistributorLocation() {
  return (
    <div>
      <div className="space-y-3 bg-white p-3 rounded-xl shadow-md mt-8">
        <div className="flex justify-between">
          <div className=" space-y-2">
            <label className="flex" htmlFor="">
              Location Name
            </label>
            <Input
              className="rounded-lg"
              placeholder="Enter location"
              endIcon={<FaChevronDown className="w-5 h-3" />}
            />
          </div>
          <div className="w-[42%] space-y-2">
            <label className="flex" htmlFor="">
              Office Location
            </label>
            <Input
              className="rounded-lg"
              placeholder="Enter office location"
              endIcon={<FaChevronDown className="w-5 h-3" />}
            />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="w-[42%] space-y-2">
            <label className="flex" htmlFor="">
              Location Code
            </label>
            <Input
              className="rounded-lg"
              placeholder="Enter location code"
              endIcon={<FaChevronDown className="w-5 h-3" />}
            />
          </div>
          <div className="w-[42%] space-y-2">
            <label className="flex" htmlFor="">
                Address
            </label>
            <Input
              className="rounded-lg"
              placeholder="Enter address"
              endIcon={<FaChevronDown className="w-5 h-3" />}
            />
          </div>
        </div>
        <div className="w-[42%] space-y-2">
          <label className="flex" htmlFor="">
            Lat-Long
          </label>
          <div className="flex w-[80%] justify-between rounded-lg">
            <Input className="rounded-lg text-center w-[60%]" placeholder="Lat"/>
            <Input className="rounded-lg text-center w-[60%]" placeholder="Long"/>
          </div>
        </div>
      </div>
    </div>
  );
}
