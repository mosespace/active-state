export default async function fetchproducts() {
  const response = await fetch('https://fakestoreapi.com/products?limit=12')
    return await response.json()
}
