import { Link } from 'react-router-dom'
import { Plant } from '../models/Plant'
import '../styles/PlantCard.css'

interface PlantCardsProps extends Plant {
  oldPrice?: number
}

const PlantCard = ({ name, price, id, oldPrice }: PlantCardsProps) => {
  return (
    <div className='plant-card'>
      <img
        className='plant-image'
        src='https://placehold.co/388x388'
        alt='plant'
      />

      <div className='plant-info'>
        <h1 className='plant-name'>{name}</h1>
        <div className='price-container'>
          <span className='price'>${price.toFixed(2)}</span>
          {oldPrice && (
            <span className='old-price'>${oldPrice.toFixed(2)}</span>
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
