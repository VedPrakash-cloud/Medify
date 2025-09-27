import Mobile from '../assets/mobile.png';
import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

export default function DownloadApp(){
    return (
        <div className='flex h-96 items-center justify-center bg-blue-50 p-6 md:p-10'>
            <img src={Mobile} alt="download.png" className='object-contain h-40 md:max-h-full w-min' />
            <div className='w-2/4 text-start font-poppins flex flex-col items-start justify-center'>
                <h1 className='text-xl md:text-5xl font-semibold text-[#1B3C74]'>Download the</h1>
                <p className='mt-2 text-xl md:text-5xl font-semibold text-[#1B3C74]'><span className='text-[#2AA7FF]'>Medify </span>App</p>
                <p className='my-3 text-xs md:text-sm font-semibold'>Get the link to download the app</p>
                <div className='flex flex-col md:flex-row w-full items-start gap-2'>
                    <div className='flex border rounded-xl w-full text-xs md:text-md md:w-3/4'>
                        <span className='p-3 border-r font-semibold flex items-center'>+91</span>
                        <input type="numer" maxLength={10} placeholder='Enter the phone number' className='bg-transparent p-3 outline-none' />
                    </div>
                    <button type='submit' className='bg-[#2AA8FF] text-white font-semibold p-3 rounded-xl'>Send SMS</button>
                </div>
                <div className='flex flex-row md:my-5 w-full md:w-4/5 justify-between text-sm md:text-xl items-center mt-2 md:mt-10'>
                    <button className='bg-black text-white p-2 md:p-3 rounded-lg flex items-center gap-2 justify-center'>
                        <FaGooglePlay size={40} />
                        Google Play
                    </button>
                    <button className='bg-black text-white p-2 md:p-3 rounded-lg flex items-center gap-2 justify-center'>
                        <FaApple size={40}/>
                        App Store
                    </button>
                </div>
            </div>
        </div>
    )
}