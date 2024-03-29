import React from 'react'

const App = () => {
  return (
    <div className='w-full flex h-screen'>
      <nav className='h-full w-1/6 bg-zinc-100 flex flex-col items-center pt-5'>
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

      <div className='w-5/6 h-full flex flex-wrap overflow-x-hidden overflow-y-auto p-3 bg-gray-400'>
        <div className='w-64 h-80 border justify-center items-center flex-col mr-3 mb-3 shadow rounded'>
          <div style={{ backgroundImage: "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)" }}
            className='w-full cursor-pointer mb-5 h-3/4 bg-contain bg-no-repeat hover:scale-105 bg-center'>
          </div>
          <h1 className='text-center'>Lorem ipsum dolor sit amet.</h1>
        </div>
      </div>
    </div>
  )
}

export default App