import '../styles/PlantContainer.css'
import PlantCard, { Plant } from './PlantCard'
import Title from './Title'

type PlantContainerProps = {
  plants: Plant[]
  title: string
}

const PlantContainer = ({ plants, title }: PlantContainerProps) => {
  return (
    <div className='plants-container'>
      <div className='title'>
        <Title title={title} />
      </div>
      <div className='plants'>
        {plants.map(plant => (
          <PlantCard
            key={plant.plantId}
            plantId={plant.plantId}
            plantName={plant.plantName}
            price={plant.price}
            oldPrice={plant.oldPrice}
          />
        ))}
        {/* 
        <PlantCard plantId='1' plantName='Plant 1' price={15} />
        <PlantCard plantId='2' plantName='Plant 2' price={20} oldPrice={25} /> */}
      </div>
    </div>
  )
}
export default PlantContainer
