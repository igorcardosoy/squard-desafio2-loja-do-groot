import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Button from '../components/Button'
import Title from '../components/Title'
import { Plant } from '../models/Plant'
import '../styles/Product.css'

const Product = () => {
  const { id } = useParams<{ id: string }>()
  const [product, setProduct] = useState<Plant>({} as Plant)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await axios.get(`http://localhost:3000/plants/${id}`)
      setProduct(response.data)
      setLoading(false)
    }

    fetchProduct()
  }, [id])

  if (loading) return <div>Loading...</div>

  return (
    <div className='product-container'>
      <div className='product-image'>
        <img
          src={
            product.imgUrl.includes('example')
              ? 'https://placehold.co/500x500'
              : product.imgUrl
          }
          alt='plant'
        />
      </div>
      <div className='product-info'>
        <div>
          <Title title={product.name} />
          <h2 className='subtitle lato'>{product.subtitle}</h2>
        </div>
        <div className='labels'>
          {product.plantTypes.map(plantType => (
            <span key={plantType.id} className='label lato'>
              {plantType.name.toLowerCase()}
            </span>
          ))}
        </div>
        <div className='price lato'>
          {product.discountPercentage > 0 ? (
            <>
              <span>
                {'$' +
                  (
                    product.price *
                    (1 - product.discountPercentage / 100)
                  ).toFixed(2)}
              </span>
            </>
          ) : (
            <span>{'$' + product.price}</span>
          )}
          {product.discountPercentage > 0 ? (
            <span className='line-through'>
              {'$' + product.price.toFixed(2)}
            </span>
          ) : (
            ''
          )}
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
