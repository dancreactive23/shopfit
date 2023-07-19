import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { ShopContext } from '../../Context';
import {ShoppingBagIcon} from '@heroicons/react/24/solid';

const Navbar = () =>{

    const {productsToCart,setSignOut,signOut,account} = useContext(ShopContext)
    const linkActive = ({isActive}) => isActive ? 'underline underline-offset-2 decoration-double decoration-orange-700': undefined

    //checking if the user clicked signout button on navbar

    const signout = localStorage.getItem('sign-out');
    const stringifiedSignOut = JSON.parse(signout);
    const isUserSignout = signOut ?? stringifiedSignOut;
    
    const handleSignOut = () =>{
        const signOutStringified = JSON.stringify(true);
        localStorage.setItem('sign-out' , signOutStringified);
        setSignOut(true);
    }

    const viewRender = () =>{
        if(isUserSignout){
            return(
                <li>
                    <NavLink to='/sign-in' className={linkActive}
                    onClick={handleSignOut}>
                        Sign in
                    </NavLink>
                </li>
            )
        }else{
            return(
                <>
                     <li className='text-neutral-950/60'>
                        {account.email}
                    </li>
                    <li>
                        <NavLink to='/my-orders' className={linkActive}>
                            My orders
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/my-account' className={linkActive}>
                            My account
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/sign-in' className={linkActive}
                        onClick={handleSignOut}>
                            Sign out
                        </NavLink>
                    </li>
                    <li>
                        <span className='flex items-center gap-x-1'>
                            <ShoppingBagIcon className='w-6 h-6 fill-neutral-950'/>
                            <div className='bg-orange-500 flex justify-center items-center text-white font-regular rounded-lg w-4 h-4'>{productsToCart.length}</div>
                        </span>
                    </li>
                </>
            )
        }
    }

    return(
        <>
            <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light text-neutral-950 bg-white border-b'>
                <ul className='flex items-center gap-x-3 '>
                    <li className='font-semibold text-lg text-orange-600'>
                        <NavLink to='/'>
                            ShopFit
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/' className={linkActive}>
                            All
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/men's clothing" className={linkActive}>
                            Men
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/women's clothing" className={linkActive}>
                            Women
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/electronics' className={linkActive}>
                            Electronics
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/jewelery' className={linkActive}>
                            Jewelery
                        </NavLink>
                    </li>
                </ul>
                <ul className='flex items-center gap-x-3'>
                    {viewRender()}
                </ul>
            </nav>
        </>
    );
}

export default Navbar;