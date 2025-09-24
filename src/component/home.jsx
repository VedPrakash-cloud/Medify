import logo from '../assets/logo.svg'

export default function NavBar(){
    return (
        <div>
            <nav>
                <div className="bg-sky-500 text-white text-center w-full text-sm p-2">
                    <p>The health and well-being of our patients and their health care team will always be our priority,
                        so we follow the best practices for cleanliness.
                    </p>
                </div>
                <div className='flex flex-row justify-center justify-between px-20 py-5 bg-[#E7F0FF]'>
                    <img src={logo} alt="logo.svg" />
                    <div className='flex flex-col md:flex-row justify-end items-center gap-5'>
                        <div>Find Doctors</div>
                        <div>Hospitals</div>
                        <div>Medicines</div>
                        <div>Surgeries</div>
                        <div>Software for Provider</div>
                        <div>Facilities</div>
                        <button className='font-poppins bg-sky-500 rounded-md px-5 py-2 text-white'>My Bookings</button>
                    </div>
                </div>
            </nav>
        </div>
    )
}