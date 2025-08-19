// components/Sample.tsx
"use client";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Search, Download, Plus, ArrowRight, Trash2, Heart, Star } from "lucide-react";
import Input from "./Input";
import Dropdown from "./Dropdown";
import Button from "./Button";

type FormValues = {
  searchCustomer: string;
  selectCountry: string;
};

const Sample: React.FC = () => {
  const { control, handleSubmit, reset } = useForm<FormValues>();

  const countryOptions = [
    { value: "india", label: "India" },
    { value: "usa", label: "USA" },
    { value: "canada", label: "Canada" },
    { value: "uk", label: "UK" }
  ];

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted:", data);
  };

  const onReset = () => {
    reset();
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-sm">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Search Customer */}
          <Controller
            name="searchCustomer"
            control={control}
            render={({ field, fieldState }) => (
              <Input
                {...field}
                label="Search Customer"
                placeholder="search customer by name, phone number"
                startIcon={<Search className="w-4 h-4" />}
                error={fieldState.error?.message}
              />
            )}
          />

          {/* Select Country */}
          <Controller
            name="selectCountry"
            control={control}
            render={({ field, fieldState }) => (
              <Dropdown
                {...field}
                label="Select Country"
                placeholder="Select Country"
                options={countryOptions}
                error={fieldState.error?.message}
                clearable
              />
            )}
          />
        </div>

        {/* Button Examples with Custom Text Colors */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">Button Examples with Custom Text Colors</h3>
          
          {/* Default Variants vs Custom Text Colors */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-gray-600">Default vs Custom Text Colors</h4>
            <div className="flex flex-wrap gap-4">
              {/* Default colors */}
              <Button variant="primary">Default Primary</Button>
              <Button variant="secondary">Default Secondary</Button>
              <Button variant="outline">Default Outline</Button>
              
              {/* Custom text colors */}
              <Button variant="primary" textColor="#FFD700">Gold Text</Button>
              <Button variant="secondary" textColor="#FF6B6B">Red Text</Button>
              <Button variant="outline" textColor="#4ECDC4">Teal Text</Button>
            </div>
          </div>

          {/* Creative Color Combinations */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-gray-600">Creative Color Combinations</h4>
            <div className="flex flex-wrap gap-4">
              <Button 
                variant="ghost" 
                textColor="#E91E63"
                startIcon={<Heart className="w-4 h-4" />}
              >
                Love It
              </Button>
              
              <Button 
                variant="primary" 
                textColor="#FFF59D"
                startIcon={<Star className="w-4 h-4" />}
              >
                Premium
              </Button>
              
              <Button 
                variant="outline" 
                textColor="#8E24AA"
                endIcon={<Download className="w-4 h-4" />}
              >
                Download
              </Button>
              
              <Button 
                variant="secondary" 
                textColor="#00695C"
                startIcon={<Plus className="w-4 h-4" />}
              >
                Add New
              </Button>
            </div>
          </div>

          {/* Brand Colors */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-gray-600">Brand Colors</h4>
            <div className="flex flex-wrap gap-4">
              <Button variant="ghost" textColor="#1DA1F2">Twitter Blue</Button>
              <Button variant="ghost" textColor="#E4405F">Instagram Pink</Button>
              <Button variant="ghost" textColor="#25D366">WhatsApp Green</Button>
              <Button variant="ghost" textColor="#FF0000">YouTube Red</Button>
            </div>
          </div>

          {/* Different Sizes with Custom Colors */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-gray-600">Sizes with Custom Colors</h4>
            <div className="flex flex-wrap items-center gap-4">
              <Button size="sm" textColor="#FF9800">Small Orange</Button>
              <Button size="md" textColor="#9C27B0">Medium Purple</Button>
              <Button size="lg" textColor="#2196F3">Large Blue</Button>
              <Button size="xl" textColor="#4CAF50">XL Green</Button>
            </div>
          </div>
        </div>

        {/* Form Action Buttons */}
        <div className="flex justify-end gap-4">
          <Button
            type="button"
            variant="ghost"
            textColor="#EF4444"
            onClick={onReset}
          >
            Reset
          </Button>
          <Button
            type="submit"
            textColor="#FFFFFF"
            endIcon={<ArrowRight className="w-4 h-4" />}
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Sample;
