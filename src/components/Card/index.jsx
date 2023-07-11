/* eslint-disable react/prop-types */
import React from 'react'
import {useContext} from 'react';
import { ShopContext } from '../../Context';
import { PlusCircleIcon,CheckIcon } from '@heroicons/react/24/solid';

const Card = ({price, title,image,category,id}) =>{


    const {
        count,
        setCount,
        openProductDetail,
        setShowProductDetail,
        setProductsToCart,
        productsToCart,
        closeProductDetail,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
    } = useContext(ShopContext);

    const productDetailShow = () =>{
        openProductDetail();
        closeCheckoutSideMenu();
        setShowProductDetail({price,title,image,category})
    }

    const addProductsToCart = (event,product) =>{
        event.stopPropagation();
        setCount(count + 1);
        openCheckoutSideMenu();
        closeProductDetail();
        setProductsToCart([...productsToCart,product]);
    }

    const productAdded = (productId) =>{
        let isProductInMyOrders = productsToCart.some(item =>item.id === productId)

        return (
            isProductInMyOrders ?
                <button id='addToCart' className='absolute top-0 right-0 flex justify-center items-center  rounded-full bg-white m-2 p-1'>
                    <CheckIcon className='w-6 h-6 fill-orange-100 rounded-full bg-green-500'/>
                </button>
                :
                <button id='addToCart' className='absolute top-0 right-0 flex justify-center items-center  rounded-full bg-white m-2 p-1'
                onClick={(event)=> addProductsToCart(event,{price, title,image,category,id})}>
                    <PlusCircleIcon className='w-6 h-6 fill-orange-700'/>
                </button>
        )
    }

    return(
        <div 
        onClick={productDetailShow}
        className='bg-white cursor-pointer w-56 h-60 rounded-lg'
        >
            <figure className='w-full h4/5 mb-2 relative'>
                <span className='absolute bottom-0 left-0 bg-neutral-300/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{category}</span>
                <img className='w-full h-[200px] rounded-lg object-contain' src={image} alt={title}/>
                {productAdded(id)}
            </figure>
            <p className='flex justify-between'>
                <span className='font-light text-sm truncate'>{title}</span>
                <span className='font-semibold text-medium'>{`$${price}`}</span>
            </p>
        </div>
    );
}

export default Card