import oldAge from '../assets/oldAge.svg';
import Blue from '../assets/blueTick.svg';

export default function PatientCaring(){
    return(
        <div className='flex bg-blue-50 p-6 md:p-20 gap-5 items-center'>
            <img src={oldAge} alt="patients.svg" className='max-h-xs md:max-h-sm max-w-xs md:max-w-sm' />
            <div className='font-poppins text-start max-h-sm md:h-full mt-10 md:mt-0 text-sm/7'>
                <p className=' text-[#2AA7FF] font-semibold text-xs'>HELPING PATIENTS FROM AROUND THE GLOBE!!</p>
                <div className='flex gap-2 my-2'>
                    <p className='text-4xl font-semibold text-[#1B3C74]'>Patient</p>{' '}
                    <p className='text-4xl font-semibold text-[#2AA7FF]'>Caring</p>
                </div>
                <p className='text-gray-500'>Our goal is to deliver quality of care in a courteous, respectful, and
                    compassionate manner. We hope you will allow us to care for you and
                    strive to be the first and best choice for healthcare.
                </p>
                <div className='font-semibold text-[#1B3C74]'>
                    <div className='flex gap-2 my-4'>
                        <img src={Blue} alt="tick.svg" />
                        <span>Stay Updated About Your Health</span>
                    </div>
                    <div className='flex gap-2 my-4'>
                        <img src={Blue} alt="tick.svg" />
                        <span>Check Your Results Online</span>
                    </div>
                    <div className='flex gap-2 my-4'>
                        <img src={Blue} alt="tick.svg" />
                        <span>Manage Your Appointments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}