"use client"
import Button from '@/components/common/ui/Button'
import Input from '@/components/common/ui/Input'
import React from 'react'

function EmailIdContent() {
  return (
     <div className="bg-white p-6 rounded-lg shadow-sm ">
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Email */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">Email:</label>
          <Input placeholder='Enter email'/>
        </div>

        {/* Prefix */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">Prefix:</label>
          <Input placeholder='Enter prefix'/>
        </div>

        {/* Postfix */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">Postfix:</label>
          <Input placeholder='Enter postfix' />
        </div>

        {/* Start */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">Start:</label>
          <Input placeholder='Stat from' />
        </div>

        {/* End */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">End:</label>
          <Input placeholder='End till'/>
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2 ">
          <Button>Submit</Button>
        </div>
      </form>
    </div>
  )
}

export default EmailIdContent