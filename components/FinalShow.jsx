import React from 'react'
import Image from 'next/image'

export default function FinalShow({title, description, price, image, rating}) {
  return (
    <div className='singlePage'>
        <Image src={image} width={150} height={150} alt={title}/>
            <h1>{title}</h1>
            <p>{description}</p>
            <p>{price}</p>
            <p>{rating}</p>
</div>
  )
}
