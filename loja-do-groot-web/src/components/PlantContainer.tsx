import { FreeMode, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'
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
      <div className='slider-container'>
        <Swiper
          slidesPerView={1.5}
          spaceBetween={30}
          grabCursor={true}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2.5,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3.5,
              spaceBetween: 50,
            },
          }}
          modules={[FreeMode, Pagination]}
          className='mySwiper'>
          {plants.map(plant => (
            <SwiperSlide key={plant.plantId}>
              <PlantCard {...plant} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default PlantContainer
