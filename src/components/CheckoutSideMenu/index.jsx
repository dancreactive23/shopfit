import React from "react";
import OrderCard from "../OrderCard";
import { totalPrice } from "../../utils";
import { useContext } from "react";
import { ShopContext } from "../../Context";
import { XMarkIcon } from "@heroicons/react/24/solid";


const CheckoutSideMenu = () =>{
    const {isCheckoutSideMenuOpen,closeCheckoutSideMenu,productsToCart,setProductsToCart} = useContext(ShopContext);
    
    const handleDelete = (id) =>{
        const filteredCartProducts = productsToCart.filter(product => product.id !== id);
        setProductsToCart(filteredCartProducts);
    }
    return(
        <aside className={`${isCheckoutSideMenuOpen ? 'flex' : 'hidden'} w-[360px] h-[calc(100vh-68px)]  flex-col fixed right-0 top-20 bg-white border border-orange-400/60 rounded-lg text-neutral-950`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <div onClick={closeCheckoutSideMenu}>
                <XMarkIcon className='w-6 h-6 stroke-0 stroke-neutral-950 cursor-pointer hover:text-orange-600'/>
                </div>
            </div>
            <div className='px-6 pb-3 space-y-3 overflow-y-auto overflow-x-hidden h-full'>
                {
                    productsToCart.map((product) =>(
                        <OrderCard id={product.id} key={product.id} image={product.image} title={product.title} price={product.price} handleDelete={handleDelete}/>
                    ))
                }
            </div>
            <div className='px-6 mb-6'>
                <p className='flex justify-between items-center'>
                    <span className='font-light text-orange-800'>Total:</span>
                    <span className='font-medium text-2xl '>${totalPrice(productsToCart)}</span>
                </p>
            </div>
        </aside>
    );
}

export default CheckoutSideMenu;