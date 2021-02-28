import React, { useEffect, useState } from 'react';

const url = 'http://localhost:3000/local/graphql';

const Favorites = () => {
	const [favorites, setFavorites] = useState([]);

	useEffect(() => {
		const query = `
		{
			getAllFavorites {
        favorites {
					github_id
					owner_id
	        owner_name
	        url
        }
    	}
		}
	`;

	
	return fetch(url, { 
		method: 'POST',
		headers: {'Content-Type': 'application/graphql'},
		body: JSON.stringify({ query })
	})
	.then((res) => res.json())
	.then(data => {
		setFavorites(data.data?.getAllFavorites?.favorites ?? []);
	})
	.catch( err => console.error(err));
}, []);

	return (
		<div>
			<ul className="list-group">
			{!favorites.length ? 'No Favorites Yet' : favorites.map( fav => {
  				return <li key={fav.github_id} className="list-group-item">{fav.url}</li>
			})}
		</ul>
		</div>
	);
}
export default Favorites;