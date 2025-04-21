import { useState } from 'react';

import "./Header.css";

export default function Header() {
	const [ query, setQuery ] = useState("");
	
	const onQueryChange = (e) => {
		setQuery(e.value);
	}

	// TODO: add an onsubmit for the search button that calls a function passed from App to search.
	
	return (
		<>
			<header>
				<div className = "header__content">
					<h1 className = "header__title">What&apos;s going on in the world?</h1>
					<p className = "header__subtitle">Find the latest news on any topic and save them in your personal account.</p>
					<form method = "post" className = "header__search" id = "header__search">
						<input type = "text" value = "Yellowstone" onChange = { onQueryChange } name = "query" className = "header__search-input" />
						<button className = "header__search-button" id = "header__search-button">Search</button>
					</form>
				</div>
			</header>
		</>
	)
}
