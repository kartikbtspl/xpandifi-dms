"use client"
import SearchInvoices from "./components/SearchInvoices";
import Button from "../../../components/common/ui/Button";
import { useState } from "react";
import { FiMoreVertical } from "react-icons/fi";
import Table from "../../../components/common/table/Table";
import getInvoiceListColumns from "./components/invoiceListcolumn";


export default function InvoiceList(){

  const [invoiceListData, setInvoiceListData] = useState([
    {
      id : 1,
      invoiceId : "672938",
      invoiceNo : "923820",
      salesOrderNo : '235',
      customer : "vijay",
      createdDate : "22june 2025",
      totalAmonut : "45.8",
      amountPaid : "16.3",
      status : "Paid",
      remainingAmount : "56.9",
      blank : <FiMoreVertical />
    },
    {
      id : 2,
      invoiceId : "672938",
      invoiceNo : "923820",
      salesOrderNo : '235',
      customer : "vijay",
      createdDate : "22june 2025",
      totalAmonut : "45.8",
      amountPaid : "16.3",
      status : "Unpaid",
      remainingAmount : "56.9",
      blank : <FiMoreVertical />
    },
    {
      id : 3,
      invoiceId : "672938",
      invoiceNo : "923820",
      salesOrderNo : '235',
      customer : "vijay",
      createdDate : "22june 2025",
      totalAmonut : "45.8",
      amountPaid : "16.3",
      status : "Paid",
      remainingAmount : "56.9",
      blank : <FiMoreVertical />
    },
    {
      id : 4,
      invoiceId : "672938",
      invoiceNo : "923820",
      salesOrderNo : '235',
      customer : "vijay",
      createdDate : "22june 2025",
      totalAmonut : "45.8",
      amountPaid : "16.3",
      status : "Unpaid",
      remainingAmount : "56.9",
      blank : <FiMoreVertical />
    },
    {
      id : 5,
      invoiceId : "672938",
      invoiceNo : "923820",
      salesOrderNo : '235',
      customer : "vijay",
      createdDate : "22june 2025",
      totalAmonut : "45.8",
      amountPaid : "16.3",
      status : "Unpaid",
      remainingAmount : "56.9",
      blank : <FiMoreVertical />
    },
    {
      id : 6,
      invoiceId : "672938",
      invoiceNo : "923820",
      salesOrderNo : '235',
      customer : "vijay",
      createdDate : "22june 2025",
      totalAmonut : "45.8",
      amountPaid : "16.3",
      status : "Unpaid",
      remainingAmount : "56.9",
      blank : <FiMoreVertical />
    },
    {
      id : 7,
      invoiceId : "672938",
      invoiceNo : "923820",
      salesOrderNo : '235',
      customer : "vijay",
      createdDate : "22june 2025",
      totalAmonut : "45.8",
      amountPaid : "16.3",
      status : "Unpaid",
      remainingAmount : "56.9",
      blank : <FiMoreVertical />
    },
    {
      id : 8,
      invoiceId : "672938",
      invoiceNo : "923820",
      salesOrderNo : '235',
      customer : "vijay",
      createdDate : "22june 2025",
      totalAmonut : "45.8",
      amountPaid : "16.3",
      status : "Unpaid",
      remainingAmount : "56.9",
      blank : <FiMoreVertical />
    },
  ])

  const invoiceColumn = getInvoiceListColumns()

  const [loadingInvoice, setLoadingInvoice] = useState(false);

  const handleInvoiceListRefresh = () => {
    setLoadingInvoice(true);
    setTimeout(() => setLoadingInvoice(false), 1000);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Invoice List</h1>
        <p className="text-[#969BA0]">Monitor and manage your invoice list</p>
      </div>
      <div>
        <SearchInvoices />
      </div>
      <div className="flex flex-wrap justify-between">
        <h1 className="text-2xl font-semibold">Invoice List</h1>
        <Button className="px-12">Import</Button>
      </div>
      <div>
        <Table rows={invoiceListData} columns={invoiceColumn} rowsPerPage={4} onRefresh={handleInvoiceListRefresh}/>
      </div>
    </div>
  )
}
