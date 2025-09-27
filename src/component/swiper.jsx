import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode,Pagination } from "swiper/modules";
import Group from '../assets/Group 10.svg';
import Group1 from '../assets/Group 11.svg';
import "swiper/css";
import "swiper/css/pagination";


export default function SwiperCard(){
    return (
        <div>
        <Swiper
          spaceBetween={1}
          slidesPerView={3}
          pagination={{dynamicBullets:true}}
          freeMode={true}
          modules={[FreeMode,Pagination]}
          className="mySwiper mt-10"
        >
          <SwiperSlide>
            <img src={Group} alt="Doc.svg" className="brightness-[0.85] mb-5" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Group1} alt="Offer.svg" className="brightness-[0.85] mb-5" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Group} alt="Doc.svg" className="brightness-[0.85] mb-5" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Group1} alt="Offer.svg" className="brightness-[0.85] mb-5" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Group} alt="Doc.svg" className="brightness-[0.85] mb-5" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Group1} alt="Offer.svg" className="brightness-[0.85] mb-5" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Group} alt="Doc.svg" className="brightness-[0.85] mb-5" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Group1} alt="Offer.svg" className="brightness-[0.85] mb-5" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Group} alt="Doc.svg" className="brightness-[0.85] mb-5" />
          </SwiperSlide>
        </Swiper>
      </div>
    )
}