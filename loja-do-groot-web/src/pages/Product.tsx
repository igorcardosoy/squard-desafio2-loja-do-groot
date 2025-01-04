import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import cactus from '../assets/cactus.png'
import Button from '../components/Button'
import Title from '../components/Title'
import { Plant, PlantLabel } from '../models/Plant'
import '../styles/Product.css'

const Product = () => {
  const { id } = useParams<{ id: string }>()
  const [product, setProduct] = useState<Plant>({} as Plant)
  const [loading, setLoading] = useState(true)

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
    setLoading(false)
  }, [id])

  if (loading) return <div>Loading...</div>

  return (
    <div className='product-container'>
      <div className='product-image'>
        <img src={cactus} alt='Cactus' />
      </div>
      <div className='product-info'>
        <div>
          <Title title={product.name} />
          <h2 className='subtitle lato'>{product.subtitle}</h2>
        </div>
        <div className='labels'>
          <span>{product.label.toLocaleLowerCase()}</span>
          <span>{product.type.toLocaleLowerCase()}</span>
        </div>
        <div className='price lato'>
          {product.discountPercentage > 0 ? (
            <span>
              {'$' +
                (
                  product.price *
                  (1 - product.discountPercentage / 100)
                ).toFixed(2)}
            </span>
          ) : (
            ''
          )}
          <span
            className={product.discountPercentage > 0 ? 'line-through' : ''}>
            {'$' + product.price.toFixed(2)}
          </span>
        </div>

        <div>
          <Button text='Check out' />
        </div>

        <div className='features lato'>
          <h3>Features</h3>
          <p className='text'>{product.features}</p>
        </div>
        <div className='description lato'>
          <h3>Description</h3>
          <p className='text'>{product.description}</p>
        </div>
      </div>
    </div>
  )
}
export default Product
