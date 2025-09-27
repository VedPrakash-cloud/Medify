import Happy from '../assets/Happy_Customer.svg';



export default function HappyCustomer(){
    return(
        <div className='flex flex-col md:flex-row items-center gap-10 px-20 py-10 bg-blue-50'>
            <div className='w-full md:w-2/4 text-start flex flex-col justify-center font-poppins'>
                <p className='text-[#2AA7FF] text-xs font-semibold'>CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.</p>
                <h2 className='text-4xl font-semibold text-[#1B3C74] my-4'>Our Families</h2>
                <p className='text-[#77829D] text-lg/8'>We will work with you to devlop individualised care plans,
                    including management of chronic diseases. If we cannot assist,
                    we can provide referrals or advice about the type of practitioner
                    you require. We treat all enquiries sensitively and in the strictest
                    confidence.
                </p>
            </div>
            <div className='md:max-h-sm h-[500px] w-max'>
                <img src={Happy} alt="happy-customer.svg" className='object-cover h-full w-full'/>
            </div>
        </div>
    )
}