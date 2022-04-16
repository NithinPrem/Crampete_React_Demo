import React from "react";
import style from "./Phone.module.css";
function Phone(props) {
	return (
		<>
			<div>
				<div className={style.cardBody}>
					<img
						src={props.imageLink}
						alt="oppo phone"
						width="250"
						height="250"
					/>
					<div>
						<h2 className={style.h2}>{props.phoneName}</h2>
						<h3 className={style.h3}>Deal of the Day</h3>
						<h4 className={style.h4}>{props.price}</h4>
					</div>
					<br />
					<br />
					<br />
				</div>
			</div>
		</>
	);
}

export default Phone;
