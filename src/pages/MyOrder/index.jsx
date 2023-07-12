import {React,useContext} from 'react'
import { ShopContext } from '../../Context'
import Layout from '../../components/Layout'
import OrderCard from '../../components/OrderCard'

function MyOrder() {

  const {order} = useContext(ShopContext);
  const lastProduct = order?.at(-1);
  return (
    <Layout>
        <p>MyOrder</p>
        <div className='px-6 pb-3 space-y-3 overflow-y-auto overflow-x-hidden w-9/12 h-full'>
        {
            lastProduct.products.map(product =>(
              <OrderCard id={product.id} key={product.id} image={product.image} title={product.title} price={product.price}/>
            ))
        }
          <p className='flex justify-between items-center mb-3'>
              <span className='font-light text-orange-800'>Total:</span>
              <span className='font-medium text-2xl '>${lastProduct.totalPrice}</span>
          </p>
        </div>
    </Layout>
  )
}

export default MyOrder