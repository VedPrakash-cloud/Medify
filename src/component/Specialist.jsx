import Drug from '../assets/Drugstore.svg';
import Stethoscope from '../assets/Stethoscope.svg';
import HeartRate from '../assets/Heart Rate.svg';
import HeartMonitor from '../assets/Heart Rate Monitor.svg';
import Immune from '../assets/Immune.svg';
import Blood from '../assets/Blood Sample.svg';
import Xray from '../assets/X-Ray.svg';
import { nanoid } from 'nanoid';

    const items = [
        {
            img:Drug,
            name:'Dentistry',
        },
        {
            img:Stethoscope,
            name:'Primary Care'
        },
        {
            img:HeartRate,
            name:'Cardiology'
        },
        {
            img:HeartMonitor,
            name:'MRI Resonance'
        },
        {
            img:Blood,
            name:'Blood Test'
        },
        {
            img:Immune,
            name:'Pyscologist'
        },
        {
            img:Drug,
            name:'Laboratory'
        },
        {
            img:Xray,
            name:'X-Ray'
        }
    ];

export default function FindSpecialist(){

    const handleClick = ()=>{
        console.log('Speciality button is clicked')
    }

    return(
        <div>
            <div className='bg-blue-100'>
                <h1 className="text-4xl font-poppins font-semibold text-[#1B3C74] pt-10">Find by Specialisation</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 w-3/4 md:w-full justify-self-center gap-4 p-10">
                {items.map((card)=>(
                <div key={nanoid()} className="flex flex-col items-center justify-center bg-white rounded-lg shadow-md py-5">
                    <img src={card.img} alt={card.name} width={80} className='mb-3'/>
                    <p className='text-gray-300 font-poppins font-semibold'>{card.name}</p>
                </div>
            ))}
            </div>
            <button
            type='submit'
            onClick={handleClick}
            className='bg-sky-500 text-white px-5 py-2 rounded-lg mb-5 text-center font-semibold font-poppins'>
                View All
            </button>
            </div>
        </div>
    )
}