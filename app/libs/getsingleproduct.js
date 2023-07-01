
export default async function getSingleProduct(id) {
    const singleproduct = await fetch(`https://fakestoreapi.com/products/${id}`)
    return await singleproduct.json()
}

