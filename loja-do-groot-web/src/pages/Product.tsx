import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Title from '../components/Title'
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
    <div className='product-container'>
      <div className='product-image'>
        <img src='' alt='' />
      </div>
      <div className='product-info'>
        <div>
          <Title title={product.name} />
          <h2 className='subtitle'>{product.subtitle}</h2>
        </div>
        <div className='labels'>
          <span>{product.label}</span>
          <span>{product.type}</span>
        </div>
        <div className='price'>
          <span>{product.price}</span>
          {product.discountPercentage > 0 ? (
            <span>{product.discountPercentage}%</span>
          ) : (
            ''
          )}

          <button>Checkout</button>
        </div>

        <div className='features'>
          <h3>Features</h3>
          <p>{product.features}</p>
        </div>
        <div className='description'>
          <h3>Description</h3>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  )
}
export default Product
