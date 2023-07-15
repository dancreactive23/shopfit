import {useContext} from 'react';
import Card from "../../components/Card";
import Layout from "../../components/Layout";
import ProductDetail from '../../components/ProductDetail';
import { ShopContext } from '../../Context';

function Home(){
    
    const {products,setSearchByTitle,searchByTitle,getIndex} = useContext(ShopContext);


    const handleOnChange = (event) =>{
        setSearchByTitle(event.target.value);
    }

    const productsByCategory = products.filter(product =>{
        return product.category.toLowerCase() === getIndex().toLowerCase();
    })

    const handleFilteredProducts = (products) => products.filter(product =>{
        return product.title.toLowerCase().includes(searchByTitle.toLowerCase());
    })
  

    const filteredProducts = () =>{
       return(productsByCategory?.length>0 ? handleFilteredProducts(productsByCategory)
        : handleFilteredProducts(products)
       )
    }
    
    const filteredProductLength = filteredProducts()?.length > 0;

    return(
        <Layout>
            {

            !products.length ? <h1>Loading....</h1> :

                <>
                    <div className='sticky top-16 w-2/6 mb-6 z-10 rounded-lg px-6 py-1 shadow-sm bg-slate-50/80'>
                        <p className='font-medium text-xl mt-4 mb-4 text-center text-neutral-900'>¡Find what fits you!</p>
                        <input onChange={handleOnChange} value={searchByTitle} className='w-full mb-6 border-[1px] px-6 py-2 border-orange-300 rounded-lg outline-orange-500 text-center' type='text' placeholder='Search for your fit' />
                    </div>
                    <div className={`${filteredProductLength ? "grid grid-cols-4 gap-y-10 gap-x-4 w-full max-w-screen-lg" : "text-center"}`}>
                        {       
                                filteredProductLength ?
                                    filteredProducts()?.map((product) =>(
                                        <Card key={product.id} {...product}/>
                                    ))
                                : <h1 className='text-center text-xl'>There is no coincidence</h1>
                        }
                    </div>
                    <ProductDetail/>
                </>
            }
        </Layout>
    )
        
}

export default Home;