import {React,useContext} from 'react';
import { ShopContext } from '../../Context';
import {ShoppingBagIcon} from '@heroicons/react/24/solid';


const ShoppingCart = () =>{
    const {productsToCart,closeProductDetail,openCheckoutSideMenu} = useContext(ShopContext);

    const handleCheckoutMenu = () =>{
        openCheckoutSideMenu();
        closeProductDetail();
    }

    return(
        <span className='flex items-center gap-x-1 cursor-pointer' onClick={handleCheckoutMenu}>
            <ShoppingBagIcon className='w-6 h-6 fill-neutral-950'/>
            <div className='bg-orange-500 flex justify-center items-center text-white font-regular rounded-lg w-4 h-4'>{productsToCart.length}</div>
        </span>
    );
}

export default ShoppingCart;