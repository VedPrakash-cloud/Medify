import Blogs from '../assets/Blogs.svg';
import Doctor from '../assets/doctor2-80x80.jpg.svg'
import MultiActionAreaCard from "./blogCard";
import { nanoid } from "nanoid";


export default function BlogsPost(){

    const items =[
        {
            img:Blogs,
            title:'Medical',
            date:'March 31, 2022',
            news:"6 Tips To Protect Your Mental Health When You're Sick",
            thumbnail:Doctor,
            name:'Rebecca Lee'
        },
        {
            img:Blogs,
            title:'Medical',
            date:'March 31, 2022',
            news:"6 Tips To Protect Your Mental Health When You're Sick",
            thumbnail:Doctor,
            name:'Rebecca Lee'
        },
        {
            img:Blogs,
            title:'Medical',
            date:'March 31, 2022',
            news:"6 Tips To Protect Your Mental Health When You're Sick",
            thumbnail:Doctor,
            name:'Rebecca Lee'
        }
    ]

    return(
        <div className="h-full py-10 flex flex-col items-center font-poppins">
            <p className="text-sm text-[#2AA7FF] mb-5 font-semibold">Blog & News</p>
            <h1 className="text-4xl font-semibold text-[#1B3C74] mb-5">Read Our Latest News</h1>
            <div className="flex flex-col md:flex-row gap-5">
                {items.map((card)=>(
                    <MultiActionAreaCard key={nanoid()} cards={card}/>
                ))}
            </div>
        </div>
    )
}