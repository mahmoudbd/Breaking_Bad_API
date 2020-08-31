import React from 'react';

const Search = ({ getQuery }) => {
	const onChange = (q) => {
		getQuery(q);
	};

	return (
		<section className="search">
			<form>
				<input
					type="text"
					className="form-control"
					onChange={(e) => onChange(e.target.value)}
					placeholder="Search charecters"
					autoFocus
				/>
			</form>
		</section>
	);
};

export default Search;
