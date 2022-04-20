import React from "react";
import "../style.css";

const Buttons = (props) => {
	return (
		<div className="Buttons">
			{props.gamepad.buttons.map((button, index) => {
				return (
					<div
						key={index}
						className="Button"
						style={{
							background: `rgb(${255 - button.value * 36},${
								255 - button.value * 227
							},${255 - button.value * 227})`,
							color: `rgb(${0 + button.value * 255},${0 + button.value * 255},${
								0 + button.value * 255
							})`,
						}}
					>
						<span>B{index}</span>
						{button.value.toFixed(2)}
					</div>
				);
			})}
		</div>
	);
};

export default Buttons;
