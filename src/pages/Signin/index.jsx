import {React,useContext,useState,useRef} from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context'
import Layout from '../../components/Layout'

function Signin() {

  //context
  const {setSignOut,account} = useContext(ShopContext);

  //local state for rendering view
  const [view, setView] = useState('user-info');

  //Defining form with useRef
  const form = useRef(null)

  //getting account from localStorage and state to validate if user has account

  const accountLocalStorage = localStorage.getItem('account');
  const parsedAccount = JSON.parse(accountLocalStorage);
  
  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true;
  const noAccountinState = account ? Object.keys(account).length === 0 : true;

  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountinState;

  const createAnAccount = () =>{
    const formData = new FormData(form.current);
    const data = {
      name:formData.get('name'),
      email:formData.get('email'),
      password:formData.get('password'),
    }
    console.log(data);
  }

  const handleLogin = () =>{
    const signOutValue = JSON.stringify(false);
    localStorage.setItem('sign-out',signOutValue);
    setSignOut(false);
  }

  const renderLogin = () =>{
    return(
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
      onClick={() =>setView('create-user-info')}
      className='mt-6 w-full border border-orange-300 py-3 rounded-lg disabled:border-orange-300/40 disabled:text-black/40'>Sign Up
      </button>

      </div>
    );
  }

  const renderCreateUserInfo = () =>{
    return(
      <form ref={form} className='flex flex-col w-96 gap-4 '>
        <div className='flex flex-col gap-2 items-center'>
          <label htmlFor='name' className='font-light text-sm'>Your name:</label>
          <input type="text"
            id='name' name='name' defaultValue={parsedAccount?.name} placeholder='Dan'
            className='border border-orange-600 rounded-lg placeholder:text-sm placeholder:font-light placeholder:text-black/60 py-2 px-4 focus:outline-none' />
        </div>
        <div className='flex flex-col gap-2 items-center '>
          <label htmlFor='email' className='font-light text-sm'>Your email:</label>
          <input type="text"
            id='email' name='email' defaultValue={parsedAccount?.email} placeholder='Dan@email.com'
            className='border border-orange-600 rounded-lg placeholder:text-sm placeholder:font-light placeholder:text-black/60 py-2 px-4 focus:outline-none' />
        </div>
        <div className='flex flex-col gap-2 items-center'>
          <label htmlFor='password' className='font-light text-sm'>Your password:</label>
          <input type="text"
            id='password' name='password' defaultValue={parsedAccount?.password} placeholder='*******'
            className='border border-orange-600 rounded-lg placeholder:text-sm placeholder:font-light placeholder:text-black/60 py-2 px-4 focus:outline-none' />
        </div>
        <Link to='/'>
          <button
          onClick={createAnAccount}
           className='bg-orange-600 w-[80%] mx-10  rounded-lg py-3 text-white'>Create</button>
        </Link>
      </form>
    )
  }

  const renderView = () => view === 'create-user-info' ? renderCreateUserInfo() : renderLogin();

  return (
    <Layout>
        <div className='flex flex-col justify-center h-[500px]'>
          <h1 className='w-96 font-medium text-xl text-center mb-4'>Welcome</h1>
          {renderView()}
        </div>
    </Layout>
  )
}

export default Signin