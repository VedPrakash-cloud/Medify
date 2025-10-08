import Search from "../seach/seachBox";
import { useLocation } from "react-router-dom";
import HospitalCard from "../seach/HospitalCard";
import Advertisment from "../assets/Advertisment.svg";
import { Verified } from "@mui/icons-material";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Appointment() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search)
  const stateParams = searchParams.get('state');
  const cityParams = searchParams.get('city');


  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState(stateParams || "");
  const [city, setCity] = useState(cityParams || "");

  const fetchMedicalCenter = async (selectedState, selectedCity) => {
        if(!selectedState || !selectedCity) return;
        setLoading(true);
        try {
          const res = await axios.get(
            `https://meddata-backend.onrender.com/data?state=${selectedState}&city=${selectedCity}`
          );
          setHospitals(res.data);
          setState(selectedState);
          setCity(selectedCity);
        } catch (err) {
          console.error("Unable to fetch Medical center", err);
        }finally{
          setLoading(false);
        }
      };

      useEffect(()=>{
      if(stateParams && cityParams){
        fetchMedicalCenter(stateParams, cityParams);
      }
    }, [stateParams, cityParams]);

      const handleSearch = (newState, newCity)=>{
         fetchMedicalCenter(newState, newCity);
      }


  return (
    <>
      <div className="bg-sky-500 rounded-b-2xl flex flex-col items-center mb-5">
        <div className="bg-white w-3/4 shadow-md rounded-xl p-4 relative -bottom-10">
          <Search onSearch={handleSearch}/>
        </div>
      </div>
      <div className="mt-20 font-poppins p-6">
        <div className="flex md:justify-center text-start">
            {!state ? (
              <p>Please select a State and City...</p>
            ):(
              <div className="w-3/4">
              <h1 className="font-semibold text-lg">
              {hospitals.length} medical centers available in{" "}
              {city ? city.toLowerCase() : "Your City"},{" "}
              {state ? state : "Your State"}
            </h1>
              <div className="flex items-center gap-5">
                <Verified className="bg-transparent" />
              <p className="text-sm text-gray-400">
                Book appointments with minimum wait-time & verified doctor
                details
              </p>
              </div>
            </div>
            )}
          </div>
        <div className="flex mx-10 justify-center gap-10 pt-5">
          <div className="w-3/4">
            {!loading && hospitals.length > 0 ? (
                hospitals.map((hospital) => (
                  <HospitalCard key={hospital["Provider ID"]} data={hospital} />
                ))
              ):(
                <p>No Hospital found...</p>
            )}
          </div>
          <div>
            <img src={Advertisment} alt="Add.svg" />
          </div>
        </div>
      </div>
    </>
  );
}
