import logo from "../assets/logo.svg";
import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsopen] = useState(false);
  return (
      <nav>
        <div className="bg-sky-500 text-white text-center w-full text-sm p-2">
          <p>
            The health and well-being of our patients and their health care team
            will always be our priority, so we follow the best practices for
            cleanliness.
          </p>
          </div>
          <div className="flex justify-between bg-[#E7F0FF] px-6 md:px-10 gap-10">
            <div className="flex items-center justify-between py-5">
            <img src={logo} alt="logo.svg" className="w-[100px] md:w-[120px]"/>
          </div>
          <div className="hidden md:flex items-center justify-end font-poppins font-semibold text-nowrap flex-wrap py-5 gap-5">
            <p>Find Doctors</p>
            <p>Hospitals</p>
            <p>Medicines</p>
            <p>Surgeries</p>
            <p>Software for Provider</p>
            <p>Facilities</p>
            <button className="bg-sky-500 rounded-md px-4 py-3 text-white">
              My Bookings
            </button>
          </div>
        {/*mobile hamburger */}
        <button className="md:hidden block text-2xl font-poppins font-semibold" onClick={() => setIsopen(!isOpen)}>
          {isOpen ? 'X':'☰'}
        </button>
        </div>
        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="flex flex-col gap-4 font-poppins font-semibold items-center bg-[#E7F0FF] px-6 py-4 md:hidden">
            <div>Find Doctors</div>
            <div>Hospitals</div>
            <div>Medicines</div>
            <div>Surgeries</div>
            <div>Software for Provider</div>
            <div>Facilities</div>
            <button className="font-poppins bg-sky-500 rounded-md px-5 py-2 text-white">
              My Bookings
            </button>
          </div>
        )}
      </nav>
  );
}
