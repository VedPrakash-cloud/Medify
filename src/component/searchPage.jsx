import Hospitals from "../assets/Hospital.svg";
import Drug from "../assets/Drugstore.svg";
import Capsule from "../assets/Capsule.svg";
import Ambulance from "../assets/Ambulance.svg";
import Doctor from "../assets/Doctor.svg";
import Search from '../seach/seachBox';

export default function SearchItem() {
  
  return (
    <div className="relative -mt-[250px]">
      <div className="container mx-auto md:px-20">
        <div className="bg-white shadow-lg shadow-gray-300 rounded-lg p-6 flex flex-col gap-6">
          <Search />
          {/*Drop dwon items ends here*/}
          
          {/*You may be looking starts here*/}
          <div>
            <h3 className="font-poppins text-center text-xl font-semibold mb-5">
              You may be looking for
            </h3>
            <div className="grid grid-cols w-full md:w-3/5 justify-self-center grid-cols-2 md:grid-cols-5 gap-4 text-center">
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
