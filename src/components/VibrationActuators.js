import React from "react";
import "../style.css";

const VibrationActuators = (props) => {
	const handleVibration = (gamepad) => {
		gamepad.playEffect(gamepad.type, {
			startDelay: 0,
			duration: 1000,
			weakMagnitude: 1,
			strongMagnitude: 1,
		});
	};

	return (() => {
		if (props.gamepad.vibrationActuator) {
			return (
				<div className="Vibration">
					<p>
						Vibration:{" "}
						<span style={{ color: "green", fontWeight: "bold" }}>
							Available
						</span>
					</p>
					<button
						onClick={() => {
							handleVibration(props.gamepad.vibrationActuator);
						}}
					>
						Vibrate
					</button>
				</div>
			);
		}
		return (
			<div className="Vibration">
				<p>
					Vibration:{" "}
					<span style={{ color: "grey", fontWeight: "bold" }}>None</span>
				</p>
			</div>
		);
	})();
};

export default VibrationActuators;
