"use client";

import React from "react";
import { useSearchParams } from "next/navigation";

function Note() {
  const searchParams = useSearchParams();
  const roleName = searchParams.get("roleName");

  return (
    <div className="p-6 bg-white rounded-md shadow-sm">
      <p className="text-gray-800 text-lg">
        Select Web Permission For <strong>{roleName}</strong>
      </p>
    </div>
  );
}

export default Note;
