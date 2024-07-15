import React from "react";
import Digit from "../Digit";

let Home = (props) => {
	
	let data = [
		{ unit: props.six },
		{ unit: props.five },
		{ unit: props.four },
		{ unit: props.three },
		{ unit: props.two },
		{ unit: props.one }
	]


	return (
		<div className="d-flex justify-content-between p-5" style={{width: "100%", height: "100%", background: "black", textAlign: "center"}}>
			<div className="rounded border border-secondary p-2 " style={{width: "9rem", height: "16rem", fontSize: "160px", background:"black", color: "white", textAlign: "center"}}>
				<i className="fa-regular fa-clock" style={{ color: "#ffffff", fontSize: "120px" }}></i>
			</div>

			{data.map((value, index, array) => {
				return <Digit key={index} unit={value.unit} />
			})}
		</div>
	);
};

export default Home;
