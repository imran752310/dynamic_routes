import React from 'react'
import Image from 'next/image'
import { CgShoppingCart } from 'react-icons/cg'

export default async function page({params}:{params:{id:string}}) {

  const response =  await fetch(`https://jsonserver.reactbd.com/accessories/${params.id}`)
  const Product = await response.json()

  return (
    <div className='container mx-auto mt-20 '>
      <div className='flex justify-center'>
        <div className='   w-1/2 '>
          <Image className='mx-auto bg-cover' alt='products' src={Product.image} width={400} height={200}></Image>
        </div>
        <div className=' w-1/2'>
            <div className='items-center mt-16'>
            <h1 className='text-2xl font-bold uppercase'>{Product.brand}</h1>
              <h1 className='text-2xl font-bold uppercase text-pink-600'>{Product.title}</h1>
            
             <div className='flex pb-10 pt-4'>
             
              <h2 className='text-sm font-semibold text-  line-through pr-5'>${Product.previousPrice}</h2>
              <h2 className='text-sm font-semibold text-green-700'>${Product.price}</h2>
             </div>
              <p>{Product.description}</p>
            </div>

            <button className="bg-pink-500 px-6 py-4 text-white hover:bg-pink-700 mt-5 "> Add  <CgShoppingCart className="w-5 h-5 inline-block"/></button>
                            
        </div>

      </div>
    </div>
  )
}
