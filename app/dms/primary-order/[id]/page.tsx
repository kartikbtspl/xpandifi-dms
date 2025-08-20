"use client"
import OrderDetailNotes from './components/orderDetailNotes';

export default function primayOrderDetails(){


    return(
        <div>
            <button
                onClick={() => history.back()}
                className="text-blue-600 hover:underline"
            >
            ← Back
            </button>
            <div className='mt-4'>
                <OrderDetailNotes />
            </div>
        </div>
    )
}