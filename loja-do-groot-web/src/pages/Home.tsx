import axios from 'axios'
import { useEffect, useState } from 'react'
import Hero from '../components/Hero'
import PlantContainer from '../components/PlantContainer'
import TakeCareOfYourPlants from '../components/TakeCareOfYourPlants'
import { Plant } from '../models/Plant'
import '../styles/Home.css'

const Home = () => {
  const [plants, setPlants] = useState<Plant[]>([])

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('http://localhost:3000/plants/')
      setPlants(response.data)
    }

    fetchData()
  }, [])

  return (
    <div className='home'>
      <Hero
        title='Discover Your **Green** Side'
        subtitle='Love for Nature'
        text='We are your one-stop destination for all things green and growing. Our website offers a wide array of stunning plants, ranging from vibrant flowers  to lush indoor foliage, allowing you to create your very own green oasis. '
        link='/products '
      />

      <TakeCareOfYourPlants />

      <PlantContainer
        plants={plants}
        title='This Weeks Most Popular **And Best Selling**'
      />

      <PlantContainer
        plants={plants.filter(
          plant => plant.isInSale && plant.discountPercentage > 0
        )}
        title='**Plants In** Sale'
      />
    </div>
  )
}
export default Home
