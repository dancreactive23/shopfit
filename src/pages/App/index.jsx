import {useRoutes,BrowserRouter} from 'react-router-dom';
import Home from '../Home';
import MyAccount from '../MyAccount';
import Myorders from '../MyOrders';
import Signin from '../Signin';
import MyOrder from '../MyOrder';
import NotFound from '../NotFound';
import './App.css'

const AppRoutes = () =>{
  let routes = useRoutes([
    {path:'/',element:<Home/>},
    {path:'/my-account',element:<MyAccount/>},
    {path:'/my-orders',element:<Myorders/>},
    {path:'/sign-in',element:<Signin/>},
    {path:'/my-order',element:<MyOrder/>},
    {path:'/*',element:<NotFound/>},
  ])
  return routes;
}

function App() {

  return (
    <>
      <BrowserRouter>
        <AppRoutes/>
      </BrowserRouter>
    </>
  )
}

export default App;
