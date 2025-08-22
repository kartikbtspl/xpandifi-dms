"use client"
import OrderDetailNotes from './components/orderDetailNotes';
import TotalOrderCard from './components/totalOrderCard';
import Button from '../../../../components/common/ui/Button';
import { FaArrowLeft } from "react-icons/fa";
import getPrimaryListColumns from './components/primaryOrderList';
import Table from '../../../../components/common/table/Table';
import { useState } from 'react';

export default function primayOrderDetails(){

    const listColumns = getPrimaryListColumns()
    const [loadingListData, setLoadingListData] = useState(false);

    const [orderListData, setOrderListData] = useState([
        {
            id : 1,
            srNo : '01',
            productName : 'Agent Capsule',
            pack : '1 Li(1 Li * 1)',
            rate : '2000.0',
            qty : '100',
            subTotal : '200000',
            discount : '30.0',
            total : '140000'
        },
        {
            id : 2,
            srNo : '02',
            productName : 'Agent Capsule',
            pack : '1 Li(1 Li * 1)',
            rate : '2000.0',
            qty : '100',
            subTotal : '200000',
            discount : '30.0',
            total : '140000'
        },
        {
            id : 3,
            srNo : '03',
            productName : 'Agent Capsule',
            pack : '1 Li(1 Li * 1)',
            rate : '2000.0',
            qty : '100',
            subTotal : '200000',
            discount : '30.0',
            total : '140000'
        },
        {
            id : 4,
            srNo : '04',
            productName : 'Agent Capsule',
            pack : '1 Li(1 Li * 1)',
            rate : '2000.0',
            qty : '100',
            subTotal : '200000',
            discount : '30.0',
            total : '140000'
        },
        {
            id : 5,
            srNo : '05',
            productName : 'Agent Capsule',
            pack : '1 Li(1 Li * 1)',
            rate : '2000.0',
            qty : '100',
            subTotal : '200000',
            discount : '30.0',
            total : '140000'
        },
        {
            id : 6,
            srNo : '06',
            productName : 'Agent Capsule',
            pack : '1 Li(1 Li * 1)',
            rate : '2000.0',
            qty : '100',
            subTotal : '200000',
            discount : '30.0',
            total : '140000'
        },
        {
            id : 7,
            srNo : '07',
            productName : 'Agent Capsule',
            pack : '1 Li(1 Li * 1)',
            rate : '2000.0',
            qty : '100',
            subTotal : '200000',
            discount : '30.0',
            total : '140000'
        },
        {
            id : 8,
            srNo : '08',
            productName : 'Agent Capsule',
            pack : '1 Li(1 Li * 1)',
            rate : '2000.0',
            qty : '100',
            subTotal : '200000',
            discount : '30.0',
            total : '140000'
        },
    ])

    const handleListRefresh = () => {
    setLoadingListData(true);
    setTimeout(() => setLoadingListData(false), 1000);
  };

    return(
        <div className='flex flex-wrap flex-col w-full gap-4 justify-between'>

            <div>
                <Button variant='outline' onClick={() => history.back()}> &lt; Back </Button>
            </div>
            <div>
                <OrderDetailNotes />
            </div>
            <div>
                <TotalOrderCard />
            </div>
            <div>
                <h1 className='text-xl font-semibold'>Primary Order List</h1>
            </div>
            <div>
                <Table 
                    columns={listColumns} 
                    rows={orderListData}
                    rowsPerPage={4}
                    showPagination={true}
                    loading={loadingListData} 
                    onRefresh={handleListRefresh}
                    filterKey='srNo'
                ></Table>
            </div>
        </div>
    )
}