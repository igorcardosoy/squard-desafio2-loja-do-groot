import Hero from '../components/Hero'
import PlantContainer from '../components/PlantContainer'
import '../styles/Home.css'

const Home = () => {
  const plants = [
    {
      plantId: '1',
      plantName: 'Plant 1',
      price: 15,
    },
    {
      plantId: '2',
      plantName: 'Plant 2',
      price: 20,
      oldPrice: 25,
    },
    {
      plantId: '3',
      plantName: 'Plant 3',
      price: 30,
    },
    {
      plantId: '4',
      plantName: 'Plant 4',
      price: 40,
    },
    {
      plantId: '5',
      plantName: 'Plant 5',
      price: 50,
    },
    {
      plantId: '6',
      plantName: 'Plant 6',
      price: 60,
    },
    {
      plantId: '7',
      plantName: 'Plant 7',
      price: 70,
    },
    {
      plantId: '8',
      plantName: 'Plant 8',
      price: 80,
    },
    {
      plantId: '9',
      plantName: 'Plant 9',
      price: 90,
    },
    {
      plantId: '10',
      plantName: 'Plant 10',
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

      <PlantContainer
        plants={plants}
        title='This Weeks Most Popular **And Best Selling**'
      />

      <PlantContainer plants={plants} title='**Plants In** Sale' />
    </div>
  )
}
export default Home
