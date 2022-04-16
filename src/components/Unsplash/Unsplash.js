import axios from "axios";
import React, { useState } from "react";
import style from "./Unsplash.module.css";

function Unsplash(props) {
	const [inputValue, SetinputValue] = useState("");
	const [results, Setresults] = useState([]);
	const [id, Setid] = useState(
		"DSkPKYElcOhOjXGWTEbZm_l1cnTKQSBU1nOIW2-DCTY"
	);

	function handleChange(e) {
		SetinputValue(e.target.value);
	}
	const getData = () => {
		const url = `https://api.unsplash.com/search/photos?page=1&query=${inputValue}&client_id=${id}`;

		axios.get(url).then((response) => {
			Setresults(response.data.results);
		});

		SetinputValue("");
	};

	return (
		<div className={style.card}>
			<div>
				<h1 className={style.h1}>UNSPLASH API</h1>
				<input
					type="text"
					value={inputValue}
					onChange={handleChange}
					spellCheck
					placeholder=" Search for Images"
				/>
				<br />
				<br />
				<br />
				<button
					type="submit"
					onClick={getData}
					className={style.btn}>
					Search
				</button>

				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				{results.map((image) => (
					<img
						src={image.urls.small}
						alt={image.alt_description}
						width="250"
						height="250"
						key={image.id}
					/>
				))}
				<br />
				<br />
				<br />
				<br />
			</div>
		</div>
	);
}

export default Unsplash;
