import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { ShopContext } from '../../Context';
import {ShoppingBagIcon} from '@heroicons/react/24/solid';

const Navbar = () =>{

    const {count} = useContext(ShopContext)
    const linkActive = ({isActive}) => isActive ? 'underline underline-offset-2 decoration-double decoration-orange-700': undefined

    return(
        <>
            <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light text-neutral-950'>
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
                        <NavLink to='/clothes' className={linkActive}>
                            Clothes
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/electronics' className={linkActive}>
                            Electronics
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/furnitures' className={linkActive}>
                            Furnitures
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/toys' className={linkActive}>
                            Toys
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/others' className={linkActive}>
                            Others
                        </NavLink>
                    </li>
                </ul>
                <ul className='flex items-center gap-x-3'>
                    <li className='text-neutral-950/60'>
                        dancreactive23@email.com
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
                        <NavLink to='/sign-in' className={linkActive}>
                            Sign in
                        </NavLink>
                    </li>
                    <li>
                        <span className='flex items-center gap-x-1'>
                            <ShoppingBagIcon className='w-6 h-6 fill-neutral-950'/>
                            <div className='bg-orange-500 flex justify-center items-center text-white font-regular rounded-lg w-4 h-4'>{count}</div>
                        </span>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;