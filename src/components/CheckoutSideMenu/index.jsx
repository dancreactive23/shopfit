import React from "react";
import { Link } from "react-router-dom";
import OrderCard from "../OrderCard";
import { totalPrice } from "../../utils";
import { useContext } from "react";
import { ShopContext } from "../../Context";
import { XMarkIcon } from "@heroicons/react/24/solid";


const CheckoutSideMenu = () =>{
    const {isCheckoutSideMenuOpen,closeCheckoutSideMenu,productsToCart,setProductsToCart,order,setOrder} = useContext(ShopContext);
    
    const handleDelete = (id) =>{
        const filteredCartProducts = productsToCart.filter(product => product.id !== id);
        setProductsToCart(filteredCartProducts);
    }

    const handleCheckout = () =>{
        const orderToAdd = {
            date: new Date().toUTCString().slice(5, 16),
            products: productsToCart,
            totalProducts: productsToCart.length,
            totalPrice: totalPrice(productsToCart),
        }
        setOrder([...order,orderToAdd]);
        setProductsToCart([]);
        closeCheckoutSideMenu();
    }

    return(
        <aside className={`${isCheckoutSideMenuOpen ? 'flex' : 'hidden'} w-[360px] h-[calc(100vh-68px)]  flex-col fixed right-0 top-20 bg-white border border-orange-400/60 rounded-lg text-neutral-950`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <div onClick={closeCheckoutSideMenu}>
                <XMarkIcon className='w-6 h-6 stroke-0 stroke-neutral-950 cursor-pointer hover:text-orange-600'/>
                </div>
            </div>
            <div className='px-6 pb-3 space-y-3 overflow-y-auto overflow-x-hidden h-full scrollbar-hide'>
                {
                    productsToCart.map((product) =>(
                        <OrderCard id={product.id} key={product.id} image={product.image} title={product.title} price={product.price} handleDelete={handleDelete}/>
                    ))
                }
            </div>
            <div className='px-6 mb-6'>
                <p className='flex justify-between items-center mb-3'>
                    <span className='font-light text-orange-800'>Total:</span>
                    <span className='font-medium text-2xl '>${totalPrice(productsToCart)}</span>
                </p>
                <Link to='/my-orders/last'>
                    <button className='w-full py-3 bg-orange-600 text-white font-semibold rounded-lg outline-0 shadow-lg ' onClick={handleCheckout}>Checkout</button>
                </Link>
            </div>
        </aside>
    );
}

export default CheckoutSideMenu;