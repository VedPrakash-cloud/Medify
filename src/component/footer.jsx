import logo from "../assets/logo.svg";
import { FaFacebookF, FaTwitter, FaYoutube, FaPinterest } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="flex flex-col text-start items-center bg-[#1B3C74] p-6 md:p-10">
      <div className="flex justify-between w-3/4 font-poppins">
        <div className="flex flex-col justify-between w-min mb-3">
          <img
            src={logo}
            alt="medify.svg"
            className="object-contain h-min w-full"
          />
          <div className="flex gap-2 text-[#2AA7FF]">
            <FaFacebookF size={30} className="p-2 bg-white rounded-2xl"/>
            <FaTwitter size={30} className="p-2 bg-white rounded-2xl"/>
            <FaYoutube size={30} className="p-2 bg-white rounded-2xl"/>
            <FaPinterest size={30} className="p-2 bg-white rounded-2xl"/>
          </div>
        </div>
        <ol className="leading-10 text-white text-xs md:text-[16px] font-base md:font-semibold">
            <li>
                &gt; About us
            </li>
            <li>
                &gt; Our Pricing
            </li>
            <li>
                &gt; Our Gallery
            </li>
            <li>
                &gt; Appointment
            </li>
            <li>
                &gt; Privacy Policy
            </li>
        </ol>
        <ol className="leading-10 text-white text-xs md:text-[16px] font-base md:font-semibold">
            <li>
                &gt; Orthology
            </li>
            <li>
                &gt; Neurology
            </li>
            <li>
                &gt; Dental Care
            </li>
            <li>
                &gt; Opthalmology
            </li>
            <li>
                &gt; Cardiology
            </li>
        </ol>
        <ol className="leading-10 text-white text-xs md:text-[16px] font-base md:font-semibold">
            <li>
                &gt; About us
            </li>
            <li>
                &gt; Our Pricing
            </li>
            <li>
                &gt; Our Gallery
            </li>
            <li>
                &gt; Appointment
            </li>
            <li>
                &gt; Privacy Policy
            </li>
        </ol>
        </div>
        <p className="border-t border-[#FFFFFF1A] text-white text-xs font-poppins text-start w-3/4 py-5">Copyright &copy;2023 Surya Nursing Home.com. All Rights Reserved</p>
      </div>
  );
}
