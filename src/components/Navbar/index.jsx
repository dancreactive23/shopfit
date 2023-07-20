import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { ShopContext } from '../../Context';
import ShoppingCart from '../ShoppingCart';

const Navbar = () =>{

    const {setSignOut,signOut,account} = useContext(ShopContext)
    const linkActive = ({isActive}) => isActive ? 'underline underline-offset-2 decoration-double decoration-orange-700': undefined

    //checking if the user clicked signout button on navbar

    const signout = localStorage.getItem('sign-out');
    const stringifiedSignOut = JSON.parse(signout);
    const isUserSignout = signOut ?? stringifiedSignOut;

    //getting account value from localStorage and context
    const getAccount = localStorage.getItem('account');
    const parsedGetAccount = JSON.parse(getAccount);

    const noAccountInLocalStorage = parsedGetAccount ? Object.keys(parsedGetAccount).length === 0 : true;
    const noAccountInState = account ? Object.keys(account).length === 0 : true;

    const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInState;
    
    const handleSignOut = () =>{
        const signOutStringified = JSON.stringify(true);
        localStorage.setItem('sign-out' , signOutStringified);
        setSignOut(true);
    }

    const viewRender = () =>{
        if(hasUserAnAccount &&!isUserSignout){
            return(
                <>
                    <li className='text-neutral-950/60'>
                        {parsedGetAccount?.email}
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
                        <ShoppingCart/>
                    </li>
                </>
            )
        }else{
            return(
                <li>
                    <NavLink to='/sign-in' className={linkActive}
                    onClick={handleSignOut}>
                        Sign in
                    </NavLink>
                </li>
            )
        }
    }

    return(
        <>
            <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light text-neutral-950 bg-white border-b'>
                <ul className='flex items-center gap-x-3 '>
                    <li className='font-semibold text-lg text-orange-600'>
                        <NavLink to={`${isUserSignout ? '/sign-in' : '/'}`}>
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