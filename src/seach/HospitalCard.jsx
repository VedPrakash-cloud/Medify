import { useState } from "react";
import Hospital from "../assets/Hospital-Building.svg";
import Like from "../assets/Like.svg";
import Consultation from "../assets/consultation.svg";
import Dates from "./appointmentDate";

export default function Hospitals({ data, isBookingPage = false }) {
  const [isDate, setIsDate] = useState(false);
  const [slotsOpen, setSlotsOpen] = useState(false);

  const handleClick = () => {
    setIsDate((prev) => !prev);
    setSlotsOpen((prev) => !prev);
  };

  const hospitalInfo = data.hospital || data;

  const displayDate = data.date || data.bookingDate || "";
  const displayTime = data.time || data.bookngTime || "";

  return (
    <div className="mb-10">
      <div className="flex justify-between bg-white rounded-lg p-6 items-center shadow-lg">
        <div className="pr-2">
          <img src={Hospital} alt="hospitals.svg" />
        </div>
        <div className="font-poppins text-start w-80">
          <h3 className="text-sky-500 font-semibold mb-3">
            {hospitalInfo["Hospital Name"]}
          </h3>
          <span className="font-semibold text-sm">
            {hospitalInfo.City},{hospitalInfo.State}
          </span>
          <p className="text-sm">{hospitalInfo["Hospital Type"]}</p>
          <img src={Consultation} alt="fees.svg" />
          <img src={Like} alt="like_button.svg" />
        </div>
        {isBookingPage && (
          <div className="relative bottom-10 -mt-6 flex gap-2 items-center text-nowrap">
            <span className="border border-sky-500 text-sky-500 font-poppins px-3 rounded-sm">
              {displayTime}
            </span>
            <span className="border border-green-500 text-green-500 font-poppins px-3 rounded-sm">
              {displayDate}
            </span>
          </div>
        )}
        {!isBookingPage && (
          <div className="relative top-10">
            <p className="text-green-500 font-semibold text-[10px] md:text-sm">
              Available Today
            </p>
            <button
              className="bg-sky-500 text-white text-[10px] md:text-sm py-2 px-3 md:px-4 rounded-lg"
              onClick={handleClick}
            >
              {slotsOpen ? (
                <p>Hide Booking Calender</p>
              ) : (
                <p>Book FREE Center Visit</p>
              )}
            </button>
          </div>
        )}
      </div>
      {!isBookingPage && isDate && <Dates hospital={hospitalInfo} />}
    </div>
  );
}
