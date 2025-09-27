import Ahmad from "../assets/div.med-stl-3-photo_Ahmad.svg";
import Ankur from "../assets/div.med-stl-3-photo_Ankur.svg";
import Heena from "../assets/div.med-stl-3-photo_Heena.svg";
import { nanoid } from "nanoid";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function MedicalTeam() {
  const items = [
    {
      img: Ankur,
      name: "Dr. Daniel Hull",
      category: "Medicine",
    },
    {
      img: Ahmad,
      name: "Dr. Ahmad Khan",
      category: "Neurologist",
    },
    {
      img: Heena,
      name: "Dr. Heena Sachdeva",
      category: "Orthopadics",
    },
    {
      img: Ankur,
      name: "Dr.Ankur Sharma",
      category: "Medicine",
    },
    {
      img: Heena,
      name: "Dr. Patricia Harmon",
      category: "Medicine",
    },
    {
      img: Ankur,
      name: "Dr. Rubeus Hagrid",
      category: "Neurologist",
    },
    {
      img: Heena,
      name: "Dr. Hermione Granger",
      category: "Orthopadics",
    },
    {
      img: Ahmad,
      name: "Dr. Albus Dumbledore",
      category: "Medicine",
    },
    {
      img: Ankur,
      name: "Dr. Severus Snape",
      category: "Medicine",
    }
  ];
  return (
    <div>
      <div>
        <h1 className="font-semibold font-poppins text-4xl pt-10 text-[#1B3C74]">
          Our Medical Specialist
        </h1>
        <Swiper
          spaceBetween={1}
          slidesPerView={5}
          pagination={{dynamicBullets:true}}
          freeMode={true}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          {items.map((card) => (
            <SwiperSlide key={nanoid()} className="py-10">
                <img src={card.img} alt={card.name} className="drop-shadow-xl " />
                <h6 className="font-poppins text-[#1B3C74] -mt-5">{card.name}</h6>
                <p className="text-[#2AA7FF]">{card.category}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
