/* eslint-disable react/prop-types */
import { createContext,useState,useEffect } from 'react';

export const ShopContext = createContext();

export const ShopProvider = ({children}) =>{

    //API connection
        const [products,setProducts] = useState(null);

        useEffect(() =>{
            const fetchData = async () =>{
                try{
                    const response = await fetch('https://fakestoreapi.com/products');
                    const data = await response.json();
                    setProducts(data)
                }catch(error){
                    console.error(`Opps ocurrio un error ${error}`)
                }
            }
            fetchData();
        },[])


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
            products,
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