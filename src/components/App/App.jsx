import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css'

import Navigation from "../Navigation/Navigation";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

function App() {
	

	return (
		<>
			<div className = "root">
				<div className = "page__content">
					<Navigation />
					<Header />

					<BrowserRouter>
						<Routes>
							<Route path = "/" element = { <Main /> } />
							<Route path = "/saved-news" element = {<p></p>} />
						</Routes>
					</BrowserRouter>

					<Footer />
				</div>
			</div>
		</>
	)
}

export default App
