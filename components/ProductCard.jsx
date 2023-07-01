import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function ProductCard({title, description, img, id}) {
  return (
    <section>
        <Image src={img} width={150} height={150} alt={title}/>
    <Link href={`/products/${id}`} className='links'><h1>{title}</h1></Link>
    
    <p>{description}</p>
   </section>
  )
}
