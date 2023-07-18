import {React,useContext} from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context'
import Layout from '../../components/Layout'

function Signin() {

  //context
  const {setSignOut,account} = useContext(ShopContext);

  //getting account from localStorage and state to validate if user has account

  const accountLocalStorage = localStorage.getItem('account');
  const parsedAccount = JSON.parse(accountLocalStorage);
  
  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true;
  const noAccountinState = account ? Object.keys(account).length === 0 : true;

  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountinState;

  const handleLogin = () =>{
    const signOutValue = JSON.stringify(false);
    localStorage.setItem('sign-out',signOutValue);
    setSignOut(false);
  }

  return (
    <Layout>
        <div className='flex flex-col justify-center h-[500px]'>
          <h1 className='w-96 font-medium text-xl text-center mb-4'>Welcome</h1>
          <div className='flex flex-col w-96'>
            <p className='flex items-center gap-1 px-28'>
              <span className='text-sm font-light '> Email:</span>
              <span>{parsedAccount?.email}</span>
            </p>
            <p className='flex items-center gap-1 px-28'>
              <span className='text-sm font-light'>Password:</span>
              <span>{parsedAccount?.password}</span>
            </p>
            <Link to='/'>
              <button
                onClick={handleLogin}
                disabled={!hasUserAnAccount}
               className='bg-orange-600 py-3 text-white  disabled:bg-orange-600/10 disabled:text-black/40 w-full rounded-lg mt-4 mb-2 text-center '>Login</button>
            </Link>
            <div className='text-center'>
              <a className='font-light underline underline-offset-4 text-sm' href='/'>Forgot my password</a>
            </div>
            <button 
            disabled={hasUserAnAccount}
            className='mt-6 w-full border border-orange-300 py-3 rounded-lg disabled:border-orange-300/40 disabled:text-black/40'>Sign Up</button>

          </div>
        </div>
    </Layout>
  )
}

export default Signin