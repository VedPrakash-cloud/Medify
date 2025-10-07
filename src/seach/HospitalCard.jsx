import {useState} from 'react';
import Hospital from '../assets/Hospital-Building.svg';
import Like from '../assets/Like.svg';
import Consultation from '../assets/consultation.svg';
import Dates from './appointmentDate';


export default function Hospitals ({data}){
    const[isDate, setIsDate] = useState(false);
    const [slotsOpen, setSlotsOpen] = useState(false);

    const handleClick = ()=>{
        setIsDate((prev)=> !prev);
        setSlotsOpen((prev)=>!prev);
    }
    return (
        <div className='mb-10'>
            <div className='flex bg-white rounded-lg p-5 items-center shadow-lg'>
                <div className='pr-2'>
                    <img src={Hospital} alt="hospitals.svg" />
                </div>
                <div className='font-poppins text-start'>
                    <h1 className='text-sky-500 font-semibold mb-3'>{data['Hospital Name']}</h1>
                    <span className='font-semibold text-sm'>{data.City},{data.State}</span>
                    <p className='text-sm'>{data['Hospital Type']}</p>
                    <img src={Consultation} alt="fees.svg" />
                    <img src={Like} alt="like_button.svg" />
                </div>
                <div className='h-32 grid content-end'>
                    <p className='text-green-500 font-semibold text-[10px] md:text-sm'>Available Today</p>
                    <button className='bg-sky-500 text-white text-[10px] md:text-sm py-2 px-3 md:px-4 rounded-lg' onClick={handleClick}>
                        {slotsOpen ?(
                            <p>Hide Booking Calender</p>
                        ):(
                            <p>Book FREE Center Visit</p>
                        )}</button>
                </div>
            </div>
            {isDate && (<Dates />)}
        </div>
    )
}