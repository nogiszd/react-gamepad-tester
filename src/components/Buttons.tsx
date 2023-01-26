import classes from "../style.module.css";

type Props = {
  buttons: readonly GamepadButton[];
};

const Buttons = (props: Props) => {
  const { buttons } = props;

  return (
    <div className={classes.buttons}>
      {buttons.map((button, index) => {
        return (
          <div
            key={index}
            className={classes.button}
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
