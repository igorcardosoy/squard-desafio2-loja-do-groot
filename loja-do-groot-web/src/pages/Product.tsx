import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Plant, PlantLabel } from '../models/Plant'

const Product = () => {
  const { id } = useParams<{ id: string }>()
  const [product, setProduct] = useState<Plant>({} as Plant)

  useEffect(() => {
    const fetchProduct = async () => {
      const plant: Plant = {
        id: id ?? '',
        name: 'Plant name',
        subtitle: 'Plant subtitle',
        type: 'Plant type',
        price: 100,
        discountPercentage: 10,
        label: PlantLabel.Indoor,
        features: 'Plant features',
        description: 'Plant description',
      }

      setProduct(plant)
    }

    fetchProduct()
  }, [id])

  return (
    <div>
      <h1>Product {product.id}</h1>
      <h1>Name: ${product.name}</h1>
      <h2>Subtitle: ${product.subtitle}</h2>

      <h3>Price: ${product.price}</h3>
      <h3>Discount: ${product.discountPercentage}%</h3>
      <h3>Label: ${product.label}</h3>

      <h3>Features</h3>
      <p>${product.features}</p>

      <h3>Description</h3>
      <p>${product.description}</p>

      <button>Add to cart</button>
    </div>
  )
}
export default Product
