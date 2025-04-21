import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css'

import Preloader from "../Preloader/Preloader";
import Navigation from "../Navigation/Navigation";
import Header from "../Header/Header"

function App() {
	

	return (
		<>
			<div className = "root">
				<div className = "page__content">
					<Navigation />
					<Header />

					<BrowserRouter>
						<Routes>
							<Route path = "/" element = { <p></p> } />
							<Route path = "/saved-news" element = {<p></p>} />
						</Routes>
					</BrowserRouter>

					<Preloader />
				</div>
			</div>
		</>
	)
}

export default App
