import Search from "../seach/seachBox";
import { useLocation } from "react-router-dom";
import HospitalCard from "../seach/HospitalCard";
import Advertisment from "../assets/Advertisment.svg";
import { Verified } from "@mui/icons-material";

export default function Appointment() {
  const location = useLocation();
  const hospitals = location.state?.hospitals || [];
  const city = location.state?.city;
  const state = location.state?.state;

  return (
    <>
      <div className="bg-sky-500 rounded-b-2xl flex flex-col items-center mb-5">
        <div className="bg-white w-3/4 shadow-md rounded-xl p-4 relative -bottom-10">
          <Search />
        </div>
      </div>
      <div className="mt-20 font-poppins p-6">
        <div className="flex md:justify-center text-start">
          <div className="w-3/4">
            <p className="font-semibold text-lg">
              {hospitals.length} medical centers available in{" "}
              {city.toLowerCase()}, {state}
            </p>
            <div className="flex items-center gap-5">
              <Verified className="bg-transparent" />
              <p className="text-sm text-gray-400">
                Book appointments with minimum wait-time & verified doctor
                details
              </p>
            </div>
          </div>
        </div>
        <div className=" flex justify-center gap-10 pt-5">
          <div>
            {hospitals.map((hospital) => (
              <HospitalCard key={hospital["Provider ID"]} data={hospital} />
            ))}
          </div>
          <div className="h-64 w-64">
            <img src={Advertisment} alt="Add.svg" />
          </div>
        </div>
      </div>
    </>
  );
}
