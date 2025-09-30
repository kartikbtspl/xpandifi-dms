"use client";
import React, { useRef, useState, ChangeEvent } from "react";
import { FiUpload } from "react-icons/fi";

interface CustomFileInputProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const CustomFileInput: React.FC<CustomFileInputProps> = ({ onChange }) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [fileName, setFileName] = useState<string>("Upload");

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName("Upload");
    }
    onChange(e);
  };

  return (
    <div>
      <button
        type="button"
        onClick={handleClick}
        className="inline-flex items-center px-4 py-2 border rounded cursor-pointer bg-gray-100 hover:bg-gray-200"
      >
        <FiUpload className="mr-2" />
        {fileName}
      </button>
      <input
        type="file"
        accept=".xlsx,.xls"
        onChange={handleFileChange}
        ref={fileInputRef}
        className="hidden"
      />
    </div>
  );
};

export default CustomFileInput;
