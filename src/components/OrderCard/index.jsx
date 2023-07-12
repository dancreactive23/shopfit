/* eslint-disable react/prop-types */
import React from 'react';
import { XMarkIcon } from "@heroicons/react/24/solid";


const OrderCard = ({id,price, title,image,handleDelete}) =>{
    return(
        <div className='flex justify-between items-center shadow-sm border-b border-orange-600/40 rounded-lg'>
            <div className='flex  items-center gap-2'>
                <figure className='w-20 h-20'>
                    <img className='w-auto h-full rounded-lg object-contain' src={image} alt={title}/>
                </figure>
                <p className='text-sm font-light px-3'>{title}</p>
            </div>
            <div className='flex items-center gap-2'>
                <p className='text-lg font-medium'>{price}</p>
                {
                    handleDelete
                        &&
                    <XMarkIcon onClick={() =>handleDelete(id)} className='w-6 h-6 stroke-0 stroke-neutral-950 cursor-pointer hover:text-orange-600'/>
                }
            </div>
        </div>
    );
}

export default OrderCard;

