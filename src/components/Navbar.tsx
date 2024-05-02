import Image from 'next/image'
import Link from 'next/link'
import { BiCartAdd, BiUser } from 'react-icons/bi'

export const Navbar = () => {
const navigation = [
  {
    _id : 0,
    title : 'Home',
    href: "/",
  },
  {
    _id : 1,
    title : 'Phone',
    href: "/phone",
  },
  {
    _id : 3,
    title : 'Phone Case',
    href: "/phoneCase",
  },
  {
    _id : 4,
    title : 'Watches',
    href: "/watches",
  },
  {
    _id : 5,
    title : 'Accessories',
    href: "/accessories",
  },

]

  return (
    <div className=' bg-black text-white h-20 p-6 '>
        <ul className='container mx-auto flex items-center flex-wrap justify-between uppercase '>
          <div >
            <h1 className=' font-extrabold text-3xl'>My <span className='text-pink-500'>Shop</span></h1>
          </div>
          <div>
          { 
            navigation.map((item)=>(
              <Link
             href={item?.href}
             key={item?._id} className=' p-7 '
             >
              {item?.title}</Link>
          )) }
          </div>
          <div>
              <div className='flex'>
                 <Link href={''}> <BiCartAdd className='mx-2 w-8 h-8 '/></Link>
                 <Link href={''}> <BiUser className='mx-2 w-8 h-8 '/></Link>
                
              </div>
          </div>
        </ul>
    </div>
  )
}
