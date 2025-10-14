
import React, { Suspense } from "react";
import Breadcrumb from "@/components/common/ui/BreadCrumb";
import EditProfilesClient from "./components/EditProfilesClient";

export default function EditProfiles() {
  return (
    <div className='space-y-4'>
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem/dashboard" },
          { label: "Settings", isClickable: false },
          { label: "Profiles", href: "/oem/settings/profiles" },
        ]}
      />
      <h1 className="text-3xl font-semibold text-[#445E94]">Profiles</h1>
      <Suspense fallback={null}>
        <EditProfilesClient />
      </Suspense>
    </div>
  );
}
