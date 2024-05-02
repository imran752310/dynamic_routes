import React from 'react'
import image from '../../public/header.png'
import Image from 'next/image'
const Header = () => {
  return (
    <div>
        <Image src= {image} alt="Header Image" className='w-full h-full bg-cover' />
    </div>
  )
}

export default Header;