import React, { useState, useEffect } from 'react';
import Header from './components/ui/Header';
import CharacterGrid from './components/characters/CharacterGrid';
import Search from './components/ui/Search';
import axios from 'axios';
import './App.css';

function App() {
	const [ items, setItems ] = useState([]);
	const [ isLoading, setIsloading ] = useState(true);
	const [ query, setQuery ] = useState('');
	useEffect(
		() => {
			const fetchItems = async () => {
				const result = await axios.get(`https://www.breakingbadapi.com/api/characters?name=${query}`);
				setItems(result.data);
				setIsloading(false);
			};
			fetchItems();
		},
		[ query ]
	);
	return (
		<div className="container">
			<Header />
			<Search getQuery={(q) => setQuery(q)} />
			{items.length === 0 && !isLoading && <h1 className="card center">No Character found ...</h1>}
			<CharacterGrid isLoading={isLoading} items={items} />
		</div>
	);
}

export default App;
