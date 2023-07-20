import { useContext } from 'react';
import {useRoutes,BrowserRouter,Navigate} from 'react-router-dom';
import {ShopProvider,ShopContext,initializeLocalStorage} from '../../Context';
import Home from '../Home';
import MyAccount from '../MyAccount';
import Myorders from '../MyOrders';
import Signin from '../Signin';
import MyOrder from '../MyOrder';
import NotFound from '../NotFound';
import Navbar from '../../components/Navbar';
import CheckoutSideMenu from '../../components/CheckoutSideMenu';
import './App.css'

const AppRoutes = () =>{
  const {account,signOut} = useContext(ShopContext);

  //getting account from localstorage
  const getAccount = localStorage.getItem('account');
  const parsedAccount = JSON.parse(getAccount);

  //getting signout from localStorage
  const getSignout = localStorage.getItem('sign-out');
  const parsedSignout = JSON.parse(getSignout);

  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0:true;
  const noAccountinState = account ? account.lenght ===0 : true;
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountinState;
  const isUserSignout = signOut || parsedSignout;


  let routes = useRoutes([
    {path:'/',element: hasUserAnAccount && !isUserSignout ? <Home/>: <Navigate replace to={'/sign-in'}/>},
    {path:'/:category',element: hasUserAnAccount && !isUserSignout ? <Home/>: <Navigate replace to={'/sign-in'}/>},
    {path:'/my-account',element:<MyAccount/>},
    {path:'/my-orders',element:<Myorders/>},
    {path:'/my-orders/last',element:<MyOrder/>},
    {path:'/my-orders/:id',element:<MyOrder/>},
    {path:'/sign-in',element:<Signin/>},
    {path:'/my-order',element:<MyOrder/>},
    {path:'/*',element:<NotFound/>},
  ])
  return routes;
}

function App() {
  initializeLocalStorage()
  return (
    <ShopProvider>
      <BrowserRouter>
        <AppRoutes/>
        <Navbar/>
        <CheckoutSideMenu/>
      </BrowserRouter>
    </ShopProvider>
  )
}

export default App;
