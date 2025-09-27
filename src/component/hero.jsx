import Hero from "../assets/hero_image.svg";

export default function HeroCard() {
  return (
    <div className="relative bg-[#E7F0FF]">
      <div
        className="relative bg-no-repeat bg-right bg-contain min-h-[500px] md:min-h-[700px] px-20 border md:px-20 text-start"
        style={{ backgroundImage: `url(${Hero})` }}
      >
        <div className="relative z-10 max-w-xl md:mt-20 mt-2">
          <h1 className="font-poppins font-medium leading-snug mb-2">
          Skip the travel! Find Online
        </h1>
        <span className="font-bold text-3xl md:text-4xl font-poppins tracking-wide">
          Medical{" "}
        </span>{" "}
        <span className="font-bold font-poppins text-3xl md:text-4xl font-Poppins text-sky-500 tracking-wide">
          Centers
        </span>
        <p className="text-neutral-500 font-poppins my-3 max-w-xs md:max-w-md">
          Connect instantly with a 24x7 specialist or choose to video visit a
          particular doctor.
        </p>
        <button className="bg-sky-500 px-5 py-2 font-poppins text-white rounded-md mt-3">
          Find Centers
        </button>
        </div>
      </div>
    </div>
  );
}
