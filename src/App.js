import Phone from "./components/Phone/Phone";
import Unsplash from "./components/Unsplash/Unsplash.js";
import Weather from "./components/Weather/Weather.js";
import "./styles.css";

function App(props) {
	return (
		<div>
			<Unsplash></Unsplash>
			<hr />
			<hr />
			<hr />
			<hr />
			<hr />
			<hr />
			<Weather></Weather>
			<hr />
			<hr />
			<hr />
			<hr />
			<hr />
			<hr />
			<h1 className="textCenter">Card component</h1>
			<br />
			<br />
			<br />
			<br />
			<br />
			<Phone
				className="body"
				imageLink="https://m.media-amazon.com/images/I/71KCwNV6MuL._SL1500_.jpg"
				phoneName="OPPO A31 (Mystery Black, 6GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers"
				price="₹12,990.00"></Phone>
			<Phone
				imageLink="https://m.media-amazon.com/images/I/71geVdy6-OS._SL1500_.jpg"
				phoneName="OPPO A74 5G (Fantastic Purple,6GB RAM,128GB Storage) - 5G Android Smartphone | 5000 mAh Battery | 18W Fast Charge | 90Hz LCD Display"
				price="₹16,990.00"></Phone>
			<Phone
				imageLink="https://m.media-amazon.com/images/I/61xXPX7Mv0L._SL1500_.jpg"
				phoneName="OPPO F19s (Glowing Gold, 6GB RAM, 128 Storage) with No Cost EMI/Additional Exchange Offers"
				price="₹19,990.00"></Phone>
			<Phone
				imageLink="https://m.media-amazon.com/images/I/7125Jc1FDrL._SL1500_.jpg"
				phoneName="OPPO A55 (Starry Black, 6GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers"
				price="₹17,490.00"></Phone>
			<Phone
				imageLink="https://m.media-amazon.com/images/I/71k86pEH5LS._SL1500_.jpg"
				phoneName="Oppo A54 (Starry Blue, 4GB RAM, 128GB Storage) with No Cost EMI & Additional Exchange Offers"
				price="₹14,990.00"></Phone>
		</div>
	);
}

export default App;
