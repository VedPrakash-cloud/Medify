import Hero from "../assets/hero_image.svg";
import { Link } from "react-router-dom";

export default function HeroCard() {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between bg-blue-50 px-20">
        <div className="text-start font-poppins font-semibold flex flex-col md:justify-center">
          <h1 className="font-medium text-lg mb-2">
          Skip the travel! Find Online
        </h1>
        <div>
          <span className="font-bold text-3xl md:text-4xl tracking-wide">
          Medical{" "}
        </span>
        <span className="font-bold font-poppins text-3xl md:text-4xl text-sky-500 tracking-wide">
          Centers
        </span>  
        </div>
        <p className="text-neutral-500 my-3 max-w-md md:max-w-lg">
          Connect instantly with a 24x7 specialist or choose to video visit a
          particular doctor.
        </p>
        <Link to="search">
          <button className="bg-sky-500 px-5 py-2 text-white w-min text-nowrap rounded-xl mt-3">
            Find Centers
          </button>
        </Link>
        </div>
        <img src={Hero} alt="hero.svg" />
      </div>
    </div>
  );
}
