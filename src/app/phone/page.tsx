"use Client"

import Link from "next/link";
import Image from "next/image";
import { CgShoppingCart } from "react-icons/cg";




export default async function Products() {

 const res = await fetch('https://jsonserver.reactbd.com/phone?limit=5');
const Products =await res.json();



  return (
    <div>
    <div className="text-center pt-24 pb-10">
        <h1 className="text-4xl font-bold"><i>Our</i> <span className="text-pink-500">Products</span></h1>
    </div>
  <div className="max-w-screen-1xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 ">
        
    {
      Products.map((item:any)=>(
            <Link href={`/product/${item._id}`} key={item._id} >
                <div className="border-[1px] shadow-sm rounded-md m-7 overflow-hidden hover:shadow-xl ">
                    <Image 
                    src={item?.image} 
                    width={500} 
                    height={500}  alt="images" 
                    className="w-full h-80 object-contain"/>
                    <div className="px-6 pb-2 text-sm">
                        <p className="text-gray-600">{item?.title}</p>
                        <p className="font-bold">${item?.price}</p>
                        <div className="flex justify-between py-3">
                            <button className="bg-pink-500 p-2 text-white hover:bg-pink-700"><CgShoppingCart className="w-5 h-5"/></button>
                            <button className="uppercase">More Info</button>
                        </div>
                    </div>
                </div>
            </Link>
        ))
    }
</div>
</div>
  )
}



