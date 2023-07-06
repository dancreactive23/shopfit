/* eslint-disable react/prop-types */
import React from 'react'
import {useContext} from 'react';
import { ShopContext } from '../../Context';
import { PlusCircleIcon } from '@heroicons/react/24/solid';

const Card = ({price, title,image,category}) =>{

    const {count,setCount,openProductDetail} = useContext(ShopContext);

    return(
        <div 
        onClick={openProductDetail}
        className='bg-white cursor-pointer w-56 h-60 rounded-lg'
        >
            <figure className='w-full h4/5 mb-2 relative'>
                <span className='absolute bottom-0 left-0 bg-neutral-300/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{category}</span>
                <img className='w-full h-[200px] rounded-lg object-contain' src={image} alt={title}/>
                <button className='absolute top-0 right-0 flex justify-center items-center  rounded-full bg-white m-2 p-1'
                onClick={() => setCount(count + 1)}>
                    <PlusCircleIcon className='w-6 h-6 fill-orange-700'/>
                </button>
            </figure>
            <p className='flex justify-between'>
                <span className='font-light text-sm truncate'>{title}</span>
                <span className='font-semibold text-medium'>{`$${price}`}</span>
            </p>
        </div>
    );
}

export default Card