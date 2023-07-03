/* eslint-disable react/prop-types */
import { createContext,useState } from 'react';

export const ShopContext = createContext();

export const ShopProvider = ({children}) =>{
    const [count,setCount] = useState(0);
    return(
        <ShopContext.Provider value={{
            count,
            setCount
        }}>
            {children}
        </ShopContext.Provider>
    )
}