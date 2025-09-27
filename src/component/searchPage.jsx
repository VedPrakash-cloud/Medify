import { useState, useEffect } from "react";
import axios from "axios";
import { SlMagnifier } from "react-icons/sl";
import Hospitals from "../assets/Hospital.svg";
import Drug from "../assets/Drugstore.svg";
import Capsule from "../assets/Capsule.svg";
import Ambulance from "../assets/Ambulance.svg";
import Doctor from "../assets/Doctor.svg";
import { nanoid } from "nanoid";

export default function SearchItem() {
  const [states, setStates] = useState([]);
  const [city, setCity] = useState([]);
  const [medicalCenter, setMedicalCenter] = useState([]);

  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  useEffect(() => {
    const fetchState = async () => {
      try {
        const response = await axios.get(
          "https://meddata-backend.onrender.com/states"
        );
        setStates(response.data);
      } catch (err) {
        console.error("unable to fetch the state list", err);
      }
    };
    fetchState();
  }, []);

  useEffect(() => {
    if (!selectedState) return;
    const fetchCity = async () => {
      try {
        const res = await axios.get(
          `https://meddata-backend.onrender.com/cities/${selectedState}`
        );
        setCity(res.data);
      } catch (err) {
        console.error("Unable to Fetch the cities", err);
      }
    };
    fetchCity();
  }, [selectedState]);

  useEffect(() => {
    if (!selectedCity) return;
    const fetchMedicalCenter = async () => {
      try {
        const res = await axios.get(
          `https://meddata-backend.onrender.com/data?state=${selectedState}&city=${selectedCity}`
        );
        setMedicalCenter(res.data);
      } catch (err) {
        console.error("Unable to fetch Medical center", err);
      }
    };
    fetchMedicalCenter();
  }, [selectedState, selectedCity]);

  const handleChange = (e) => {
    setSelectedState(e.target.value);
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  return (
    <div className="relative -mt-[250px]">
      <div className="container mx-auto md:px-20">
        <div className="bg-white shadow-lg shadow-gray-300 rounded-lg p-6 flex flex-col gap-6">
          <div className="flex flex-col md:flex-row justify-center items-center gap-10">
            <div className="w-full md:w-3/4 flex justify-center gap-10">
              <div
                id="state"
                className="flex shadow-md items-center bg-blue-50 font-poppins text-gray-400 rounded-xl border border-blue-50 w-2/4 md:w-2/5 py-2 px-2"
              >
                <SlMagnifier />
                <select
                  key={states.name}
                  className="focus:outline-none appearance-none px-2 bg-transparent w-full"
                  value={selectedState}
                  onChange={handleChange}
                >
                  <option value="State">State</option>
                  {states.map((data) => (
                    <option key={nanoid()} value={data}>
                      {data}
                    </option>
                  ))}
                </select>
              </div>
              <div
                id="city"
                className=" shadow-md flex items-center font-poppins border border-blue-50 bg-blue-50 text-gray-400 rounded-xl w-2/4 md:w-2/5 py-2 px-2"
              >
                <SlMagnifier />
                <select
                  key={city.name}
                  className="focus:outline-none appearance-none px-2 bg-transparent w-full"
                  value={selectedCity}
                  disabled={!selectedState}
                  onChange={handleCityChange}
                >
                  <option value="City">City</option>
                  {city.map((cities) => (
                    <option key={nanoid()} value={cities}>
                      {cities}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <button
              type="submit"
              id="searchBtn"
              onClick={() => console.log(medicalCenter)}
              className="shadow-lg flex items-center justify-center gap-2 w-auto md:w-auto px-3 md:px-6 py-2 bg-sky-500 text-white rounded-md font-semibold font-poppins"
            >
              <SlMagnifier />
              Search
            </button>
          </div>
          {/*Drop dwon items ends here*/}
          
          {/*You may be looking starts here*/}
          <div>
            <h3 className="font-poppins text-center text-xl font-semibold mb-5">
              You may be looking for
            </h3>
            <div className="grid grid-cols w-3/5 md:w-full justify-self-center grid-cols-2 md:grid-cols-5 gap-4 text-center">
              <div className="p-5 bg-sky-100 rounded-md flex flex-col items-center">
                <img
                  src={Doctor}
                  alt="doctor.svg"
                  className="text-sky-500 mb-5"
                />
                <p className="text-gray-300">Doctors</p>
              </div>
              <div className="p-5 bg-sky-100 rounded-md flex flex-col items-center">
                <img src={Drug} alt="labs.svg" className="text-sky-500 mb-5" />
                <p className="text-gray-300">Labs</p>
              </div>
              <div className="p-5 bg-sky-100 rounded-md flex flex-col items-center">
                <img
                  src={Hospitals}
                  alt="hospitals.svg"
                  className="text-sky-500 mb-5"
                />
                <p className="text-gray-300">Hospitals</p>
              </div>
              <div className="p-5 bg-sky-100 rounded-md flex flex-col items-center">
                <img
                  src={Capsule}
                  alt="medicalStore.svg"
                  className="text-sky-500 mb-5"
                />
                <p className="text-gray-300">Medical Store</p>
              </div>
              <div className="p-5 bg-sky-100 rounded-md flex flex-col items-center">
                <img
                  src={Ambulance}
                  alt="ambulance.svg"
                  className="text-sky-500 mb-5"
                />
                <p className="text-gray-300">Ambulance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
