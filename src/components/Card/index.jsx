/* eslint-disable react/prop-types */
import React from 'react'
import {useContext} from 'react';
import { ShopContext } from '../../Context';

const Card = ({price, title,images,category:{name}}) =>{

    const {count,setCount} = useContext(ShopContext);

    return(
        <div className='bg-white cursor-pointer w-56 h-60 rounded-lg'>
            <figure className='w-full h4/5 mb-2 relative'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{name}</span>
                <img className='w-full h-full rounded-lg object-cover' src={images[0]} alt={title} />
                <button className='absolute top-0 right-0 flex justify-center items-center w-6 h-6 rounded-full bg-white m-2 p-1'
                onClick={() => setCount(count + 1)}>
                   +
                </button>
            </figure>
            <p className='flex justify-between'>
                <span className='font-light text-sm'>{title}</span>
                <span className='font-semibold text-medium'>{`$${price}`}</span>
            </p>
        </div>
    );
}

export default Card