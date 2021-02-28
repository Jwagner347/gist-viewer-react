import React from 'react';

const SearchResults = (props) => {
	const { gists } = props.location.state.data;
	return (
		<div>
			{!gists.length ? <h1>No Results found.</h1> : gists.map( gist => {

				return (
					<div key={gist.id} className="card" style={{width: "18rem"}}>
						<div className="card-body">
							<h5 className="card-title">{gist.files.length} Files</h5>
							<h6 className="card-subtitle mb-2 text-muted">{gist.url}</h6>
							<p className="card-text">{gist.description}</p>
							<a href={gist.html_url} className="card-link">{gist.html_url}</a>
						</div>
					</div>
				)
			})}
		</div>
		
	);
}
export default SearchResults;