import React, { useContext } from 'react';
import { ProductContext } from '../utils/Context';


const Nav = () => {

  const { products } = useContext(ProductContext)
  let distinct_category = products.reduce((acc, cv) => [...acc, cv.category], [])
  distinct_category = [...new Set(distinct_category)]
  console.log(distinct_category);

  return (
    <div className='w-[15%] h-full'>
      <nav className='h-screen w-full bg-zinc-50 flex flex-col items-center py-10 '>
        <a className='py-2 px-5 border font-semibold border-blue-200 text-blue-300 rounded' href="/create">Add New Product</a>
        <hr className='w-3/4 my-3' />
        <h1 className='text-xl ml-8 mb-3 w-3/4 '>Category Filter</h1>
        <ul className='w-3/4 '>
          <li className='flex items-center gap-2 mb-3 pl-5 '>
            <span className='rounded-full w-3 h-3 bg-blue-400'></span>
            cat-1
          </li>
          <li className='flex items-center gap-2 mb-3 pl-5 '>
            <span className='rounded-full w-3 h-3 bg-blue-400'></span>
            cat-1
          </li>
          <li className='flex items-center gap-2 mb-3 pl-5 '>
            <span className='rounded-full w-3 h-3 bg-blue-400'></span>
            cat-1
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav