import Hero from "../assets/hero_image.svg";

export default function HeroCard() {
  return (
    <div>
      <div
        className="bg-no-repeat bg-right-bottom h-[700px] text-start p-20 bg-[#E7F0FF]"
        style={{ backgroundImage: `url(${Hero})` }}
      >
        <h1 className="font-poppins font-medium text-xl leading-snug">
          Skip the travel! Find Online
        </h1>
        <span className="font-bold text-4xl font-poppins tracking-wide">
          Medical{" "}
        </span>{" "}
        <span className="font-bold font-poppins text-4xl font-Poppins text-sky-500 tracking-wide">
          Centers
        </span>
        <p className="text-neutral-500 font-poppins my-3 w-[450px]">
          Connect instantly with a 24x7 specialist or choose to video visit a
          particular doctor.
        </p>
        <button className="bg-sky-500 px-5 py-2 font-poppins text-white rounded-md mt-3">
          Find Centers
        </button>
      </div>
    </div>
  );
}
