import {useState, useEffect} from 'react';
import Card from "../../components/Card";
import Layout from "../../components/Layout";

function Home(){
    const [products,setProducts] = useState(null);

    useEffect(() =>{
        const fetchData = async () =>{
            try{
                const response = await fetch('https://api.escuelajs.co/api/v1/products');
                const data = await response.json();
                const filteredProducts = data.slice(0,20);
                setProducts(filteredProducts)
            }catch(error){
                console.error(`Opps ocurrio un error ${error}`)
            }
        }
        fetchData();
    },[])

    return(
        <Layout>
            <p>Home</p>
            <div className='grid grid-cols-4 gap-y-6 gap-x-4 w-full max-w-screen-lg'>
                { 
                    products?.map((product) =>(
                        <Card key={product.id} {...product}/>
                    ))
                }
            </div>
        </Layout>
    );
}

export default Home;