import React, { useContext } from 'react';
import Nav from './Nav'
import { Link } from 'react-router-dom'
import { ProductContext } from '../utils/Context'
import Loading from '../components/Loading'


const Home = () => {
    const { products } = useContext(ProductContext)


    return products ? (
        <>
            <Nav />
            <div className='w-[85%] h-full flex justify-center flex-wrap overflow-x-hidden overflow-y-auto p-10'>
                {products.map((product) => (
                    < Link to='/details/1' className='w-64 h-80 border justify-center items-center flex-col mr-3 mb-3 shadow rounded'>
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