import { useState, useEffect } from "react";
import axios from "axios";
import { SlMagnifier } from "react-icons/sl";
import { nanoid } from "nanoid";
import { useNavigate, useLocation } from "react-router-dom";
// import { Api } from "@mui/icons-material";


export default function SearchItems({onSearch}) {
  const [states, setStates] = useState([]);
  const [city, setCity] = useState([]);

  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const [openStateDropdown, setOpenStateDropdown] = useState(false);
  const [openCityDropdown, setOpenCityDropDown] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  // {API CALL STARTS FROM HERE FOR STATE & CITY}****************

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

  // API CALL FUNCTION ENDS HERE**********************

  const handleSearch = (e)=>{
    e.preventDefault();
    if(!selectedState && !selectedCity) return;
    if(location.pathname === '/search'){
      onSearch?.(selectedState, selectedCity);
    }else{
      navigate(`/search?state=${selectedState}&city=${selectedCity}`)
    }
  }

  return (
    <div>
      <form type='submit' onSubmit={handleSearch} className="flex flex-col md:flex-row justify-center items-center gap-10">
        <div className="w-full md:w-3/4 flex justify-center gap-10">
          {/*STATE DROPDOWN*/}
          <div
            id="state"
            className="relative flex shadow-md items-center bg-blue-50 font-poppins text-gray-400 rounded-xl border border-blue-50 w-2/4 md:w-2/5 py-2 px-2 cursor-pointer"
          >
            <SlMagnifier />
            <div
            className="px-2 w-full text-start bg-transparent text-gray-400"
            onClick={()=>{
              setOpenStateDropdown(!openStateDropdown);
              setOpenCityDropDown(false);
            }}>
              {selectedState || "Select State"}
            </div>
            {openStateDropdown && (
              <ul
              className="absolute top-full left-0 w-full bg-white rounded-xl shadow-lg border border-gray-200 mt-1 max-h-60 overflow-y-auto z-10">
                {states.map((data)=>(
                  <li
                  key={nanoid()}
                  onClick={()=>{
                    setSelectedState(data);
                    setSelectedCity('');
                    setOpenStateDropdown(false);
                  }}
                  className={`px-4 py-2 hover:bg-blue-100 cursor-pointer ${selectedState === data ? "bg-blue-50 font-medium":""}`}>
                    {data}
                  </li>
                ))}
              </ul>
              )
            }
          </div>

          {/*CITY DROPDOWN*/}
          <div
            id="city"
            className={`relative cursor-pointer shadow-md flex items-center font-poppins border border-blue-50 bg-blue-50 text-gray-400 rounded-xl w-2/4 md:w-2/5 py-2 px-2
              ${!selectedState ? "opacity-60 cursor-not-allowed":"cursor-pointer"

              }`}
          >
            <SlMagnifier />
            <div
            className="px-2 w-full bg-transparent text-gray-400 text-start"
            onClick={()=>{
              if(selectedState){
                setOpenCityDropDown(!openCityDropdown);
                setOpenStateDropdown(false);
              }
            }}>
              {selectedCity || "Select City"}
            </div>
            {openCityDropdown && selectedState && (
              <ul
              className="absolute top-full left-0 w-full bg-white rounded-xl shadow-lg borer border-gray-200 mt-1 max-h-60 overflow-y-auto z-10">
                {city.map((cities)=>(
                  <li
                  key={nanoid()}
                  onClick={()=>{
                    setSelectedCity(cities);
                    setOpenCityDropDown(false);
                  }}
                  className={`px-4 py-2 hover:bg-blue-100 cursor-pointer ${
                      selectedCity === cities ? "bg-blue-50 font-medium" : ""
                    }`}
                    >
                    {cities}
                  </li>
                ))}
              </ul>
            )
            }
          </div>
        </div>

        {/*DYNAMIC SEARCH BUTTON*/}
        <button
          type="submit"
          id="searchBtn"
          className="shadow-lg flex items-center justify-center gap-2 w-auto md:w-auto px-3 md:px-6 py-2 bg-sky-500 text-white rounded-md font-semibold font-poppins"
        >
          <SlMagnifier />
          Search
        </button>
      </form>
    </div>
  );
}
