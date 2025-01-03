import '../styles/TakeCareOfYourPlants.css'
import Icon from './Icon'
import TextContainer from './TextContainer'
import Title from './Title'

import image1 from '../assets/image_1.png'
import image2 from '../assets/image_2.png'
import image3 from '../assets/image_3.png'

import iconFertilizer from '../assets/fertilizer.svg'
import iconSun from '../assets/sun.svg'
import iconWater from '../assets/water.svg'

const TakeCareOfYourPlants = () => {
  return (
    <section className='take-care-container'>
      <div className='title-container'>
        <Title title='Steps To Take Care Of Your **Plants**' />
        <TextContainer text="By following these three steps - proper watering, appropriate sunlight, and providing essential nutrients - you'll be well on your way to maintaining healthy and thriving plants." />
      </div>

      <div className='columns-container'>
        <div className='column'>
          <div className='steps-container'>
            <div className='step'>
              <Icon name='Water Icon' icon={iconWater} />
              <Title title='Watering' />
              <TextContainer text='Water your plants when the top inch of soil feels dry to the touch. Avoid overwatering, as it can lead to root  dehydration.' />
            </div>

            <div className='image-container'>
              <img src={image1} alt='a' />
            </div>
          </div>
        </div>

        <div className='column'>
          <div className='steps-container'>
            <div className='step'>
              <Icon name='Sunlight Icon' icon={iconSun} />
              <Title title='Sunlight' />
              <TextContainer text='Most plants need adequate sunlight to thrive. Place your plants in areas that receive the appropriate amount of light for their specific needs' />
            </div>

            <div className='image-container'>
              <img src={image2} alt='a' />
            </div>
          </div>
        </div>

        <div className='column'>
          <div className='steps-container'>
            <div className='step'>
              <Icon name='Nutrients Icon' icon={iconFertilizer} />
              <Title title='Nutrients and Fertilizing' />
              <TextContainer text="Choose a suitable fertilizer based on the specific needs of your plants, whether it's a balanced or specialized formula." />
            </div>

            <div className='image-container'>
              <img src={image3} alt='a' />

              <TextContainer text="Our website offers a wide array of stunning plants, ranging from vibrant flowers to lush indoor foliage, allowing you to create your very own green oasis. In addition to our extensive plant selection, we also provide gardening kits and fertilizers to equip you with everything you need to nurture your plants and achieve gardening success. But we don't stop there! We believe that knowledge is the key to a thriving garden, so we offer a wealth of information and resources on gardening techniques, plant care tips, and landscaping ideas. Whether you're a seasoned gardener or just starting your green journey, our goal is to inspire and support you every step of the way. Get ready to explore our virtual garden and discover the joys of gardening with us!" />
              <a href='' className='button'>
                See more photos
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default TakeCareOfYourPlants
