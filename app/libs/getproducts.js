import React from 'react'

export default async function getproducts() {
  const response = await fetch('https://fakestoreapi.com/products?limit=12')
    return await response.json()
}
