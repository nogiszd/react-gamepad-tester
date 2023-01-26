import classes from "../style.module.css";

type Props = {
  gamepad: Gamepad;
};

const VibrationActuators = (props: Props) => {
  const { gamepad } = props;

  const handleVibration = (gamepad: GamepadHapticActuator) => {
    gamepad.playEffect(gamepad.type, {
      startDelay: 0,
      duration: 1000,
      weakMagnitude: 1,
      strongMagnitude: 1,
    });
  };

  return (
    <>
      {gamepad.vibrationActuator ? (
        <div className={classes.vibration}>
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
      ) : (
        <div className={classes.vibration}>
          <p>
            Vibration:{" "}
            <span style={{ color: "grey", fontWeight: "bold" }}>None</span>
          </p>
        </div>
      )}
    </>
  );
};

export default VibrationActuators;
