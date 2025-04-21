import './Preloader.css';

function Preloader() {
	return (
		<>
			<div className = "preloader">
				<div className = "circle-preloader"></div>
				<h3 className = "preloader__subtitle">Searching for news...</h3>
			</div>
		</>
	)
}

export default Preloader
