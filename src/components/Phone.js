import "../components/phone.css";
function Phone(props) {
	return (
		<div className="card">
			<div className="cardBody">
				<img
					src={props.imageLink}
					alt="oppo phone"
					width="250"
					height="250"
				/>
				<div>
					<h2 className="h2">{props.phoneName}</h2>
					<h3 className="h3">Deal of the Day</h3>
					<h4 className="h4">{props.price}</h4>
				</div>
				<br />
				<br />
				<br />
			</div>
		</div>
	);
}

export default Phone;
