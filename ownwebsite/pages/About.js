import { Element } from "react-scroll"

export default function About() {
    return (
        <section id='about' className='h-screen scroll-snap-start scroll-snap-y 
            bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500
            '>
            <h1 className='relative top-1/2 w-full text-center 
                text-white font-bold text-8xl'>
                     About 
            </h1>
        </section>
    )
}
