import Preloader from "../Preloader/Preloader";

import './Main.css';

export default function Main() {
	// add an array to store articles found by the search, only when articles populate the array, will preloader be
	// disabled, and the news section will be filled with the found articles, hitting search will also activate the
	// preloader, I think using contexts will be necessary there, the article list should also probably be in App.jsx
	
	return (
		<>
			<main>
				<div className = "main__news-section">
					<Preloader />
				</div>
				<div className = "main__author-card">
					<img className = "main__author-img" alt = "author" src = "https://atlas-content-cdn.pixelsquid.com/stock-images/cheese-cheddar-d7GW9z5-600.jpg" />
					<div className = "main__author-info-ctn">
						<h3 className = "main__author-title">About the author</h3>
						<p className = "main__author-desc">- Short bio about you -</p>
					</div>
				</div>
			</main>
		</>
	);
}
