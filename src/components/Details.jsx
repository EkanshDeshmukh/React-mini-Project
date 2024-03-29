import React from 'react'

const Details = () => {
    return (

        <div className='w-[70%] flex h-full p-[10%] m-auto justify-between'>
            <img className='object-contain h-[50%]' src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" />
            <div className='content'>
                <h1 className='text-4xl'>Fjallraven - Foldsack No.
                    1 Backpack, Fits 15 Laptops</h1>
                <h3>109.95</h3>
                <p>Your perfect pack for everyday use and walks in
                    the forest. Stash your laptop (up to 15 inches)
                    in the padded sleeve, your everyday</p>
                <h3>men's clothing</h3>
                <Link>Edit</Link>
                <Link>Delete</Link>
            </div>
        </div>

    )
}

export default Details