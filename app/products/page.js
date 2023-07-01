// import Image from 'next/image'
import React from 'react'
import getproducts from '../libs/getproducts'
import ProductCard from '@/components/ProductCard'
import Link from 'next/link'

export default async function products() {
    const data= await getproducts()
    // console.log(data) //This data was working properly.
return (
    <section>
      <div className='products'>
        {data.map((product) => {
            return (
                <ProductCard
                key={product.id}
                title={product.title}
                description={product.description}
                img={product.image}
                id={product.id}/>
            )
        })}
            <Link href= "./">Go Back to Home Page</Link>
      </div>
    </section>
)
}