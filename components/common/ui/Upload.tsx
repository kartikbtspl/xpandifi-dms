"use client"
import React, { useState, useCallback } from "react"
import { FiUpload, FiX } from "react-icons/fi"

export interface UploadProps {
  label?: string
  file?: File | null
  onFileChange: (file: File | null) => void
  error?: string
}

export const Upload: React.FC<UploadProps> = ({
  label,
  file,
  onFileChange,
  error
}) => {
  const [dragging, setDragging] = useState(false)

  const onDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setDragging(false)
    const f = e.dataTransfer.files[0]
    onFileChange(f)
  }, [onFileChange])

  return (
    <div className="w-full">
      {label && <label className="block mb-1 text-gray-700">{label}</label>}
      <div
        onDragOver={(e) => { e.preventDefault(); setDragging(true) }}
        onDragLeave={() => setDragging(false)}
        onDrop={onDrop}
        onClick={() => document.getElementById("upload-file")?.click()}
        className={`border-2 border-dashed rounded-3xl p-8 text-center cursor-pointer ${
          dragging ? "border-blue-400 bg-blue-50" : "border-gray-300"
        }`}
      >
        <input
          id="upload-file"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={e => onFileChange(e.target.files ? e.target.files[0] : null)}
        />
        <FiUpload className="mx-auto mb-2 text-gray-400" size={24} />
        <p>Drag & drop your invoice image here, or <span className="text-blue-700">click to browse</span></p>
        <p className="text-sm text-gray-500">Supports JPG, PNG up to 10MB</p>
      </div>
      {file && (
        <div className="mt-2 flex justify-between items-center bg-gray-100 p-2 rounded">
          <span>{file.name}</span>
          <FiX className="cursor-pointer" onClick={() => onFileChange(null)} />
        </div>
      )}
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  )
}
