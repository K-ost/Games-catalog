import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import { screenshot } from '../../helpers/interfaces'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './gallery.scss'

interface IGallery {
  screenshots: screenshot[] | null
}

const Gallery: React.FC<IGallery> = ({ screenshots }) => {
  return (
    <div className="gallery">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {screenshots?.map(img => (
          <SwiperSlide key={img.id}>
            <img src={img.image} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Gallery