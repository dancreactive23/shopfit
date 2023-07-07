import React from "react";
import { useContext } from "react";
import { ShopContext } from "../../Context";
import { XMarkIcon } from "@heroicons/react/24/solid";

const ProductDetail = () =>{
    const {isProductDetailOpen,closeProductDetail,showProductDetail} = useContext(ShopContext);
    const {price,title,image,category} = showProductDetail;

    return(
        <aside className={`${isProductDetailOpen ? 'flex' : 'hidden'} w-[360px]  h-[calc(100vh-68px)]  flex-col fixed right-0 bg-white border border-orange-400/60 rounded-lg text-neutral-950`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <div onClick={closeProductDetail}>
                <XMarkIcon className='w-6 h-6 stroke-0 stroke-neutral-950 cursor-pointer hover:text-orange-600'/>
                </div>
            </div>
            <figure className='px-6'>
                <img className='w-full h-[300px] object-contain rounded-lg' src={image} alt={title} />
            </figure>
            <p className='flex flex-col p-6 gap-y-4'>
                <span className='font-medium text-2xl text-[#059669]'>${price}</span>
                <span className='font-medium text-medium'>{title}</span>
                <span className='self-center font-normal text-sm bg-orange-600/90 text-white px-2 py-1 rounded-full'>{category}</span>
            </p>
        </aside>
    );
}

export default ProductDetail;