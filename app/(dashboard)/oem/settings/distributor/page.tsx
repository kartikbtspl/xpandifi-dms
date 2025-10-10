"use client"
import Breadcrumb from "@/components/common/ui/BreadCrumb";
import ToggleDistributors from "./components/ToggleDistributors";

export default function UpdateProfile() {
  return (
    <div className="space-y-4">
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem/dashboard" },
          { label: "Settings", isClickable: false },
          { label: "Distributor", href: "/oem/settings/distributor" },
        ]}
      />
      <div>
        <h1 className="text-3xl font-semibold text-[#445E94]">Distributor</h1>
      </div>
      <div>
        <ToggleDistributors />
      </div>
    </div>
  );
}
