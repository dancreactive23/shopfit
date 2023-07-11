import {useContext} from 'react';
import Card from "../../components/Card";
import Layout from "../../components/Layout";
import ProductDetail from '../../components/ProductDetail';
import { ShopContext } from '../../Context';

function Home(){
    
    const {products} = useContext(ShopContext);

    return(
        <Layout>
            <p>Home</p>
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