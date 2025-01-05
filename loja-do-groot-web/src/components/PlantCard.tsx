import { Link } from 'react-router-dom'
import { Plant } from '../models/Plant'
import '../styles/PlantCard.css'

const PlantCard = ({ name, price, id, discountPercentage, imgUrl }: Plant) => {
  return (
    <div className='plant-card'>
      <img
        className='plant-image'
        src={
          imgUrl.includes('example') ? 'https://placehold.co/500x500' : imgUrl
        }
        alt='plant'
      />

      <div className='plant-info'>
        <h1 className='plant-name'>{name}</h1>
        <div className='price-container'>
          <span className='price'>
            ${' '}
            {discountPercentage > 0
              ? (price - (price * discountPercentage) / 100).toFixed(2)
              : price}
          </span>
          {discountPercentage > 0 ? (
            <span className='old-price'>${price}</span>
          ) : (
            ''
          )}
        </div>
        <Link className='plant-button' to={`/product/${id}`}>
          View Product{' '}
        </Link>
      </div>
    </div>
  )
}
export default PlantCard
