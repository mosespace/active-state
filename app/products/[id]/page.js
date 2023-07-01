import React from 'react'
import FinalShow from '@/components/FinalShow'
import getSingleProduct from '@/app/libs/getsingleproduct'

export default async function singlepage({params:{id}}) {
  const product= await getSingleProduct(id)
  console.log(product)
  return (
      <FinalShow
        key={product.id}
        title={product.title}
        description={product.description}
        image={product.image}
        id={product.id}/>
    )
}
