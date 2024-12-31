import { Link } from 'react-router-dom'
import leftPlant from '../assets/left_plant.png'
import rightPlant from '../assets/right_plant.png'
import '../styles/Hero.css'
import Title from './Title'

type HeroProps = {
  title: string
  subtitle: string
  text: string
  link: string
}

const Hero = ({ title, subtitle, text, link }: HeroProps) => {
  return (
    <section className='hero-container'>
      <div className='hero-left'>
        <section className='hero'>
          <div className='flex-row'>
            <span className='bar'></span>
            <p className='subtitle'>{subtitle}</p>
          </div>
          <div className='title'>
            <Title title={title} />
          </div>
          <div className='text'>
            <p>{text}</p>
          </div>
          <Link className='button' to={link}>
            Shop now
          </Link>
        </section>

        <div className='left-bottom'>
          <Link to={'/about-us'} className='bottom-button'>
            Learn Gardening ➜
          </Link>
          <div id='left-plant'>
            <img src={leftPlant} alt='Leafs on the left side of the page' />
          </div>
        </div>
      </div>

      <aside>
        <img
          className='hero-right-plant'
          src={rightPlant}
          alt='A plant on the right side of the page'
        />
      </aside>
    </section>
  )
}
export default Hero
