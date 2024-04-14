import React from 'react';

export default function Hero() {
    return (
        <section className='py-2 lg:py-4 text-center flex flex-row items-center justify-center gap-2'>
            <img src={process.env.PUBLIC_URL + "/logo192.png"} alt="Soul Point Texture" className='aspect-square w-12 drop-shadow-lg animate-pulse' />
            <h1 className='text-3xl md:text-4xl lg:text-5xl duration-150 font-bold'>Tracker</h1>
        </section>
    )
}