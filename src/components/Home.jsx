import React, { useContext, useEffect, useState } from 'react';
import Nav from './Nav'
import { Link, useLocation } from 'react-router-dom'
import { ProductContext } from '../utils/Context'
import Loading from '../components/Loading'
import axios from '../utils/axios';


const Home = () => {
    const { products } = useContext(ProductContext)
    const { search } = useLocation()
    const category = decodeURIComponent(search.split('=')[1])

    const [filterProducts, setfilterProducts] = useState(null)

    const getProductCategory = async () => {
        try {
            const { data } = await axios(`/products/category/${category}`)
            setfilterProducts(data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (!filterProducts) setfilterProducts(products)
        if(category != "undefined") getProductCategory();
    }, [category,products]);

    console.log(filterProducts);

    return products ? (
        <>
            <Nav />
            <div className='w-[85%] h-full flex justify-center flex-wrap overflow-x-hidden overflow-y-auto p-10'>
                {products.map((product) => (
                    < Link key={product.id} to={`/details/${product.id}`} className='w-64 h-80 border justify-center items-center flex-col mr-3 mb-3 shadow rounded'>
                        <div style={{ backgroundImage: `url(${product.image})` }}
                            className='w-full cursor-pointer mb-5 h-3/4 bg-contain bg-no-repeat hover:scale-105 bg-center'>
                        </div>
                        <h1 className='text-center h-12 overflow-hidden text-zinc-500 font-semibold'>{product.title}</h1>
                    </Link>
                ))}
            </div>
        </>
    ) : (<Loading />)
}

export default Home