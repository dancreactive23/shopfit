/* eslint-disable react/prop-types */
import React from 'react'
import { ChevronRightIcon } from '@heroicons/react/24/solid';

const OrdersCard = ({date,totalProducts,totalPrice}) =>{
    return(
        <div className='flex justify-between items-center shadow-sm border-2 border-orange-600 rounded-lg w-96  px-2 py-4'>
            <p className='flex gap-x-4 w-3/5 text-neutral-950'>
                <span className='font-light italic'>{date}</span>
                <span className='font-medium underline underline-offset-2 decoration-orange-600'>{totalProducts}</span>
            </p>
            <p className='flex items-center justify-between w-2/5 h-auto'>
                <span className='text-xl w-3/5 truncate text-neutral-950 font-medium '>${totalPrice}</span>
                <ChevronRightIcon className='w-6 h-6 stroke-1 stroke-neutral-950 cursor-pointer hover:stroke-orange-600 hover:text-orange-600'/>
            </p>
        </div>
    );
}

export default OrdersCard;