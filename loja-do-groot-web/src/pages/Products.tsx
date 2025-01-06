import axios from 'axios'
import { useEffect, useState } from 'react'
import PlantCard from '../components/PlantCard'
import { Plant } from '../models/Plant'
import '../styles/Products.css'

const Products = () => {
  const [products, setProducts] = useState<Plant[]>([])

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('http://localhost:3000/plants/')
      setProducts(response.data)
    }

    fetchData()
  })

  return (
    <div className='products'>
      {products.map(product => {
        return <PlantCard key={product.id} {...product} />
      })}
    </div>
  )
}
export default Products
