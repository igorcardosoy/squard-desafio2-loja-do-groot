import { Link } from 'react-router-dom'
import '../styles/Hero.css'
import Title from './Title'

type HeroProps = {
  title: string
  subtitle: string
  text: string
  link: string
}

/*
 * Props:
 * - title: The title of the hero section. The title can contain a bold part by wrapping it in **.
 * - subtitle: The subtitle of the hero section.
 * - text: The text of the hero section.
 * - link: The link to the shop page.
 */
const Hero = ({ title, subtitle, text, link }: HeroProps) => {
  return (
    <>
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
      <Link to={'/about-us'} className='bottom-button'>
        Learn Gardening ➜
      </Link>
    </>
  )
}
export default Hero
