import axios from 'axios';
import React, { useState, useEffect } from 'react';

import Hero from './components/Hero';
import World from './components/World';
import Footer from './components/Footer';

function App() {
	const [data, setData] = useState(null)
	const [note, setNote] = useState(true)

	function msToTimeLeft(duration) {
        let seconds = Math.floor((duration / 1000) % 60)
        let minutes = Math.floor((duration / (1000 * 60)) % 60)

        minutes = 19 - (minutes % 20)
        seconds = seconds !== 0 ? 60 - seconds : seconds

        return (minutes * 60) + seconds
    }

	useEffect(() => {
		// axios.get('https://athena.wynntils.com/cache/get/serverList')
		// .then(res => {
		// 	// probably is a better way to do this but this is the best I could do
		// 	let sortedData = [...Object.entries(res.data["servers"])].sort(function (a, b) {
		// 		let keyA = new Date(msToTimeLeft(a[1]['firstSeen']))
		// 		let keyB = new Date(msToTimeLeft(b[1]['firstSeen']))
				
		// 		if (keyA < keyB) return -1
		// 		if (keyA > keyB) return 1
				
		// 		return 0
		// 	});

		// 	console.log(res.data["servers"])
		// 	console.log(sortedData)
		// 	setData(sortedData)
		// })
	}, [])

	return (
		<div className='bg-zinc-950 min-h-screen text-white px-10 relative overflow-hidden'>
			<Hero />
			<span className='block w-2/5 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent m-auto' />
			<section className='flex flex-col gap-2 items-center col-span-2 max-w-3xl mx-auto py-4 md:py-10'>
				{!data ? (
					<>
						<p className='text-red-400 font-bold animate-pulse'>This Can Take Up To 1 Minute To Load</p>
						{[...Array(20)].map(e =>
							<span className='w-full sm:h-12 h-16 bg-zinc-900 rounded-sm flex sm:flex-row flex-col sm:justify-between justify-center items-center px-4 hover:bg-zinc-800 duration-150 shadow-md animate-pulse'>
								<div>World: ...</div>
								<div>Next SP: ...</div>
							</span>
						)}
					</>
				) : (
					data.map((e, i) =>
						<World key={i} name={e[0]} time={e[1]['firstSeen']} />
					)
				)}
			</section>
			<span className='block w-2/5 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent m-auto' />
			{
				note ? (
					<div className='note bg-zinc-800 px-3 py-2 rounded-md border border-zinc-600 shadow-lg w-9/12 max-w-2xl'>
						<div onClick={(e) => {
							e.preventDefault()

							setNote(false)
						}} className='bg-red-400 rounded-full w-5 h-5 absolute bottom-full left-full -translate-x-1/2 translate-y-1/2 cursor-pointer shadow-md border-2 border-red-300'>
							<span className='absolute w-0.5 h-2/3 rounded-full rotate-45 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white'></span>
							<span className='absolute w-0.5 h-2/3 rounded-full -rotate-45 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white'></span>
						</div>
						<p className='text-zinc-400'><strong>Note:</strong> Depending on how long a worlds uptime it can cause a desync so if one world is wrong just move on to the next world.</p>
					</div>
				) : (
					null
				)
			}
			<Footer />
		</div>
	);
}

export default App;
