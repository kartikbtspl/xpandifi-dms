"use client";
import Button from "@/components/common/ui/Button";
import { useState } from "react";
import { FiUpload } from "react-icons/fi"; // 👈 Upload icon

export default function FileUpload() {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleReset = () => {
    setFile(null);
  };

  const handleSave = () => {
    if (!file) {
      alert("Please select a file first");
      return;
    }
    console.log("Saving file:", file);
    // 👉 Upload logic here
  };

  return (
    <div className="w-full mx-auto p-6  rounded-lg bg-white">
      <p className="text-gray-500 text-sm mb-10 text-center">
        Note: Use control to select multiple files and file size should be less
        than 5 mb.
      </p>

      <div className="w-1/2 m-auto">
      <label className="block text-gray-700 font-medium mb-2">Choose file</label>

      {/* Drag & Drop Zone */}
      <div
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 transition"
      >
        <input
          type="file"
          accept="image/png, image/jpeg"
          onChange={handleFileChange}
          className="hidden"
          id="fileInput"
        />
        <label htmlFor="fileInput" className="cursor-pointer text-center">
          <div className="flex flex-col items-center">
            {/* ✅ Using React Icon */}
            <FiUpload className="h-10 w-10 text-gray-400 mb-2" />
            <p className="text-gray-500">
              Drag & drop your invoice image here, or{" "}
              <span className="text-blue-600 underline">click to browser</span>
            </p>
            <p className="text-xs text-gray-400">
              Supports JPG, PNG up to 10MB
            </p>
          </div>
        </label>
      </div>
      </div>

      {/* File Preview */}
      {file && (
        <p className="mt-3 text-sm text-gray-700">
          Selected File: <span className="font-medium">{file.name}</span>
        </p>
      )}

      {/* Buttons */}
      <div className="flex justify-center gap-4 mt-6">
        <Button
          variant="outline"
          className="px-6 py-2 border rounded-full text-gray-600 "
          onClick={() => setFile(null)}
        >
          Cancel
        </Button>
        <Button
          variant="outline"
          textColor="red"
          className="px-6 py-2 border border-red-500 "
          onClick={handleReset}
        >
          Reset
        </Button>
        <Button
        className="px-6 py-2"
          onClick={handleSave}
        >
          Save
        </Button>
      </div>
    </div>
  );
}
