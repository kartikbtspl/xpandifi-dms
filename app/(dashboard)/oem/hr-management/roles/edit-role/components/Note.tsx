"use client";

import React from "react";
import { useSearchParams } from "next/navigation";

function Note() {
  const searchParams = useSearchParams();
  const roleName = searchParams.get("roleName");

  return (
    <div className="px-6">
      <p className="text-gray-800">
        Select Web Permission For <strong>{roleName}</strong>
      </p>
    </div>
  );
}

export default Note;
