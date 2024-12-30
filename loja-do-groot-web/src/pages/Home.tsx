import rightPlant from '../assets/right_plant.png'
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
  ]

  return (
    <div className='home'>
      <section className='hero-container'>
        <div className='hero-left'>
          <Hero
            title='Discover Your **Green** Side'
            subtitle='Love for Nature'
            text='We are your one-stop destination for all things green and growing. Our website offers a wide array of stunning plants, ranging from vibrant flowers  to lush indoor foliage, allowing you to create your very own green oasis. '
            link='/products '
          />
        </div>

        <aside>
          <img className='hero-right-plant' src={rightPlant}></img>
        </aside>

        {/* <Link to={'/about-us'}>Learn Gardening</Link> */}
      </section>
      <PlantContainer
        plants={plants}
        title='This Weeks Most Popular **And Best Selling**'
      />
    </div>
  )
}
export default Home
