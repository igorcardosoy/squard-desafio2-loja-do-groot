import PlantCard from '../components/PlantCard'
import '../styles/Home.css'

const Home = () => {
  return (
    <div className='home'>
      <div className='plants-container'>
        <PlantCard plantId='1' plantName='Plant 1' price={15} />
        <PlantCard plantId='2' plantName='Plant 2' price={20} oldPrice={25} />
      </div>
    </div>
  )
}
export default Home
