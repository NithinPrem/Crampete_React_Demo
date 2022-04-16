import React from "react";
import {
	BrowserRouter as Router,
	Link,
	Route,
	Routes,
} from "react-router-dom";
import style from "../Layout/Layout.module.css";
import Unsplash from "../Unsplash/Unsplash";
import Weather from "../Weather/Weather";

function Layout(props) {
	return (
		<div>
			<Router>
				<nav className={style.nav}>
					<ul className={style.ul}>
						<Link to="/Crampete_React_Demo/UnsplashAPI">
							<li>Unsplash API</li>
						</Link>
						<Link to="/Crampete_React_Demo/WeatherAPI">
							<li>Weather API</li>
						</Link>
						{/* <Link to="/CardComponent">
							<li>Card Component</li>
						</Link> */}
					</ul>
				</nav>

				<Routes>
					<Route
						path="/Crampete_React_Demo/UnsplashAPI"
						element={<Unsplash />}></Route>
					<Route
						path="/Crampete_React_Demo/WeatherAPI"
						element={<Weather />}></Route>
					{/* <Route
						path="/CardComponent"
						element={<Phone />}></Route> */}
				</Routes>
			</Router>
			{props.children}
			<footer>
				<p>
					&copy; 2022
					<a
						href="https://github.com/NithinPrem"
						target="_blank"
						rel="noreferrer">
						Nithin Prem
					</a>
				</p>
			</footer>
		</div>
	);
}

export default Layout;
