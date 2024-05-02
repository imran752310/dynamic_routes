import Link from "next/link";
import React from "react";
import Image from "next/image";


interface ProductsProps{
  _id : number,
  title : string,
  description : string,
  image: string,
  price: number,
  previousPrice: number,
  isNew :  boolean,
  category: string,
  brand : string
}

interface Props{
  products : ProductsProps[];
}



export default async function Page() {
  const response = await fetch('https://jsonserver.reactbd.com/phone');
  const { products } = await response.json();
  console.log({ products });

  return (
    <div>
      {products.map((item: ProductsProps) => (
        <div key={item._id} className="border-[1px] shadow-sm rounded-md m-7 overflow-hidden hover:shadow-xl">
          <Link href={`/id/${item._id}`}>
            <a>
              <Image src={item.image} width={500} height={500} alt="Product image" className="w-full h-80 object-contain" />
            </a>
          </Link>
          <div className="px-6 pb-2 text-sm">
            <p className="text-gray-600">{item.title}</p>
            <p className="font-bold">${item.price}</p>
            <div className="flex justify-between py-3">
              <button className="bg-pink-500 p-2 text-white hover:bg-pink-700">Add To Cart</button>
              <Link href={`/id/${item._id}`}>
                <a className="uppercase">More Info</a>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
