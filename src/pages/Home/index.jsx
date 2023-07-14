import {useContext} from 'react';
import Card from "../../components/Card";
import Layout from "../../components/Layout";
import ProductDetail from '../../components/ProductDetail';
import { ShopContext } from '../../Context';

function Home(){
    
    const {products,setSearchByTitle} = useContext(ShopContext);

    const handleOnChange = (event) =>{
        setSearchByTitle(event.target.value);
    }

    return(
        <Layout>
            <p className='font-medium text-xl mb-4'>¡Find what fits you!</p>
            <input onChange={handleOnChange} className='w-2/6 mb-6 border-[1px] px-6 py-2 border-orange-300 rounded-lg outline-orange-500 text-center' type='text' placeholder='Search for your fit' />
            <div className='grid grid-cols-4 gap-y-10 gap-x-4 w-full max-w-screen-lg'>
                { 
                    products?.map((product) =>(
                        <Card key={product.id} {...product}/>
                    ))
                }
            </div>
            <ProductDetail/>
        </Layout>
        
    );
}

export default Home;