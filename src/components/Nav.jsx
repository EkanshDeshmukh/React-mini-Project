import React, { useContext } from 'react';
import { ProductContext } from '../utils/Context';
import { Link } from 'react-router-dom';


const Nav = () => {

  const { products } = useContext(ProductContext)
  let distinct_category = products.reduce((acc, cv) => [...acc, cv.category], [])
  distinct_category = [...new Set(distinct_category)]

  const color = () => {
    return `rgba(${(Math.random() * 255).toFixed()},${(Math.random() * 255).toFixed()},${(Math.random() * 255).toFixed()},0.4)`
  }

  return (
    <div className='w-[15%] h-full'>
      <nav className='h-screen w-full bg-zinc-50 flex flex-col items-center py-10 '>
        <a className='py-2 px-5 border font-semibold border-blue-200 text-blue-300 rounded' href="/create">Add New Product</a>
        <hr className='w-3/4 my-3' />
        <h1 className='text-xl ml-8 mb-3 w-3/4 '>Category Filter</h1>
        {distinct_category.map((p, i) => (
          <Link className='font-semibold mb-3 flex items-center' key={i} to={`/?category=${p}`}>
            <span style={{ backgroundColor: color() }}
              className='rounded-full w-3 h-3 mr-3'></span> {' '}
            {p}
          </Link>
        ))}

      </nav>
    </div>
  )
}

export default Nav