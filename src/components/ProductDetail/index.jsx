import React from "react";
import { useContext } from "react";
import { ShopContext } from "../../Context";
import { XMarkIcon } from "@heroicons/react/24/solid";

const ProductDetail = () =>{
    const {isProductDetailOpen,closeProductDetail} = useContext(ShopContext);
    return(
        <aside className={`${isProductDetailOpen ? 'flex' : 'hidden'} w-[360px]  h-[calc(100vh-68px)]  flex-col fixed right-0 bg-white border border-orange-400/60 rounded-lg text-neutral-950`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <div onClick={closeProductDetail}>
                <XMarkIcon className='w-6 h-6 stroke-0 stroke-neutral-950 cursor-pointer hover:text-orange-600'/>
                </div>
            </div>
        </aside>
    );
}

export default ProductDetail;