import { useState, useEffect } from "react";
import axios from "axios";
import { SlMagnifier } from "react-icons/sl";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";


export default function SearchItems() {
  const [states, setStates] = useState([]);
  const [city, setCity] = useState([]);
  const [medicalCenter, setMedicalCenter] = useState([]);

  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const navigate = useNavigate();

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

  const handleSearch = ()=>{
    navigate('/search',{state:{
      hospitals:medicalCenter,
      city: selectedCity,
      state:selectedState
    }})
  }

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
    <div>
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
          onClick={handleSearch}
          className="shadow-lg flex items-center justify-center gap-2 w-auto md:w-auto px-3 md:px-6 py-2 bg-sky-500 text-white rounded-md font-semibold font-poppins"
        >
          <SlMagnifier />
          Search
        </button>
      </div>
    </div>
  );
}
