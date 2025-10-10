"use client"
import React, { useState } from 'react'
import AttendanceForm from './components/AttendanceForm';

function Attendance() {
  return (
    <div className='space-y-4'>
      <div className="">
        <AttendanceForm />
      </div>
    </div>
  )
}

export default Attendance