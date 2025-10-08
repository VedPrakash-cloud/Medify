import HospitalCard from "./HospitalCard";
import { useState, useEffect } from "react";
import Advertisment from "../assets/Advertisment.svg";

export default function BookingDetails() {
  const [bookings, setBookings] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const storedData = localStorage.getItem("BookingDetails");
    if (storedData) {
      setBookings(JSON.parse(storedData));
    }
  }, []);

  const handleSearch = bookings.filter((item)=>
    item.hospital["Hospital Name"].toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      <div className="flex justify-between relative px-10 py-10 items-end rounded-b-2xl mb-20 bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600">
        <h1 className="text-4xl font-semibold absolute bottom-2 text-white font-poppins">
          My Bookings
        </h1>
        <div className="w-2/4 py-5 px-6 font-poppins rounded-lg bg-white absolute right-20 top-8 flex items-center gap-5 justify-start">
          <input
            type="text"
            placeholder="search By Hospital"
            className="bg-blue-50 px-2 py-3 rounded-xl w-3/4 shadow-md outline-none"
            onChange={(e)=>setSearch(e.target.value)}
          />
          <button
            type="button"
            className="bg-sky-500 font-semibold text-lg text-white py-2 shadow-md px-10 rounded-xl"
          >
            Search
          </button>
        </div>
      </div>
      <div className="flex gap-8 mx-8 justify-center">
        <div className="w-3/5">
        <ul>
          {handleSearch.length > 0 ? (
            handleSearch.map((booking) => (
                <li
                key={booking.hospital["Provider ID"]}
                >
              <HospitalCard
                data={booking}
                isBookingPage={true}
              />
              </li>
            ))
          ) : (
            <p>No Booking found</p>
          )}
          </ul>
        </div>
        <div className="w-[450px]">
          <img src={Advertisment} alt="Add.svg" />
        </div>
      </div>
    </div>
  );
}
