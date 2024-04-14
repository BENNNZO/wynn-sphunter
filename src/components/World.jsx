import React, { useState, useEffect } from 'react';

export default function World(props) {
    const { name, time } = props
    let minsLeftColor = msToTimeLeft(time).split(":")[0] <= 10 ? msToTimeLeft(time).split(":")[0] <= 3 ? 'text-green-400' : 'text-yellow-400' : 'text-red-400'
    
    function msToTimeLeft(duration) {
        let seconds = Math.floor((duration / 1000) % 60)
        let minutes = Math.floor((duration / (1000 * 60)) % 60)

        minutes = 19 - (minutes % 20)
        seconds = seconds !== 0 ? 60 - seconds : seconds


        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;

        return `${minutes}:${seconds}`;
    }

    return (
        <section className='w-full sm:h-12 h-16 bg-zinc-900 rounded-sm flex sm:flex-row flex-col sm:justify-between justify-center items-center px-4 hover:bg-zinc-800 duration-150 shadow-md'>
            <p><span className='opacity-20'>World: </span>{name.replace("WC", "")}</p>
            <p>Next SP: <span className={`${minsLeftColor} font-bold`}>{msToTimeLeft(time)}</span></p>
        </section>
    )
}


// time till next sp
// world name