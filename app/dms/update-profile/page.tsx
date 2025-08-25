"use client"
import ToggleDistributors from "./components/ToggleDistributors";

export default function UpdateProfile() {
  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-3xl font-bold mb-4">Edit Distributor</h1>
        <p className="text-[#969BA0]">Edit your distributer details</p>
      </div>
      <div>
        <ToggleDistributors />
      </div>
    </div>
  );
}
