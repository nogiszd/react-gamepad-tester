import React from "react";
import Stick from "./Stick";
import "../style.css";

const Axes = (props) => {
	const axes = ["Axis 0", "Axis 1", "Axis 2", "Axis 3"];

	return (
		<div>
			<div>
				{props.gamepad.axes.length === 4 && (
					<div className="Axes__Container">
						<Stick axes={[props.gamepad.axes[0], props.gamepad.axes[1]]} />
						<Stick axes={[props.gamepad.axes[2], props.gamepad.axes[3]]} />
					</div>
				)}
			</div>
			<div className="Axes">
				{props.gamepad.axes.map((stick, index) => {
					return (
						<div key={index}>
							<span>{axes[index]}:</span> {stick.toFixed(4)}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Axes;
