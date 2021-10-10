
import React from 'react';
import { useState, useEffect } from 'react'
import { animateScroll as scroll, Link, Button} from 'react-scroll'

export default function Hero() {


    return (
        <section className="relative inset-0 h-screen bg-hero-pattern bg-cover scroll-snap-start scroll-snap-y">
            <div className='absolute inset-0 bg-gray-900 bg-opacity-30'>

            <div className='absolute top-1/3 w-full text-center'>
  
                <h1 className='text-8xl font-sans font-bold text-white p-8'> 
                    Hi. I'm Dennis.
                </h1>
                <p className=' text-lg sm:text-2xl font-serif text-white'> 
                    This is my first own created Website. <br/>Enjoy and comment what you liked and 
                    also not liked.
                </p>
            </div>
            </div>
        </section>
    )
}
