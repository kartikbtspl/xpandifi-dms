"use client"
import Input from '@/components/common/ui/Input';
import React from 'react';

function SearchCustomer() {
  return (
    <div className='bg-white p-6 rounded-lg shadow-sm'>
      <div className='w-1/4'>
        <label >Search customer</label>
        <Input placeholder='Search Customer' size='sm' />
      </div>
    </div>
  )
}

export default SearchCustomer