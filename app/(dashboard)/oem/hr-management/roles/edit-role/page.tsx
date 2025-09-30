"use client";

import React from "react";
import Breadcrumb from "@/components/common/ui/BreadCrumb";
import EditRoleForm from "./components/EditRoleForm";
import PermissionTabs from "./components/PermissionTabs";

const EditRole = () => {
  return (
    <div className="space-y-4">
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem/dashboard" },
          { label: "HR Management", isClickable: false },
          { label: "Role", href: "/oem/hr-management/roles" },
        ]}
      />
      <h1 className="text-3xl font-semibold text-[#445E94]">Role</h1>
      <EditRoleForm />
      <PermissionTabs />

    </div>
  );
};

export default EditRole;
