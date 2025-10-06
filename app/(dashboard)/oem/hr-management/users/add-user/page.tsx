import React from 'react'
import AddUserForm from './components/AddUserForm'
import AddUserTabs from './components/AddUserTabs'

function AddUser() {
  return (
    <div className='space-y-4'>
      <AddUserForm />
      <AddUserTabs />
    </div>
  )
}

export default AddUser