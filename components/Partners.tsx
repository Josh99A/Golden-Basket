'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { partners } from '@/constants';

const partnerNames: Record<string, string> = {
  '/Images/dfcu_Foundation.png': 'dfcu Foundation',
  '/Images/hi_innovators.svg': 'NSSF Hi-Innovator',
  '/Images/Imuka-logo.png': 'Imuka Access',
};

export default function Partners() {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <Swiper
        spaceBetween={24}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 16 },
          640: { slidesPerView: 2, spaceBetween: 24 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper w-full pb-10"
      >
        {partners.map((logo, idx) => {
          const label = partnerNames[logo] || `Partner ${idx + 1}`;
          return (
            <SwiperSlide key={idx}>
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-[#e1bb3f]/40 hover:border-[#e1bb3f] hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center h-36 sm:h-40 group">
                <div className="relative flex items-center justify-center w-full h-20">
                  <Image
                    src={logo}
                    alt={label}
                    width={180}
                    height={80}
                    className="object-contain max-h-20 w-auto group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <span className="mt-3 text-xs font-semibold uppercase tracking-wider text-[#183113]/75">
                  {label}
                </span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

