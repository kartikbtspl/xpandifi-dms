import React, { useState } from 'react'
import getMoreContacts from './addMoreContactsCol';
import Table from '@/components/common/table/Table';
import Button from '@/components/common/ui/Button';
import AddMoreContactModal from '../Modals/AddMoreContactModal';

function AddMoreContacts() {

  const [contactsData, setContactsData] = useState([
    {
      id: 1,
      customerName: "Harshal",
      email: "harshal1121@gmail.com",
      mobile: "+91 9898989898",
      designation: "NA",
      action: ""
    },
    {
      id: 2,
      customerName: "Nikhil",
      email: "nikhil@gmail.com",
      mobile: "+91 7778777777",
      designation: "NA",
      action: ""
    },
  ])

   const moreContactsCols = getMoreContacts();
  
    const [loadingMoreContacts, setLoadingMoreContacts] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
  
    const handleRefreshMoreContacts = () => {
      setLoadingMoreContacts(true);
      setTimeout(() => {
        setLoadingMoreContacts(false);
        setContactsData(contactsData);
      }, 1000)};

      const handleConfirm = (newContact: any) => {
    setContactsData([
      ...contactsData,
      { id: contactsData.length + 1, ...newContact, action: "" },
    ]);
    setIsOpen(false);
  };

  return (
    <div className='space-y-6'>
      <div className='flex justify-end'>
        <Button onClick={() => setIsOpen(true)} size='sm'>+ Add More Contacts</Button>
      </div>
      <Table rows={contactsData} columns={moreContactsCols} onRefresh={handleRefreshMoreContacts} loading={loadingMoreContacts} filterKey='customerName' rowsPerPage={2}/>

      <AddMoreContactModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onConfirm={handleConfirm}
      />
    </div>
  )
}

export default AddMoreContacts