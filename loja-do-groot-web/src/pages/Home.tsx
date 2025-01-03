import Hero from '../components/Hero'
import PlantContainer from '../components/PlantContainer'
import TakeCareOfYourPlants from '../components/TakeCareOfYourPlants'
import { Plant } from '../models/Plant'
import '../styles/Home.css'

const Home = () => {
  const plants = [
    {
      id: '1',
      name: 'Plant 1',
      price: 15,
    },
    {
      id: '2',
      name: 'Plant 2',
      price: 20,
      oldPrice: 25,
    },
    {
      id: '3',
      name: 'Plant 3',
      price: 30,
    },
    {
      id: '4',
      name: 'Plant 4',
      price: 40,
    },
    {
      id: '5',
      name: 'Plant 5',
      price: 50,
    },
    {
      id: '6',
      name: 'Plant 6',
      price: 60,
    },
    {
      id: '7',
      name: 'Plant 7',
      price: 70,
    },
    {
      id: '8',
      name: 'Plant 8',
      price: 80,
    },
    {
      id: '9',
      name: 'Plant 9',
      price: 90,
    },
    {
      id: '10',
      name: 'Plant 10',
      price: 100,
    },
  ]

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
        plants={plants as Plant[]}
        title='This Weeks Most Popular **And Best Selling**'
      />

      <PlantContainer plants={plants as Plant[]} title='**Plants In** Sale' />
    </div>
  )
}
export default Home
