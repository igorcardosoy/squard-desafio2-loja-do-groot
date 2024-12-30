import { Link } from 'react-router-dom'
import '../styles/PlantCard.css'

export type Plant = {
  plantName: string
  price: number
  plantId: string
  oldPrice?: number
}

const PlantCard = ({ plantName, price, plantId, oldPrice }: Plant) => {
  return (
    <div className='plant-card'>
      <img
        className='plant-image'
        src='https://placehold.co/388x388'
        alt='plant'
      />

      <div className='plant-info'>
        <h1 className='plant-name'>{plantName}</h1>
        <div className='price-container'>
          <span className='price'>${price.toFixed(2)}</span>
          {oldPrice && (
            <span className='old-price'>${oldPrice.toFixed(2)}</span>
          )}
        </div>
        <Link className='plant-button' to={`/product/${plantId}`}>
          View Product{' '}
        </Link>
      </div>
    </div>
  )
}
export default PlantCard
