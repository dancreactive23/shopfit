import { NavLink } from 'react-router-dom';
import React from 'react';

const Navbar = () =>{

const linkActive = ({isActive}) => isActive ? 'underline underline-offset-2 decoration-double': undefined

    return(
        <>
            <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light'>
                <ul className='flex items-center gap-x-3 '>
                    <li className='font-semibold text-lg'>
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
                    <li className='text-black/60'>
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
                        🛒0
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;