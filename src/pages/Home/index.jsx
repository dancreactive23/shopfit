import {useState, useEffect} from 'react';
import Card from "../../components/Card";
import Layout from "../../components/Layout";
import ProductDetail from '../../components/ProductDetail';

function Home(){
    const [products,setProducts] = useState(null);

    useEffect(() =>{
        const fetchData = async () =>{
            try{
                const response = await fetch('https://fakestoreapi.com/products');
                const data = await response.json();
                setProducts(data)
            }catch(error){
                console.error(`Opps ocurrio un error ${error}`)
            }
        }
        fetchData();
    },[])

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