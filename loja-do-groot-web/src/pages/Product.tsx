import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Button from '../components/Button'
import Title from '../components/Title'
import { Plant, PlantType } from '../models/Plant'
import '../styles/Product.css'

const Product = () => {
  const { id } = useParams<{ id: string }>()
  const [product, setProduct] = useState<Plant>({} as Plant)
  const [loading, setLoading] = useState(true)
  const [plantTypes, setPlantTypes] = useState<PlantType[]>([])

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('http://localhost:3000/plant-types')
      setPlantTypes(response.data)
    }

    const fetchProduct = async () => {
      const response = await axios.get(`http://localhost:3000/plants/${id}`)
      console.log(response.data)
      setProduct(response.data)
    }

    const doFetch = async () => {
      await fetchData()
      await fetchProduct()

      setLoading(false)
    }

    doFetch()
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
          {product.plantTypeId
            ? plantTypes
                .filter(plantType => product.plantTypeId.includes(plantType.id))
                .map(plantType => (
                  <span key={plantType.id} className='label'>
                    {plantType.name}
                  </span>
                ))
            : ''}
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
          <p className='text'>
            {product.features
              .split('.')
              .slice(0, -1)
              .map((feature, index) => (
                <span key={index}>
                  • {feature}.
                  <br />
                </span>
              ))}
          </p>
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
