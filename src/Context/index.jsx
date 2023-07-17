/* eslint-disable react/prop-types */
import { createContext,useState,useEffect } from 'react';

export const ShopContext = createContext();

//connecting with localStorage to get account and signout keys

export const initializeLocalStorage = () =>{
    const accountInLocalStorage = localStorage.getItem('account');
    const signoutInLocalStorage = localStorage.getItem('sign-out');

    let parsedAccount;
    let parsedSignout;

    if(!accountInLocalStorage){
        localStorage.setItem('account',JSON.stringify({}))
        parsedAccount = {}
    }else{
        parsedAccount = JSON.parse(accountInLocalStorage);
    }

    if(!signoutInLocalStorage){
        localStorage.setItem('sign-out',JSON.stringify(false));
        parsedSignout = false;
    }else{
        parsedSignout = JSON.parse(signoutInLocalStorage);
    }
}

export const ShopProvider = ({children}) =>{

    //account and signOut states

    const [account,setAccount] = useState({});
    const [signOut ,setSignOut] = useState(false);

    // get products by title
    const [searchByTitle,setSearchByTitle] = useState('');


    //API connection
        const [products,setProducts] = useState([]);  

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
      
        },[products,searchByTitle])


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

    //shopping cart - order
    const [order, setOrder] = useState([]);

    //get index from URL path exa: /last,/0,/electronics...
    const getIndex = () =>{
        const currentPath = window.location.pathname
        let index = currentPath === '/' ? currentPath :currentPath.match(/\/([^/]+)\/?$/)[1].replace(/%20/,' ')
        return index;
    }


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
            closeCheckoutSideMenu,
            order,
            setOrder,
            searchByTitle,
            setSearchByTitle,
            getIndex,
            account,
            signOut,
            setAccount,
            setSignOut,
        }}>
            {children}
        </ShopContext.Provider>
    )
}
