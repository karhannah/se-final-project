import './Navigation.css';

export default function Navigation() {
	return (
		<>
			<div className = "navbar">
				<h3 className = "navbar__logo">NewsExplorer</h3>
				<div className = "navbar__user-container">
					{/* temp, will be done in react rather than hardcoded later */}
					<a className = "navbar__route-button navbar__route-active" href = "/"><p>Home</p></a>
					<button type = "button" className = "navbar__signin-button">Sign in</button>
				</div>
			</div>
		</>
	)
}
