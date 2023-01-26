import Buttons from "./Buttons";
import Axes from "./Axes";
import VibrationActuators from "./VibrationActuators";
import classes from "../style.module.css";

type Props = {
  gamepad: Gamepad;
};

const Gamepad = (props: Props) => {
  const { gamepad } = props;

  return (
    <div className={classes.gamepad}>
      <div className={classes.gamepadTitle}>
        <h2>
          {gamepad.id}{" "}
          <span className={classes["gamepadTitle__subtitle"]}>
            (GPID {gamepad.index})
          </span>
        </h2>
      </div>

      <Buttons buttons={gamepad.buttons} />

      <Axes axesList={gamepad.axes} />

      <div className={classes.timestamp}>
        Timestamp: {gamepad.timestamp.toFixed(4)}
      </div>

      <VibrationActuators gamepad={gamepad} />
    </div>
  );
};

export default Gamepad;
