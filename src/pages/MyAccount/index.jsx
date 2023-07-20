import {useState,useContext,useRef} from 'react'
import { ShopContext } from '../../Context'
import Layout from '../../components/Layout'

function MyAccount() {

  const{setAccount} = useContext(ShopContext);
  const [view,setView] = useState('user-info');
  const getAccount = localStorage.getItem('account');
  const parsedAccount = JSON.parse(getAccount);
  const form = useRef(null);

  const editAccount = () =>{
    const formData = new FormData(form.current);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password'),
    }

    //Updating the data to localStorage and state
    const stringifiedData = JSON.stringify(data);
    localStorage.setItem('account',stringifiedData);
    setAccount(data);
  }

  const renderUserInfo = () =>{
    return(
      <div className='flex flex-col w-96'>
        <p className='flex items-center gap-1 px-28'>
          <span className='text-sm font-light '> Name:</span>
          <span>{parsedAccount?.name}</span>
        </p>
        <p className='flex items-center gap-1 px-28'>
          <span className='text-sm font-light'>Email:</span>
          <span>{parsedAccount?.email}</span>
        </p>
          <button
          onClick={() => setView('edit-user-info')}
          className='bg-orange-600 py-3 text-white
          w-full rounded-lg mt-4 mb-2 text-center '>
            Edit
          </button>
      </div>
    )
  }

  const renderEditUserInfo = () =>{
    return(
      <form ref={form} className='flex flex-col w-96 gap-4 '>
      <div className='flex flex-col gap-2 items-center'>
        <label htmlFor='name' className='font-light text-sm'>Name:</label>
        <input type="text"
          id='name' name='name' defaultValue={parsedAccount?.name} placeholder='Dan'
          className='border w-full border-orange-600 rounded-lg placeholder:text-sm placeholder:font-light placeholder:text-black/60 py-2 px-4 focus:outline-none' />
      </div>
      <div className='flex flex-col gap-2 items-center '>
        <label htmlFor='email' className='font-light text-sm'>Email:</label>
        <input type="text"
          id='email' name='email' defaultValue={parsedAccount?.email} placeholder='Dan@email.com'
          className='border w-full border-orange-600 rounded-lg placeholder:text-sm placeholder:font-light placeholder:text-black/60 py-2 px-4 focus:outline-none' />
      </div>
      <div className='flex flex-col gap-2 items-center'>
        <label htmlFor='password' defaultValue={parsedAccount?.password} className='font-light text-sm'>Password:</label>
        <input type="text"
          id='password' name='password' defaultValue={parsedAccount?.password} placeholder='*******'
          className='border w-full border-orange-600 rounded-lg placeholder:text-sm placeholder:font-light placeholder:text-black/60 py-2 px-4 focus:outline-none' />
      </div>
        <button
        onClick={() => {setView('user-info'),editAccount()}}
        className=' mt-4 bg-orange-600 w-[80%] mx-10  rounded-lg py-3 text-white'>
          Update
        </button>
      </form>
    );
  }

  const renderView = () => view === 'edit-user-info' ? renderEditUserInfo() : renderUserInfo();

  return (
    <Layout>
        <div className='h-[500px] flex flex-col justify-center'>
          <p className='text-xl font-medium text-center w-96 mb-6'>My account</p>
          {renderView()}
        </div>
    </Layout>
  )
}

export default MyAccount