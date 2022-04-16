import axios from "axios";
import React, { useState } from "react";
import styles from "./Weather.module.css";

const Weather = () => {
	const [input, setinput] = useState("");
	const [result, setresult] = useState({});
	const [id] = useState(`cb7bc640cc9387d1849f886a3d2092aa
`);

	const weatherhandleChange = (e) => {
		setinput(e.target.value);
	};

	const getWeatherData = () => {
		const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${id}&units=metric`;

		axios.get(url).then((response) => {
			setresult(response.data);
		});

		setinput("");
	};

	return (
		<div className={styles.card}>
			<div>
				<h1>WEATHER API</h1>
				<input
					type="text"
					value={input}
					onChange={weatherhandleChange}
					spellCheck
					placeholder=" Enter a City"
				/>
				<br />
				<br />
				<br />
				<button
					type="submit"
					onClick={getWeatherData}
					className={styles.btn}>
					Search
				</button>
				<br />
				<br />
				<br />
				<div className={styles.container}>
					{result.name ? (
						<h1 className={styles.h1bold}>
							Weather Forcast : {result.name}
						</h1>
					) : null}

					{result.sys ? (
						<h2> Country : {result.sys.country}</h2>
					) : null}

					{result.coord ? (
						<h2>Longitude : {result.coord.lon}</h2>
					) : null}

					{result.coord ? (
						<h2>Latitude : {result.coord.lat} </h2>
					) : null}

					{result.main ? (
						<h2> Temperature : {result.main.temp}&deg;C</h2>
					) : null}

					{result.main ? (
						<h2>
							Feels like : {result.main.feels_like}&deg;C
						</h2>
					) : null}

					{result.main ? (
						<h2>
							Min Temperature : {result.main.temp_min}&deg;C
						</h2>
					) : null}

					{result.main ? (
						<h2>
							Max Temperature : {result.main.temp_max}&deg;C
						</h2>
					) : null}

					{result.main ? (
						<h2>Humidity : {result.main.humidity}%</h2>
					) : null}

					{result.weather ? (
						<h2>
							Description : {result.weather[0].description}
						</h2>
					) : null}
				</div>
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
			</div>
		</div>
	);
};

export default Weather;
