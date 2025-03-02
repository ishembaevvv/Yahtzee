import { useEffect, useState } from "react";

function App() {
	const [cub1, setCub1] = useState(0);
	const [cub2, setCub2] = useState(0);
	const [cubic1, setCubic1] = useState("");
	const [cubic2, setCubic2] = useState("");
	const [sum, setSum] = useState(0);
	const [modal, setModal] = useState(false);

	console.log("modal", modal);
	console.log("sum", sum);

	const OpenModal = () => {
		if (modal) {
			return (
				<div className="modal">
					<h2>Winner</h2>
				</div>
			);
		}
	};

	const StartGame = () => {
		const random1 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
		const random2 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;

		setCub1(random1);
		setCub2(random2);
		setSum(cub1 + cub2);

		let cubic1, cubic2;

		if (cub1 === 1) cubic1 = "⚀";
		else if (cub1 === 2) cubic1 = "⚁";
		else if (cub1 === 3) cubic1 = "⚂";
		else if (cub1 === 4) cubic1 = "⚃";
		else if (cub1 === 5) cubic1 = "⚄";
		else if (cub1 === 6) cubic1 = "⚅";

		if (cub2 === 1) cubic2 = "⚀";
		else if (cub2 === 2) cubic2 = "⚁";
		else if (cub2 === 3) cubic2 = "⚂";
		else if (cub2 === 4) cubic2 = "⚃";
		else if (cub2 === 5) cubic2 = "⚄";
		else if (cub2 === 6) cubic2 = "⚅";

		setCubic1(cubic1);
		setCubic2(cubic2);
	};

	useEffect(() => {
		if (sum == 7) {
			setModal(true);
		} else {
			setModal(false);
		}
	}, [sum]);

	return (
		<div className="App">
			<ul>
				<li>{cubic1}</li>
				<li>{cubic2}</li>
			</ul>

			<div>{OpenModal()}</div>

			<button onClick={StartGame}>Start</button>
		</div>
	);
}

export default App;
