import React, { useRef } from 'react'
import { HiOutlineHeart, HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

function Card({item}){
  return (
    <div className="w-64 flex-shrink-0 mr-4 relative">
      <div className="rounded-xl overflow-hidden bg-gray-100 relative">
        <img src={item.img} alt="" className="w-full h-40 object-cover" />
        <div className="absolute left-3 top-3 bg-white px-2 py-1 rounded-full text-xs font-medium shadow">Guest favorite</div>
        <button className="absolute right-3 top-3 bg-white rounded-full p-1 shadow">
          <HiOutlineHeart className="w-5 h-5 text-gray-700" />
        </button>
      </div>
      <div className="mt-2 text-sm font-medium">{item.title}</div>
      <div className="text-xs text-gray-500">{item.price} {item.nights} • ★ {item.rating}</div>
    </div>
  )
}

export default function CitySection({city, items}){
  const swiperRef = useRef(null)

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Popular homes in {city}</h3>
        <div className="flex items-center gap-2">
          <button onClick={() => swiperRef.current && swiperRef.current.slidePrev()} aria-label={`Scroll ${city} left`} className="hidden md:inline-flex items-center justify-center w-9 h-9 rounded-full bg-white shadow">
            <HiChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
          <button className="text-sm text-gray-600">See all ›</button>
          <button onClick={() => swiperRef.current && swiperRef.current.slideNext()} aria-label={`Scroll ${city} right`} className="hidden md:inline-flex items-center justify-center w-9 h-9 rounded-full bg-white shadow">
            <HiChevronRight className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      </div>
      <Swiper
        onSwiper={(s) => (swiperRef.current = s)}
        spaceBetween={16}
        slidesPerView={'auto'}
        breakpoints={{
          320: { slidesPerView: 1.1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {items.map((it, i) => (
          <SwiperSlide key={i} style={{ width: '16rem' }}>
            <Card item={it} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
