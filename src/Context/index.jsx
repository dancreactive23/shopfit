/* eslint-disable react/prop-types */
import { createContext,useState } from 'react';

export const ShopContext = createContext();

export const ShopProvider = ({children}) =>{
    const [count,setCount] = useState(0);
    const [isProductDetailOpen,setIsProductDetailOpen] =useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);
    return(
        <ShopContext.Provider value={{
            count,
            setCount,
            isProductDetailOpen,
            openProductDetail,
            closeProductDetail,
        }}>
            {children}
        </ShopContext.Provider>
    )
}