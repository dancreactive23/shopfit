/* eslint-disable react/prop-types */
import { createContext,useState } from 'react';

export const ShopContext = createContext();

export const ShopProvider = ({children}) =>{

    //shopping cart - counter
    const [count,setCount] = useState(0);

    //product detail - open/close
    const [isProductDetailOpen,setIsProductDetailOpen] =useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);

      //checkout side menu - open/close
      const [isCheckoutSideMenuOpen,setIsCheckoutSideMenuOpen] =useState(false);
      const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
      const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

    //product detail - show product
    const [showProductDetail,setShowProductDetail] =useState({});

    //shopping cart - add products to cart
    const [productsToCart, setProductsToCart] =useState([]);

    return(
        <ShopContext.Provider value={{
            count,
            setCount,
            isProductDetailOpen,
            openProductDetail,
            closeProductDetail,
            showProductDetail,
            setShowProductDetail,
            productsToCart,
            setProductsToCart,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu

        }}>
            {children}
        </ShopContext.Provider>
    )
}