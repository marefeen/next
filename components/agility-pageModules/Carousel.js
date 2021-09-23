// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

const Carousel = () => {
  return (
      <div className='container'>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide>
            <div className='h-96 w-50 bg-red'>Slide 0</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='h-96 w-50 bg-blue'>Slide 1</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='h-96 w-50 bg-orange'>Slide 2</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='h-96 w-50 bg-green'>Slide 3</div>
          </SwiperSlide>
        </Swiper>
      </div>
  )
}

export default Carousel