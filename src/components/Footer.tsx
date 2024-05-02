import React from 'react'

export const Footer = () => {
  return (
   <div className='mt-32  bg-slate-800 text-white '>
    <div className='container mx-auto flex justify-around p-20'>
          <div  className="max-w-sm">
          <h1 className=' font-extrabold text-3xl py-4'>My <span className='text-pink-500'>Shop</span></h1>
          <p className='text-14'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, exercitationem? Nisi laudantium distinctio ipsum fugiat quidem autem blanditiis cum maxime ab animi facere quam molestias veritatis.</p>
          </div>
            <div  className="max-w-sm">
              <h1 className='text-2xl pb-4 font-semibold'>Links</h1>
             <ul className='flex flex-col text-[18px]'>
              <a href="">Home</a>
              <a href="">Shop</a>
              <a href="">About</a>
              <a href="">Contact</a>
             </ul>
            </div>
            <div  className="max-w-sm">
            <h1 className='text-2xl pb-4 font-semibold'>Contact Us</h1>
            <button className='bg-blue-400 rounded py-2 px-4 shadow'>Join Our Newsletter</button>
            </div>
    </div>

     <div className='bg-black p-6 text-white text-center'>
        <h1>All Resersed Right 2024 By Muhammad Imran Khan</h1>
    </div>
   </div>
  )
}
