import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
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
      <div className="flex bg-transparent justify-between px-6 md:px-10 gap-10">
        <div className="flex items-center justify-between py-5">
          <Link to="/">
            <img src={logo} alt="logo.svg" className="w-[100px] md:w-[120px]" />
          </Link>
        </div>
        <div className="hidden md:flex w-full items-center justify-end font-poppins font-semibold text-nowrap flex-wrap py-5 gap-5">
          <Link>Find Doctors</Link>
          <Link to="search">Hospitals</Link>
          <Link>Medicines</Link>
          <Link>Surgeries</Link>
          <Link>Software for Provider</Link>
          <Link>Facilities</Link>
          <Link>
            <button className="bg-sky-500 rounded-md px-4 py-3 text-white">
              My Bookings
            </button>
          </Link>
        </div>
        {/*mobile hamburger */}
        <button
          className="md:hidden block text-2xl font-poppins font-semibold"
          onClick={() => setIsopen(!isOpen)}
        >
          {isOpen ? "X" : "☰"}
        </button>
      </div>
      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="flex flex-col gap-4 font-poppins font-semibold items-center bg-[#E7F0FF] px-6 py-4 md:hidden">
          <Link>Find Doctors</Link>
          <Link to="search">Hospitals</Link>
          <Link>Medicines</Link>
          <Link>Surgeries</Link>
          <Link>Software for Provider</Link>
          <Link>Facilities</Link>
          <Link>
            <button className="bg-sky-500 rounded-md px-4 py-3 text-white">
              My Bookings
            </button>
          </Link>
          </div>
      )}
    </nav>
  );
}
