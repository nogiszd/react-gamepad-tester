import Buttons from "./Buttons";
import Axes from "./Axes";
import VibrationActuators from "./VibrationActuators";
import "../style.css";

const Gamepad = (props: any) => {
  return (
    <div className="Gamepad">
      <div className="GamepadTitle">
        <h2>
          {props.gamepad.id}{" "}
          <span className="GamepadTitle__subtitle">
            (GPID {props.gamepad.index})
          </span>
        </h2>
      </div>

      <Buttons gamepad={props.gamepad} />

      <Axes gamepad={props.gamepad} />

      <div className="Timestamp">
        Timestamp: {props.gamepad.timestamp.toFixed(4)}
      </div>

      <VibrationActuators gamepad={props.gamepad} />
    </div>
  );
};

export default Gamepad;
