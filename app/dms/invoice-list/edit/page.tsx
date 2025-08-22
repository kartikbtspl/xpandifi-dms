"use client"

import { useState } from "react";
import EditInvoiceNotes from "./components/EditInoiceNotes";
import getInvoiceItemListColumns from "./components/invoiceItemListColumn";
import Table from "../../../../components/common/table/Table";
import Button from "../../../../components/common/ui/Button";


export default function () {

    const [invoiceItemListData, setInvoiceItemListData] = useState([
        {
            id : 1,
            srNo : "01",
            product : "Agent Capsule",
            rate : "2000",
            tax : "2000",
            qty : "100",
            msp : "20000.0",
            subTotal : "20000.0",
            discount : "30.0",
            total : "14000",
        },
        {
            id : 2,
            srNo : "01",
            product : "Agent Capsule",
            rate : "2000",
            tax : "2000",
            qty : "100",
            msp : "20000.0",
            subTotal : "20000.0",
            discount : "30.0",
            total : "14000",
        },
        {
            id : 3,
            srNo : "01",
            product : "Kgent Capsule",
            rate : "2000",
            tax : "2000",
            qty : "100",
            msp : "20000.0",
            subTotal : "20000.0",
            discount : "30.0",
            total : "14000",
        },
        {
            id : 4,
            srNo : "01",
            product : "Agent Capsule",
            rate : "2000",
            tax : "2000",
            qty : "100",
            msp : "20000.0",
            subTotal : "20000.0",
            discount : "30.0",
            total : "14000",
        },
        {
            id : 5,
            srNo : "01",
            product : "Agent Capsule",
            rate : "2000",
            tax : "2000",
            qty : "100",
            msp : "20000.0",
            subTotal : "20000.0",
            discount : "30.0",
            total : "14000",
        },
        {
            id : 6,
            srNo : "01",
            product : "Agent Capsule",
            rate : "2000",
            tax : "2000",
            qty : "100",
            msp : "20000.0",
            subTotal : "20000.0",
            discount : "30.0",
            total : "14000",
        },
        {
            id : 7,
            srNo : "01",
            product : "Agent Capsule",
            rate : "2000",
            tax : "2000",
            qty : "100",
            msp : "20000.0",
            subTotal : "20000.0",
            discount : "30.0",
            total : "14000",
        },
    ])

    const [loadingInvoiceItemList, setLoadingInvoiceItemList] = useState(false);
    const invoiceItemColumn = getInvoiceItemListColumns();

    const handleInvoiceItemListRefresh = () => {
    setLoadingInvoiceItemList(true);
    setTimeout(() => setLoadingInvoiceItemList(false), 1000);
  };

  return (
    <div className="space-y-4">
      <div>
        <button
          onClick={() => history.back()}
          className="text-blue-600 hover:underline"
        >
          ← Back
        </button>
      </div>
      <div>
        <EditInvoiceNotes />
      </div>
      <div>
        <h1 className="text-2xl font-semibold">Invoice list Item</h1>
      </div>
      <div>
        <Table 
        columns={invoiceItemColumn} 
        rows={invoiceItemListData} 
        loading={loadingInvoiceItemList} 
        onRefresh={handleInvoiceItemListRefresh} 
        rowsPerPage={4}
        filterKey="product"
        />
      </div>
      <div className="flex flex-wrap justify-end gap-2">
        <Button className="w-32" >Send Invoice</Button>
        <Button className="border-[#E06371] w-32 text-[#E06371]" variant="outline" >Cancel</Button>
      </div>
    </div>
  );
}
