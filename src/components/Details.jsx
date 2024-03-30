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

        <div className='w-[70%] flex h-full p-[10%] m-auto justify-between'>
            <img className='object-contain h-[50%]' src={`${product.image}`} alt="" />
            <div className='content'>
                <h1 className='text-4xl'>{product.title}</h1>
                <h3>$ {product.price}</h3>
                <p>Y{product.description}</p>
                <h3>{product.category}</h3>
                  

            </div>
        </div>

    ) : (<Loading />)
}

export default Details