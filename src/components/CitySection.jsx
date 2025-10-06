import React, { useRef } from "react";
import { HiOutlineHeart, HiChevronLeft, HiChevronRight } from "react-icons/hi";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Card({ item }) {
  return (
    /*
      Responsive sizing per request:
      - Mobile: fluid (w-full) with 4:3 crop
      - Small tablet (>=640px / sm): w-48 (192px)
      - Medium (>=768px / md): w-56 (224px) and square image
      - Large (>=1024px / lg): w-64 (256px)
    */
    <div className="w-full sm:w-48 md:w-56 lg:w-64 relative">
      <div className="rounded-xl overflow-hidden bg-gray-100 relative">
        <div className="w-full aspect-[4/3] md:aspect-square bg-gray-100 overflow-hidden">
          <img src={item.img} alt={item.title || "listing"} className="w-full h-full object-cover" />
        </div>
        <div className="absolute left-3 top-3 bg-white px-2 py-1 rounded-full text-xs font-medium shadow">
          Guest favorite
        </div>
        <button className="absolute right-3 top-3 bg-white rounded-full p-1 shadow">
          <HiOutlineHeart className="w-5 h-5 text-gray-700" />
        </button>
      </div>
      <div className="mt-2 text-sm font-medium truncate h-5">{item.title}</div>
      <div className="text-xs text-gray-500 h-4">{item.price} {item.nights} • ★ {item.rating}</div>
    </div>
  );
}

export default function CitySection({ city, items }) {
  const swiperRef = useRef(null);

  // overlay arrows are used for md+; `alwaysShowArrows` still controls small-screen arrow visibility if needed elsewhere

  const scrollByAmount = (dir = "next") => {
    const s = swiperRef.current;
    if (s && typeof s.slideNext === "function") {
      if (dir === "next") s.slideNext();
      else s.slidePrev();
      return;
    }
    // fallback: if swiper not available, no-op
  };

  return (
  <section className=" px-4 sm:px-6 lg:px-8 my-8 ">
      <div className="mb-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Popular homes in {city}</h3>
          {/* arrows next to the header on md+ */}
          <div className="hidden md:flex items-center gap-2 ">
            <button
              onClick={() => scrollByAmount("prev")}
              aria-label={`Scroll ${city} left`}
              className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300"
            >
              <HiChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            <button
              onClick={() => scrollByAmount("next")}
              aria-label={`Scroll ${city} right`}
              className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300"
            >
              <HiChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>
      </div>

      {/* Swiper for all sizes: responsive slidesPerView up to 6 on large screens */}
      {/* Small screens: stacked column-wise list */}
      <div className="md:hidden">
        <div className="py-2 space-y-4">
          {Array.isArray(items) && items.map((it, i) => (
            <div key={i} className="w-full">
              <Card item={it} />
            </div>
          ))}
        </div>
      </div>

      {/* md+ Swiper: md = 3 slides, lg = 6 slides */}
      <div className="hidden md:block relative">
        <Swiper
          className="w-full"
          onSwiper={(s) => {
            swiperRef.current = s;
            // ensure layout recalculation after init
            setTimeout(() => {
              try {
                s.update();
              } catch (err) {
                console.debug("swiper update error:", err);
              }
            }, 0);
          }}
          observer={true}
          observeParents={true}
          loop={false}
          watchOverflow={true}
          spaceBetween={16}
          slidesPerView={1}
          slidesPerGroup={1}
            breakpoints={{
              // sm: >=640px -> 2 per view
              640: { slidesPerView: 2, slidesPerGroup: 2 },
              // md: >=768px -> 3 per view
              768: { slidesPerView: 3, slidesPerGroup: 3 },
              // lg: >=1024px -> 3 per view (follow md)
              1024: { slidesPerView: 3, slidesPerGroup: 3 },
            }}
        >
          {Array.isArray(items) && items.map((it, i) => (
            <SwiperSlide key={i} className="!w-auto flex justify-center">
              <Card item={it} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* arrows moved to header; overlay removed */}
      </div>
    </section>
  );
}
