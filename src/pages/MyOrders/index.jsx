import {React,useContext} from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import OrdersCard from '../../components/OrdersCard'
import { ShopContext } from '../../Context'

function Myorders() {

  const {order} = useContext(ShopContext)
  return (
    <Layout>
        <p className='mb-6'>My orders</p>
        {
          order.map((orderItem,index) =>(
            <Link key={index} to={`/my-orders/${orderItem.id}`}>
              <OrdersCard  date={orderItem.date} totalProducts={orderItem.totalProducts} totalPrice={orderItem.totalPrice}/>
            </Link>
          ))
        }
    </Layout>
  )
}

export default Myorders