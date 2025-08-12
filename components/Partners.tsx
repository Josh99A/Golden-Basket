import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { partners } from '@/constants';



export default  function Partners() {

  

  const  PatnerSlider = ()=>{
    return <>
      <Swiper
        spaceBetween={30}
        slidesPerView= {3}
        loop={true}
        // centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper w-full"
      >
        {partners.map((logo, idx) => (
        <SwiperSlide key={idx}>
          <Image
          key={idx}
          src={logo}
          alt={`Partner ${idx + 1}`}
          width={120}
          height={80}
          className="object-contain  h-20 "
        />

        </SwiperSlide>
        
      ))}
          
      </Swiper>

      </>}

  
  return (
    <div className="flex gap-6">
      {PatnerSlider()}
    </div>
  );
}
