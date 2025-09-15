import React from 'react'
import AddNewLeadForm from './components/AddNewLeadForm'
import ToggleProduct from './components/ToggleProduct'

function AddNewLead() {
  return (
    <div className='space-y-4'>
      <AddNewLeadForm />
      <ToggleProduct />
    </div>
  )
}

export default AddNewLead