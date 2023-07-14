import {React,useContext} from 'react'
import { ShopContext } from '../../Context'
import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import OrderCard from '../../components/OrderCard'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'


function MyOrder() {

  const {order} = useContext(ShopContext);
  const currentPath = window.location.pathname
  const index = currentPath.match(/\/([^/]+)\/?$/)[1];
  let orderItem = index === 'last' ? order?.at(-1) : order?.[index];

  return (
    <Layout>
        <div className='mb-6 flex justify-between items-center w-9/12 px-6'>
          <Link to='/my-orders'>
            <ChevronLeftIcon className='w-6 h-6 stroke-1 stroke-neutral-950 cursor-pointer hover:stroke-orange-600 hover:text-orange-600'/>
          </Link>
          <h1 className='font-medium text-xl'>My order</h1>
      </div>
        <div className='px-6 pb-3 space-y-3 overflow-y-auto overflow-x-hidden w-9/12 h-full'>
        {
            orderItem.products.map(product =>(
              <OrderCard id={product.id} key={product.id} image={product.image} title={product.title} price={product.price}/>
            ))
        }
          <p className='flex justify-between items-center mb-3'>
              <span className='font-light text-orange-800'>Total:</span>
              <span className='font-medium text-2xl '>${orderItem.totalPrice}</span>
          </p>
        </div>
    </Layout>
  )
}

export default MyOrder