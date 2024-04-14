import axios from 'axios';
import React, { useState, useEffect } from 'react';

function App() {
	const [worlds, setWorlds] = useState([])

	useEffect(() => {
		// axios.get('https://athena.wynntils.com/cache/get/serverList')
		axios.get('https://random-word-api.herokuapp.com/word')
		.then(res => {
			console.log(res.data)
			setWorlds(res.data)
		})
	}, [])

	return (
		<div className='bg-zinc-950 min-h-screen'>
			<p>
				{worlds.map((e, i) => {
					return e
				})}
			</p>
		</div>
	);
}

export default App;
