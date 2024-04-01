import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from '../utils/axios'
import Loading from './Loading'


const Details = () => {
    const [product, setProduct] = useState(null)
    const { id } = useParams()

    const getSingleProduct = async () => {
        try {
            const { data } = await axios(`/products/${id}`)
            console.log('Fetched Product:', data);
            setProduct(data)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getSingleProduct();
    }, [])

    return product ? (

        <div className='w-[70%]  flex items-center gap-10 h-full p-[10%] m-auto justify-between'>
            <img className='object-contain   h-[60%]' src={`${product.image}`} alt="" />
            <div className='content ml-10'>
                <h1 className='text-4xl mt-10' >{product.title}</h1>
                <h3 className='mt-5 mb-3 text-red-400 text-xl'>$ {product.price}</h3>
                <p className='mb-3 text-base'>{product.description}</p>
                <h3 className='text-2xl text-blue-500'>{product.category}</h3>


            </div>
        </div>

    ) : (<Loading />)
}

export default Details