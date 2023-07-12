import {useRoutes,BrowserRouter} from 'react-router-dom';
import {ShopProvider} from '../../Context';
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
  let routes = useRoutes([
    {path:'/',element:<Home/>},
    {path:'/my-account',element:<MyAccount/>},
    {path:'/my-orders',element:<Myorders/>},
    {path:'/my-orders/last',element:<MyOrder/>},
    {path:'/sign-in',element:<Signin/>},
    {path:'/my-order',element:<MyOrder/>},
    {path:'/*',element:<NotFound/>},
  ])
  return routes;
}

function App() {

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
