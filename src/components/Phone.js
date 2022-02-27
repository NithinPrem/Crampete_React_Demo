function Phone(props) {
	return (
		<div>
			<img
				src={props.imageLink}
				alt="oppo phone"
				width="250"
				height="250"
			/>
			<h2>{props.phoneName}</h2>
			<h3>Deal of the Day</h3>
			<h4>{props.price}</h4>
			<br />
			<br />
			<br />
		</div>
	);
}

export default Phone;
