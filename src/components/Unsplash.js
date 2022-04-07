import axios from "axios";
import { useState } from "react";
import "./Unsplash.css";

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
	};

	return (
		<div className="card">
			<div>
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<h1 className="h1">UNSPLASH API</h1>
				<input
					type="text"
					className="input"
					onChange={handleChange}
					spellCheck
				/>
				<br />
				<br />
				<br />
				<button
					type="submit"
					onClick={getData}
					className="btn">
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
