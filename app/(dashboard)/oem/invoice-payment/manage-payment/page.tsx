"use client"
import Breadcrumb from '@/components/common/ui/BreadCrumb'
import React, { useState } from 'react'
import ManagePaymentForm from './components/ManagePaymentForm'
import { useRouter } from 'next/navigation'
import getManagePaymentCol from './components/getManagePaymentCol'
import Button from '@/components/common/ui/Button'
import Table from '@/components/common/table/Table'

const ManagePayment = () => {

  const [paymentData, setPaymentData] = useState([
    {
      id: 1,
      srNo: "01",
      customerName: "ABC",
      invoiceID: "1212",
      totalAmount: "10,000",
      paidAmount: "900",
      paymentDate: "23/09/2025",
      status: "pending"
    },
    {
      id: 2,
      srNo: "02",
      customerName: "XYZ",
      invoiceID: "3434",
      totalAmount: "20,000",
      paidAmount: "20000",
      paymentDate: "21/09/2025",
      status: "approved"
    },
    {
      id: 3,
      srNo: "03",
      customerName: "DEF",
      invoiceID: "5678",
      totalAmount: "15,000",
      paidAmount: "0",
      paymentDate: "22/09/2025",
      status: "rejected"
    }
  ]);

  const [filteredPaymentData, setFilteredPaymentData] = useState(paymentData);

  const router = useRouter();
  const [loadingManagePayment, setLoadingManagePayment] = useState(false);

  const handleView = (row: any) => {
    const query = encodeURIComponent(JSON.stringify(row));
    router.push(`/oem/invoice-payment/manage-payment/view-manage-payment?data=${query}`);
  };

  const handleApprove = (row: any) => {
    setPaymentData((prev) =>
      prev.map((item) =>
        item.id === row.id ? { ...item, status: "approved" } : item
      )
    );
    setFilteredPaymentData((prev) =>
      prev.map((item) =>
        item.id === row.id ? { ...item, status: "approved" } : item
      )
    );
  };

  const handleReject = (row: any) => {
    setPaymentData((prev) => prev.filter((item) => item.id !== row.id));
    setFilteredPaymentData((prev) => prev.filter((item) => item.id !== row.id));
  };

  const managePaymentColumns = getManagePaymentCol(
    handleView,
    handleApprove,
    handleReject
  );

  const handleRefreshManagePayment = () => {
    setLoadingManagePayment(true);
    setTimeout(() => {
      setLoadingManagePayment(false);
      setFilteredPaymentData([...paymentData]); // refresh but same data
    }, 1000);
  };

  const handleFilter = (filters: any) => {
    const { customer, paymentStatus, dateRange } = filters;

    const filtered = paymentData.filter((row) => {
      const customerMatch = customer
        ? row.customerName.toLowerCase().includes(customer.toLowerCase()) ||
        row.invoiceID.toLowerCase().includes(customer.toLowerCase())
        : true;

      const statusMatch = paymentStatus
        ? row.status.toLowerCase() === paymentStatus.toLowerCase()
        : true;

      // Fix date comparison
      const dateParts = row.paymentDate.split("/"); // dd/MM/yyyy
      const rowDate = new Date(
        Number(dateParts[2]),
        Number(dateParts[1]) - 1,
        Number(dateParts[0])
      );

      const startDate = new Date(dateRange.startDate);
      startDate.setHours(0, 0, 0, 0);

      const endDate = new Date(dateRange.endDate);
      endDate.setHours(23, 59, 59, 999);

      const dateMatch = rowDate >= startDate && rowDate <= endDate;

      return customerMatch && statusMatch && dateMatch;
    });

    setFilteredPaymentData(filtered);
  };

  return (
    <div className='space-y-4'>
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem" },
          { label: "Invoice & Payment", href: "/oem/invoice-payment" },
          { label: "Manage Payment", href: "/oem/invoice-payment/manage-payment" },
        ]}
      />
      <h1 className="text-3xl text-[#445E94] font-semibold mb-4">Manage Payment</h1>

      <ManagePaymentForm onFilter={handleFilter} />

      <div className="space-y-4 rounded-lg bg-white">
        <div className="flex justify-between px-6 pt-4">
          <h1 className="text-xl text-[#445E94]">Expense Report List</h1>
          <Button>Export</Button>
        </div>
        <hr className="text-gray-200" />

        <div className="px-6">
          <Table
            rows={filteredPaymentData}
            columns={managePaymentColumns}
            onRefresh={handleRefreshManagePayment}
            loading={loadingManagePayment}
            showPagination
          />
        </div>
      </div>
    </div>
  )
}

export default ManagePayment
